# Webapp Testkit App

This module extends Webapp Testkit DOM and TeaVM's test runner to arbitrary
web applications. The application under test can use any web stack; it does not
need to use Java or TeaVM. The test remains a Java test compiled by TeaVM, with
Webapp Testkit DOM providing its queries, interactions, waiting, and assertions.

The testkit stages the built application on `TeaVMTestRunner`'s classpath
resource server and hosts it in a same-origin frame, so the Java test can inspect
and operate its DOM. The frame is how the application bootstraps normally and is
torn down between tests; `ApplicationRule` keeps it out of the tests themselves.

These are real browser tests. TeaVM does not bundle Chromium. The repository's
default `browser-chrome` runner requires Chrome or Chromium to be installed and
available to the test process as `chrome`, on developer machines and in CI.

`ApplicationFiles.stage(source, destination)` copies the complete application tree
to a test-classpath directory. It adds a small error observer at the start of each
HTML head, before application scripts run. This reports startup exceptions, failed
resources and unhandled promise rejections. It does not select, replace or load
application assets. The original build output is unchanged.

## Add the module

```xml
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>webapp-testkit-app</artifactId>
  <version>0.1.0-SNAPSHOT</version>
  <scope>test</scope>
</dependency>
```

`DomRule` and the other rules here are JUnit rules, and TeaVM's own runner ignores
rules unless [`io.instanto:teavm-rule-support`](https://github.com/instanto-io/teavm-rule-support)
shadows it. Declare it **before** `teavm-junit`, because a shadowed class is chosen
by classpath order:

```xml
<!-- Declared first, so its classes take precedence over teavm-junit's. -->
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>teavm-rule-support</artifactId>
  <version>0.1.0-SNAPSHOT</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>org.teavm</groupId>
  <artifactId>teavm-junit</artifactId>
  <scope>test</scope>
</dependency>
```

Getting this wrong used to be silent — rules were skipped and tests passed without
them. Rule support now checks the ordering while compiling and fails the build,
naming both jars, so a misordered classpath cannot pass unnoticed.

`ApplicationRule` is the module's main entry point and is a JUnit rule, so without
this it is skipped and the application is never opened.

## Build setup

Add `io.instanto:webapp-testkit-app:0.1.0-SNAPSHOT` as a test dependency.
Run its Java entry point after building the subject application, before browser
tests. For example, configure `exec-maven-plugin`:

```xml
<execution>
  <id>stage-application</id>
  <phase>process-test-resources</phase>
  <goals><goal>java</goal></goals>
  <configuration>
    <mainClass>io.instanto.webapp.testkit.app.ApplicationFiles</mainClass>
    <classpathScope>test</classpathScope>
    <arguments>
      <argument>${application.build.directory}</argument>
      <argument>${project.build.testOutputDirectory}/applications/demo</argument>
    </arguments>
  </configuration>
</execution>
```

`application.build.directory` is the complete built site directory. The test URL is
`/resources/applications/demo/index.html`. Relative scripts, styles, images and GWT
permutations retain their paths. An application using origin-root URLs must be
configured for this deployment prefix, just as for any other subdirectory deployment.

The stager refreshes only directories bearing its own marker. It rejects symlinks,
copies into the source tree, existing unrelated destinations and HTML without an
explicit head. HTML must be UTF-8. The test document's CSP must allow the diagnostic
observer; the stager does not weaken CSP. If the observer cannot run, readiness
reports that it is missing so startup errors do not disappear.

## Use the staged application

The testkit handles the JVM build step. In the browser test, `ApplicationRule`
opens the staged application, waits for it to become ready, and points the plain
`Dom` queries at it. Tests then read as though the application were the page:

```java
@Rule
public ApplicationRule app =
        new ApplicationRule("/resources/applications/demo/index.html#buttons");

@Test
public void enablesNotifications() {
    Dom.click(Dom.findByRole("button", "Notifications"));
    expect(Dom.findByRole("button", "Notifications"))
            .toHaveAttribute("aria-pressed", "true");
}
```

The rule closes the application after each test, so the next test starts from a
freshly bootstrapped one. It fails the test if the application reported startup
errors, failed resources or unhandled promise rejections — unless the test itself
already failed, in which case that failure is reported instead.

By default the rule waits for the application to set `data-ready` on its body.
Use `readyWhen` for a different signal, `readyWithin` to change the ten second
budget, and `sized` to set the viewport:

```java
@Rule
public ApplicationRule app = new ApplicationRule(url)
        .readyWhen(page -> !page.findAllByRole("row").isEmpty())
        .readyWithin(30_000)
        .sized(375, 812);
```

`Dom.render` is rejected while an application is bound, because the container it
would overwrite is the one hosting the application.

### Controlling the application's time

The application's timers are its own, so they are advanced through it rather than
through the test page:

```java
app.clock().install();
try {
    app.clock().tick(1000);          // runs the application's delayed work
    expect(Dom.findByRole("status")).toHaveText("Refreshed");
} finally {
    app.clock().uninstall();
}
```

The application has already started by the time a test can reach it, so timers it
scheduled during startup keep running on the real ones; work scheduled after
`install()` waits for `tick`. Closing the application puts its timers back.

Freezing the application does not freeze the test page, so `Dom.waitFor` still resumes
while the application is held still.

### Working with the frame directly

Tests that need more than the current scope — comparing two instances of an
application, or checking one document against another — use `FramedApplication`,
either through `app.application()` or on its own:

```java
try (FramedApplication app = FramedApplication.open(url)) {
    app.awaitReady(page -> "true".equals(page.root().getAttribute("data-ready")));
    expect(app.page().findByRole("button", "Notifications")).toBeVisible();
}
```

See [Webapp Testkit DOM](../webapp-testkit-dom/README.md#parent-pages-and-frames) for frame
readiness, diagnostics, cleanup, and cross-window DOM support.

## Sample application

The repository includes a
[plain HTML, CSS, and JavaScript application](../webapp-testkit-examples/src/main/resources/webapp)
with no Java, TeaVM, Maven, or npm dependency:

```text
webapp-testkit-examples/
└── src/main/resources/webapp/
    ├── index.html
    ├── app.css
    └── app.js

webapp-testkit-examples/
└── src/test/java/io/instanto/webapp/testkit/examples/
    ├── ApplicationRuleExampleTeaVmTest.java
    └── FramedApplicationIntegrationTest.java
```

The application supplies a text field, select control, toggle button,
asynchronous readiness signal, and responsive style.
[`ApplicationRuleExampleTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/ApplicationRuleExampleTeaVmTest.java)
shows the ordinary case, where no frame appears in the test at all.
[`FramedApplicationIntegrationTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/FramedApplicationIntegrationTest.java)
covers the explicit API, including two instances of the application at once,
document scoping, focus, and events raised in the application's own window.

A second staged application shows a different toolchain entirely.
[`WebFxApplicationTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/WebFxApplicationTeaVmTest.java)
drives a JavaFX application transpiled to JavaScript by [WebFX](https://webfx.dev),
checked in as build output because nothing in this repository compiles JavaFX, GWT or
J2CL. It exercises the parts the plain sample cannot: a GWT bootstrap resolving its own
`nocache.js`, permutation and stylesheet under the staged prefix; readiness expressed
as `readyWhen` because the application never sets `data-ready`; and geometry
assertions, because a transpiled scene graph renders into `fx-scene` and `fx-circle`
elements that carry no roles and no accessible names for the queries above to match.

A third application covers the opposite case.
[`ReactApplicationTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/ReactApplicationTeaVmTest.java)
drives the [teavm-react](https://github.com/webliteca/teavm-react) kitchen-sink demo —
React components written in Java and compiled by TeaVM. Because React renders ordinary
HTML, the accessible queries apply in full there: headings, buttons and text fields are
found by role and name, and typing into a controlled input commits through React's own
state. The geometry assertions work on it too, which is the point of the pair: semantics
are a property of the framework, layout is not. Its React runtime is unpacked from the
webjars at build time rather than checked in, and the one change made to the page — two
CDN script tags pointed at those local copies — is recorded beside it.

The example module stages its own application, exactly as a downstream project
stages the application it has built. During its `process-test-resources` phase,
`ApplicationFiles` copies the tree to:

```text
${project.build.testOutputDirectory}/applications/plain-js
```

`TeaVMTestRunner` serves that directory at
`/resources/applications/plain-js/index.html`, which is the URL the tests open.

The sample test uses these dependencies:

| Dependency | Role |
| --- | --- |
| `webapp-testkit-dom` | Queries, interactions, waiting, and assertions. |
| `webapp-testkit-app` | Stages the application, then hosts it with `ApplicationRule`. |
| `teavm-rule-support` | Runs rules, including `ApplicationRule`, under TeaVM. |
| `teavm-classlib` | Supplies TeaVM's Java class-library implementation. |
| `teavm-junit` | Compiles and runs the JUnit test through TeaVM. |
| `junit` | Supplies `@Test`, `@Rule`, and assertions. |

The sample does not use `mockatcha-core`. Add it only when the Java test also
needs mocks or spies.

## Direct component tests vs staged application tests

Direct component tests are TeaVM-focused. TeaVM compiles the Java test and the
component under test into the same JavaScript output, so the test can construct
the component through its Java API and attach it to the testkit's container. The
exact construction API belongs to the component; for example:

```java
TimesheetComponent timesheet = new TimesheetComponent(timesheetService);
Dom.container().appendChild(timesheet.element());

expect(Dom.findByRole("heading", "July timesheet")).toBeVisible();
```

This suits a Java UI component whose source and dependencies TeaVM can compile.
For example, it can cover portable Java code from a GWT project when that code
has no GWT-specific dependencies. A Java wrapper around a JavaScript component
can also use this approach when it exposes the component to the TeaVM test. The
component renders in TeaVM's test document, where the test controls its
dependencies and lifecycle and can use Mockatcha mocks alongside these queries.

A staged application test treats the application as completed web output. The
application is built separately, whether by GWT, TeaVM, JavaScript tooling, or
another web stack. The test cannot call its source-level Java components. It
opens the built application through its normal entry point and exercises the
resulting DOM in a same-origin frame.

Staging loads the application's scripts, styles, images, routes, and other
assets in their deployed layout. It therefore covers application startup,
asset paths, integration between components, and behaviour that depends on the
real page or viewport. Both approaches use the same Webapp Testkit DOM queries,
interactions, waiting, and assertions, and both require the browser used by
TeaVM's test runner to be installed.
