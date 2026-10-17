# 1. Getting started

## Dependencies

Two artifacts are needed for a test that uses rules. Declare rule support **before**
`teavm-junit`:

```xml
<!-- Declared first: its classes take precedence over teavm-junit's. -->
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>instanto-teavm-extensions</artifactId>
  <version>0.1.0-SNAPSHOT</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>webapp-testkit-dom</artifactId>
  <version>0.1.0-SNAPSHOT</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.teavm</groupId>
  <artifactId>teavm-junit</artifactId>
  <scope>test</scope>
</dependency>
```

Order matters because rule support works by shadowing classes in `teavm-junit`, and a
duplicated class is chosen by classpath order. If `teavm-junit` comes first, TeaVM's
own test entry point is compiled in and JUnit rules are skipped. That used to happen
silently. Rule support now checks the ordering while compiling and fails the build,
naming both jars.

Add `webapp-testkit-app` as well to stage a separately built application; see
[chapter 6](staged-applications.md).

## The browser

These are real browser tests. TeaVM does not bundle a browser, so one must be
installed and on the path. Surefire selects it:

```xml
<systemPropertyVariables>
  <teavm.junit.target>${project.build.directory}/js-tests</teavm.junit.target>
  <teavm.junit.js.runner>browser-chrome</teavm.junit.js.runner>
</systemPropertyVariables>
```

`browser-firefox` is the other supported value.

## A first test

```java
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class GreetingTest {

  @Rule public DomRule dom = new DomRule();

  @Test
  public void greets() {
    Dom.render("<h1>Hello</h1>");

    expect(Dom.findByRole("heading", "Hello")).toBeVisible();
  }
}
```

`@RunWith(TeaVMTestRunner.class)` compiles the test to JavaScript and runs it in the
browser. `@SkipJVM` stops it also running on the JVM, where there is no document.
`DomRule` removes the test's container afterwards, so the next test starts from an
empty page.

`Dom.render` is for small fixtures. Real subjects arrive in one of two ways, covered
next.


## Compiler modes and current failures

Verified locally with TeaVM 0.16.0, Java 21 and Chrome, 4 October 2026. The
ThreadLocal diagnostic flag was enabled for the webapp-testkit runs. The
standalone reproducers use only upstream TeaVM and JUnit: no Instanto parent,
compiler extension, Sarto runtime, fake clock or application staging.

The names of TeaVM's test modes matter. `optimized` means `FULL` without
minification, while `minified` means `SIMPLE` with minification. The default is
`SIMPLE` without minification. These are separate compiler axes; turning off
`optimized` does not turn off minification. See the
[0.16.0 runner configuration](https://github.com/konsoletyper/teavm/blob/0.16.0/tools/junit/src/main/java/org/teavm/junit/TeaVMTestConfiguration.java).

| Failure | Where reproduced | Diagnosis and current handling |
| --- | --- | --- |
| Class initialization skipped on a catch path | JS/Wasm GC, including `SIMPLE` | Fixed by the local opt-in `teavm-class-init-fix` compiler profile. Boolean, umbrella handler and frame failures are variants of this one defect. |
| Catch reuses a field read skipped by an exception | JS/Wasm GC `ADVANCED` and `FULL` | Separate from initialization. A draft patch invalidates the cache on handler entry; normal builds still need `SIMPLE` for this case. |
| Timer call through null | JS `ADVANCED` and `FULL` | A draft patch explicitly lowers global calls before optimization. Normal builds still use `SIMPLE` for affected calls. |
| Fake clock's `now` becomes a non-function | Minified JS, even at `SIMPLE` | FakeDate has a local workaround. A draft compiler patch prevents capture of generated JSBody parameter names. |
| `JSPromise<String>.await()` produces invalid Wasm | Wasm GC `FULL` | A draft patch makes the cast-check temporary nullable in suspendable methods. Normal builds still use `SIMPLE` for this case. |

These are five distinct compiler defects. The iframe DOM cast failure was a
separate gap in our plugin's Wasm support and is fixed locally. Unsupported
browser callback ThreadLocal semantics and the already-backported JUnit lifecycle
fix are also separate from this compiler issue list.

### Version comparison and fix status

The original five standalone reproducers (including the DOM realm control,
before the separate field-read defect was added) were rerun in separate build directories with
TeaVM **0.15.0 and 0.16.0**, using the same Java 21 and Chrome installations.
All five fail on both versions with the same symptoms: null timer receiver in
optimized JS, nested-name capture in minified JS, cross-window type rejection,
missing Boolean initialization in ordinary JS/Wasm, and invalid optimized Wasm
for `JSPromise.await()`. Each test classpath contained only the selected TeaVM
version. These reproductions therefore predate 0.16; the earliest affected
release has not been established.

The local fixes cover the missing Wasm DOM realm support and a workaround for
our fake clock's minifier collision. `instanto-teavm` now also has an optional
class-initialization compiler patch, selected with `-Pteavm-class-init-fix` on
TeaVM 0.16.0. It has been built and tested locally, not published. No compiler
fix is supplied for the timer, general JSBody name capture or Wasm promise code
generation in normal builds. Choosing `SIMPLE` avoids the observed timer and promise
failures, but does not itself fix the class-initialization reproducer.

Draft source patches for all five compiler defects are now saved in
`instanto-teavm/upstream-fixes`. Its isolated review fixture passes 32 tests at
each of SIMPLE, ADVANCED and FULL, covering JS with minification off/on and Wasm
GC where applicable. The four new patches are not enabled by the consumer
profiles. The existing class-initialization profile remains unchanged. See the
compiler-fix proposal section in `instanto-teavm/README.md` for the patches,
verification command and adoption limits.

To repeat the older-version comparison, add `-Dteavm.version=0.15.0` to the
standalone fixture command below; use `clean test` when changing versions in
the same build directory. Comparison logs are
`/tmp/teavm-version-0.15.0-full.log` and
`/tmp/teavm-version-0.16.0-full.log`.

### Timer lowering

This ordinary program reproduces the failure, with no fake clock installed:

```java
List<String> values = new ArrayList<>();
int handle = Window.setTimeout(() -> values.add("fired"), 100000);
Window.clearTimeout(handle);
```

The affected generated JavaScript has this structure:

```javascript
receiver = null;
method = "setTimeout";
receiver[method](callback, 100000);
```

`Window.setTimeout` is a `@JSTopLevel` method. TeaVM's JSO lowering represents
its global receiver using a null sentinel. The JavaScript injector recognizes
that sentinel only when the argument is a literal constant expression. At the
higher optimization levels the argument can be a variable holding null, so the
injector emits an ordinary member call instead of a global call. That is why
this particular `ArrayList`-capturing lambda fails while a trivial timer may work.
The failure happens while scheduling, before the timer callback executes; it is
unrelated to callback thread context.

The relevant boundary is
[`JSNativeInjector.generate`, `invoke` case and `isNull`](https://github.com/konsoletyper/teavm/blob/0.16.0/jso/impl/src/main/java/org/teavm/jso/impl/JSNativeInjector.java)
and `JSValueMarshaller.moduleRef` / `JSClassProcessor.getCallTarget`. We have
isolated the wrong lowering at that boundary. The draft fix now preserves the
top-level-call distinction explicitly through IR transformations. It does not
depend on the final receiver expression being a literal. Tests cover global
strict `this`, varargs and unchanged instance receiver behavior.

A standalone Maven application reproduces this at both `ADVANCED` and `FULL`
and passes at `SIMPLE`. This is not specific to the JUnit runner.

The earlier Sarto re-entry timeout has the same cause. In
`SynchronousCallerTeaVmTest.reentersAWaitingUiServiceWithoutStoppingTheBrowserEventLoop`,
the first timer schedules the `browser.turn` event before dispatching to the
catalog service. Its optimized code assigns null to the receiver, then calls
`receiver["setTimeout"](...)`. That throws before either callback is scheduled;
the service task exits before shutting down its executor, so the later
`awaitTermination` assertion fails. A fresh run with ThreadLocal checks enabled
reproduces the failure at `FULL` and passes at `SIMPLE`, including minified JS.
The older run with checks disabled has the same null-receiver exception. This
explains the observed timeout without attributing it to service re-entry or
ThreadLocal detection.

### Fake Date and minification

The fake clock used a nested constructor with parameters `a, b, c, d, e, f, h`
and captured an outer callback called `now`. TeaVM renamed the outer callback
to `e` but retained the nested parameter `e`:

```javascript
function install(window, schedule, cancel, e, elapsed) {
  function FakeDate(a, b, c, d, e, f, h) {
    return new RealDate(e()); // e is the nested argument, not the captured callback
  }
}
```

A zero-argument `new Date()` therefore tried to call undefined, producing
`e is not a function`. The standalone JSBody reproducer reduces this further:
`function read(b) { return value(); } return read();`, where minification renames
`value` to `b`. The compiler must avoid introducing this capture when substituting
JSBody parameter names into nested scopes (`JSBodyAstEmitter` / `AstWriter`).

The local workaround makes `FakeDate` use `arguments[0]` through `arguments[6]`
with no formal parameters, removing the shadowing names. Tests retain checks for
fake current time, explicit epoch time, and all seven calendar-date arguments.
This fixes our clock, not arbitrary third-party JSBody code with similar captures.

### Iframe casts and the missing Wasm support

Each iframe owns distinct DOM constructors. An input from the child satisfies
`input instanceof childWindow.HTMLInputElement`, but not
`input instanceof parentWindow.HTMLInputElement`.

`FramedApplication.page()` passes the child's body into `DomScope`.
`Objects.requireNonNull` returns `Object`, so Java inserts a checked cast back to
`HTMLElement`. The Wasm JSO runtime used the parent window's constructor and
rejected that valid child element with `ClassCastException` at `DomScope` line 22.
This happened with optimization off too.

Our existing `DomRealmPlugin` already made JS casts aware of a node's owning
window, but returned immediately on the Wasm backend. It now replaces the two
Wasm JSO cast predicates with the same narrow check used by JS. It first tries
the ordinary check, then accepts a DOM node through its owning window's native
DOM constructor. Wrong element types still fail; unrelated JavaScript object
casts retain their normal checks. This remains in webapp-testkit-dom, where
cross-window testing is needed, rather than in the general compiler extensions.

`DomRealmTeaVmTest` failed before the change and passes afterward across JS
normal/optimized/minified and Wasm normal/optimized. The full examples suite
also passes at `SIMPLE`, including the previously failing frame tests.

### The additional optimized frame failure

After fixing casts, the full optimized frame run exposed a different failure in
`capturesMissingApplicationResources`: its polling promise unboxed null instead
of receiving `false` and reporting the missing file. Generated code read
`Boolean.FALSE` without initializing `Boolean` on the exception path.

The standalone reproducer needs neither a frame nor a promise:

```java
Boolean result;
try {
    failingCall();
    result = Boolean.TRUE;
} catch (RuntimeException failure) {
    result = Boolean.FALSE;
}
assertFalse(result);
```

The generated initializer appears after `failingCall` in the try block
but is absent from the catch block. When the call throws first, `Boolean.FALSE`
is still null and unboxing fails. TeaVM's
[`ClassInitElimination`](https://github.com/konsoletyper/teavm/blob/0.16.0/core/src/main/java/org/teavm/model/optimization/ClassInitElimination.java)
propagates the initialization state collected at the end of a block through its
dominator tree. That is unsafe for a handler reached by an earlier exception.
The exception edge needs the state guaranteed before the throwing instruction.
A temporary diagnostic build that disables only `ClassInitElimination` makes
the isolated Boolean/promise cases pass at `FULL` on both JS and Wasm; that
compiler override is not shipped.
The direct-field reproducer fails at **`SIMPLE` too** on both JS and Wasm; the
promise/boxing shape used by the frame code only failed at `FULL` in these runs.
`SIMPLE` still performs compiler transformations, including class-initialization
elimination. Consequently disabling the additional optimized test variants avoids
our current frame trigger but is not a general cure for this compiler defect.
The unpatched frame failure is independent of the new DOM realm check.

The corrected pass in `instanto-teavm-core-patch` uses TeaVM's existing split
control-flow graph: exception edges leave block entry, and initialization facts
are learned only on normal block completion. This protects catch handlers and
code after a catch while preserving safe elimination. It does not disable the
pass. With the optional parent profile enabled, all 15 tests in
`FramedApplicationIntegrationTest` and `FramedLayoutTeaVmTest` pass the full
JS/minified-JS/Wasm GC matrix with ThreadLocal checks enabled:

```sh
mvn -Pteavm-browser-tests,teavm-class-init-fix -Dspotless.skip=true \
  -Dinstanto.teavm.threadLocalChecks=true \
  -Dtest=FramedApplicationIntegrationTest,FramedLayoutTeaVmTest \
  -Dsurefire.failIfNoSpecifiedTests=false test
```

The profile selects the compiler patch for both application compilation and
Surefire tests. The standalone upstream reproducers below retain their original
dependency setup and do not inherit this profile.

### An umbrella exception handler, without boxing or browser interop

`UmbrellaCatchTest` reproduces the same defect with ordinary Java application
objects. A request handler catches an invalid input error and should return an
error response:

```java
private static Outcome handleRequest() {
    try {
        performOperation();
        return Outcome.SUCCESS;
    } catch (Exception failure) {
        return Outcome.FAILURE;
    }
}

private static void performOperation() {
    Integer.parseInt("invalid input");
}

static final class Outcome {
    static final Outcome SUCCESS = new Outcome(200);
    static final Outcome FAILURE = new Outcome(500);
    final int status;

    Outcome(int status) {
        this.status = status;
    }
}
```

The test calls `handleRequest()` before touching `Outcome` elsewhere, then
checks that its result is non-null and has status 500. On stock TeaVM it returns
null: parsing throws before the try-side `Outcome` initializer, and the
catch-side initializer has been removed. This is a failure to initialize the
application's response objects; no `Boolean`, boxing, `@JSBody`, browser
callbacks or async methods are involved.

The `static final` object fields still need their constructor calls executed.
They are not compile-time constants like `static final int FAILURE = 500`.

Verified controls: the test passes on the JVM; fails on JS and Wasm GC with
TeaVM 0.15.0 and 0.16.0 at `SIMPLE` without minification; and passes on both
TeaVM 0.16.0 backends when only `ClassInitElimination` is disabled in a temporary
diagnostic build. The latter restores the missing initializer in the catch
handler. No diagnostic compiler override is included in the standalone fixture.

### Separate ADVANCED/FULL field-read failure

`RepeatedFieldReadTest` explicitly initializes its holder class before calling
the method under test. That method reads the same static field on both try and
catch paths, with a throwing operation before the try-side read. At ADVANCED
and FULL, JS and Wasm GC fail the assertion with 0 instead of 7; SIMPLE passes.
The generated
handler reuses the local assigned only by the skipped try-side field read.
This reproduces on stock 0.16.0, so successful class initialization alone does
not protect against it. It is independent of the class-initialization patch.

Disabling only `RepeatedFieldReadElimination` makes this pre-initialized test
pass at both ADVANCED and FULL on JS and Wasm GC; `ClassInitElimination` remains
stock. The local class-initialization patch deliberately changes only its own
pass and does not fix this separate optimizer defect. The fixture is outside
the normal test reactor alongside the other upstream reproducers.

For the ADVANCED browser checks, temporary copies of the upstream JUnit
configuration select ADVANCED in place of SIMPLE; no compiler pass is changed
in the failing builds. A standalone Maven application confirms the same
SIMPLE-pass / ADVANCED-fail / FULL-fail split on JavaScript without JUnit:

```sh
mvn -f src/it/teavm-regressions/pom.xml -Dspotless.skip=true \
  -Papplication -Dmaven.test.skip=true \
  -Dapplication.mainClass=example.RepeatedFieldReadApplication \
  -Doptimization=ADVANCED -Doutput=field-advanced package
node src/it/teavm-regressions/run-app.mjs \
  "$(pwd)/src/it/teavm-regressions/target/field-advanced/app.mjs"
```

On 2026-10-04, searches of open/closed issues and PRs found no confirmed exact
duplicate. [Issue #1250](https://github.com/konsoletyper/teavm/issues/1250#issuecomment-5576264508)
describes async-transformed handlers seeing an undefined local or a partially
constructed object; a shared root cause is not established. The maintainer
[requested a reliable, simple reproducer](https://github.com/konsoletyper/teavm/issues/1250#issuecomment-5573420654),
without requiring it to be minimal. No later response confirms a fix for those
two cases. The separate [2020 field-read fix](https://github.com/konsoletyper/teavm/commit/8f68c64193831ea2d56057a64a0545c81a79204d)
is already included in 0.16.0: its test reads after a catch/normal-flow join,
whereas our failing test reads inside the handler. The pass source on master
was byte-for-byte identical to 0.16.0 when checked; the whole master compiler
was not built or tested.

Mode logs: `/tmp/teavm-field-mode-{simple,advanced,full}.log`; pass-disabled
controls: `/tmp/teavm-field-disabled-{advanced,full}.log`; standalone application
logs: `/tmp/teavm-field-app-{simple,advanced,full}-{build,run}.log`.

### Reproduce and choose a build mode

The intentionally failing fixtures are in
[`src/it/teavm-regressions`](../src/it/teavm-regressions/pom.xml), outside the main
reactor. Run one with Java 21 and a local Chrome installation:

```sh
mvn -f src/it/teavm-regressions/pom.xml -Dspotless.skip=true \
  -Dtest=TimerTest test
```

Choose `MinifierCaptureTest`, `FrameTest`, `ClassInitializationTest`,
`UmbrellaCatchTest` or `PromiseTest` to isolate the other cases. `FrameTest` intentionally has no realm
plugin and demonstrates the raw cross-window behaviour, not a supported testkit
configuration. Tests keep their normal success assertions so they start passing
when the relevant behaviour is corrected; they do not assert broken behaviour.

The application variant separates `ADVANCED` from `FULL`:

```sh
cd src/it/teavm-regressions
mvn -Dspotless.skip=true -Papplication -DskipTests \
  -Doptimization=ADVANCED -Doutput=advanced package
node run-app.mjs ./target/advanced/app.mjs
```

Use matching `SIMPLE/simple` or `FULL/full` values for the other runs. The
application uses real global timers and runs in Node, without testkit support.

For the working webapp-testkit suite and its CI, use:

```sh
mvn -Pteavm-browser-tests -Dspotless.skip=true \
  -Dinstanto.teavm.threadLocalChecks=true \
  -Dteavm.junit.optimized=false -Dteavm.junit.minified=true test
```

All **162 tests** pass locally with this configuration: 16 layout, 97 DOM,
5 application-staging JVM tests and 44 examples. Browser tests run on JS
`SIMPLE`, minified JS `SIMPLE` and Wasm GC `SIMPLE` where applicable. CI retains
Chrome and Firefox jobs; only Chrome was run locally for this investigation.
The focused realm regression also passes the optimized modes.

This is a project-specific compatibility choice. The shared Instanto compiler
parent and application optimization defaults have not been weakened. Affected
applications can explicitly choose `<optimizationLevel>SIMPLE</optimizationLevel>`;
keep the reproducers and rerun them against a compiler fix or upgrade before
restoring higher optimization. Minified JS remains tested here because the
clock workaround fixes the observed collision; it is not a blanket assurance
about every JSBody in a consumer application.
