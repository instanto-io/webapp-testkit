# Webapp Testkit DOM

Webapp Testkit DOM tests browser UI through the elements a user can find and the
actions a user can take. It provides an isolated test container, accessible
queries, browser interactions, waiting, and readable assertions.

The application still renders its own UI. Webapp Testkit DOM supplies the test
boundary around it. It can be used on its own, or with Mockatcha Core for the
parts of a test that can be mocked. Time is handled here: the fake clock is part
of this module, because controlling timers is a property of driving a UI rather
than of stubbing a collaborator.

## Add the module

```xml
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>webapp-testkit-dom</artifactId>
  <version>0.1.0-SNAPSHOT</version>
  <scope>test</scope>
</dependency>
```

Webapp Testkit DOM is part of the Webapp Testkit and does not depend on
`mockatcha-core`; nothing in it knows about mocking. Add
[Mockatcha](https://github.com/instanto-io/mockatcha) when a test also needs mocks.

DOM tests run in a real browser through TeaVM's test runner. The repository
defaults to `browser-chrome`, which requires Chrome or Chromium to be installed
and available to the test process. The runner is selected with the
`teavm.junit.js.runner` property, which this project sets from
`webapp.testkit.test.browser`; set it to `browser-firefox` to use Firefox instead.

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

## Set up the test boundary

`Dom.container()` creates an element for the test and attaches it to the
document. In a direct component test, TeaVM compiles the Java test and component
together. Construct the component through its own Java API and attach its
element to the container. For example:

```java
TimesheetComponent timesheet = new TimesheetComponent(timesheetService);
Dom.container().appendChild(timesheet.element());

expect(findByRole("heading", "July timesheet")).toBeVisible();
```

`TimesheetComponent` and `element()` represent the application's API; the testkit
does not prescribe a component interface. This direct approach requires the
component source and its dependencies to be compilable by TeaVM. Use the
[webapp testkit](../webapp-testkit-app/README.md#direct-component-tests-vs-staged-application-tests)
when the application is built separately.

Every query stays inside this container. Add `DomRule` so it is removed after
each test, including a failed test:

```java
@Rule
public DomRule dom = new DomRule();
```

TeaVM needs JUnit rule support to execute the rule. The reusable
separate `io.instanto:teavm-rule-support` library provides it. If a
runner cannot execute rules, extend `DomTest` for equivalent `@After` cleanup.
`Dom.reset()` is also available for manual cleanup.

For a test that only needs a small HTML fixture, `render` replaces the
container contents directly:

```java
render("<button>Save</button>");
expect(findByRole("button", "Save")).toBeEnabled();
```

## Find elements as a user would

Prefer queries based on the information presented to the user:

```java
HTMLElement submit = findByRole("button", "Submit timesheet");
HTMLElement account = findByLabelText("Account");
HTMLElement search = findByPlaceholderText("Search activities");
HTMLElement code = findByDisplayValue("OPS-142");
HTMLElement map = findByAltText("Airport map");
HTMLElement help = findByTitle("About activity codes");
```

`findByRole` recognises common implicit HTML roles as well as explicit ARIA
roles. Its second argument is the accessible name. `findByLabelText` follows
HTML labels, `aria-label`, and `aria-labelledby`.

`findByTestId` is available when an element has no useful accessible identity.
CSS queries remain useful for implementation-level checks:

```java
HTMLElement row = find("tr[data-entry-id='17']");
```

### Choose the expected number of results

A singular query requires exactly one match. It fails when there are none or
when the result is ambiguous:

```java
HTMLElement save = findByRole("button", "Save");
```

Use the optional form when absence is valid, or the plural form when several
matches are expected:

```java
HTMLElement warning = findByRoleOrNull("alert");
List<HTMLElement> rows = findAllByRole("row");
```

The same `findBy...`, `findBy...OrNull`, and `findAllBy...` forms are available
for text, role, label, placeholder, display value, alt text, title, and test ID
queries. An ambiguity failure lists every match and the current query scope.

### Restrict a query to part of the page

Use `within` when repeated controls belong to different rows, dialogs, or
sections:

```java
HTMLElement submittedRow = find("tr[data-entry-id='17']");
DomScope row = within(submittedRow);

expect(row.findByRole("cell", "Submitted")).toBeVisible();
click(row.findByRole("button", "Open"));
```

Queries made through the scope only inspect descendants of its root element.
Scopes can be narrowed again with `row.within(element)`.

### Match variable text

Text is normalised by trimming its ends and collapsing whitespace. A string
argument requires the complete normalised value. Use `TextMatch` for partial
or case-insensitive text:

```java
findByText(TextMatch.containing("3 activities"));
findByRole(role("button").named(TextMatch.exactIgnoringCase("save")));
```

Available matchers are `exact`, `containing`, `exactIgnoringCase`, and
`containingIgnoringCase`.

### Filter by accessible state

`RoleQuery` can distinguish elements that share a role and name:

```java
findByRole(role("heading").level(2));
findByRole(role("checkbox").checked(true));
findByRole(role("option").selected(true));
findByRole(role("button").expanded(false));
findByRole(role("button").pressed(true));
```

## Interact with the page

```java
click(findByRole("button", "Add activity"));
type(findByLabelText("Description"), "Stand review");
clear(findByLabelText("Description"));
check(findByLabelText("Billable"));
uncheck(findByLabelText("Billable"));
select(findByLabelText("Status"), "submitted");
selectOptions(findByLabelText("Teams"), "ops", "airports");
hover(findByTitle("Approval details"));
tab();
tabBack();
```

`type` replaces the current value one character at a time. It uses the native
value setter and dispatches keyboard, `beforeinput`, `input`, and `change`
events so controlled inputs can observe the edit. `selectOptions` supports
multiple selections. Interaction helpers return the element they acted on.

`press(element, "ArrowRight")` sends keydown and keyup with both modern
`key`/`code` and legacy `keyCode`/`which` fields. `type` uses the same event
factory; its keypress event carries the character code, while keydown and keyup
carry the physical-key code. Common navigation, editing and function keys are
supported. Printable ASCII uses US keyboard positions; unknown physical keys
keep an empty `code` and zero legacy code. These helpers do not infer modifier
keys, keyboard layouts or native default actions such as Tab traversal (use
`tab()` for that).

Some UI frameworks batch state updates. Put the interaction inside that
framework's normal test flush boundary when required.

## Control browser time

Install the clock for one test and always uninstall it:

```java
clock().install();
try {
    component.startPolling();

    verify(feed, never()).refresh();
    clock().tick(1000);
    verify(feed, times(4)).refresh();
} finally {
    clock().uninstall();
}
```

`tick` advances time and runs callbacks as they become due, including callbacks
scheduled by another callback. The clock replaces timeouts, intervals, and
animation frames. It also controls `Date`, `Date.now()`, and
`System.currentTimeMillis()`.

Set a fixed date when the code formats or compares absolute times:

```java
clock().install().setTime(1_700_000_000_000L);
try {
    assertEquals(1_700_000_000_000L, System.currentTimeMillis());
    clock().tick(250);
    assertEquals(1_700_000_000_250L, System.currentTimeMillis());
} finally {
    clock().uninstall();
}
```

`performance.now()` and the timestamp passed to an animation-frame callback
use elapsed time, starting at zero when the clock is installed. `pending()`
returns the number of callbacks still waiting.

### Test a retry without waiting

`RetryingLoader.load()` makes a request immediately. If the request fails, this
code schedules another attempt after one second:

```java
JSPromise<String> load() {
    return new JSPromise<>((resolve, reject) -> {
        try {
            resolve.accept(gateway.load());
        } catch (IllegalStateException firstFailure) {
            Window.setTimeout(() -> {
                try {
                    resolve.accept(gateway.load());
                } catch (Throwable retryFailure) {
                    reject.accept(retryFailure);
                }
            }, 1000);
        }
    });
}
```

The gateway stub below has two outcomes in call order. `loader.load()` makes
the first call, which throws and schedules the timeout. `tick(1000)` fires that
timeout, so the loader makes its second call and receives `"ready"`:

```java
Gateway gateway = mock(Gateway.class);
when(gateway.load())
        .thenThrow(new IllegalStateException("unavailable")) // first call
        .thenReturn("ready");                                // retry
RetryingLoader loader = new RetryingLoader(gateway);

clock().install();
try {
    JSPromise<String> result = loader.load(); // fails and schedules the retry
    clock().tick(1000);                       // runs the scheduled retry

    assertEquals("ready", result.await());
    verify(gateway, times(2)).load();
} finally {
    clock().uninstall();
}
```

`await()` reads the promise result, and the verification confirms that the
gateway was called twice.

For DOM queries, events, and element assertions, continue with
[Webapp Testkit DOM](../webapp-testkit-dom/README.md).

## Wait for rendering

Use a synchronous `findBy...` query when the action renders immediately. Use
`awaitBy...` when an element appears after a promise, browser callback, network
response, or framework continuation:

```java
click(findByRole("button", "Load entries"));

HTMLElement table = awaitByRole("table", "July entries");
expect(table).toBeVisible();
```

An awaited query retries for up to one second. It applies the same cardinality
rules as a synchronous query, so it does not accept an ambiguous result. A
timeout reports the last query failure and the current scope contents.

Use `waitFor` when the element already exists but one of its properties changes:

```java
waitFor(() -> expect(findByRole("status")).toHaveText("Saved"));
```

The overload `waitFor(assertion, timeoutMilliseconds)` sets a different
timeout. The supplier overload can return a value.

### Which window the clock controls

Every window has its own timers. `Dom.clock()` controls the page the test runs in.
An application staged in a frame has its own, reached through the testkit:

```java
app.clock().install();     // the application's timers
Dom.clock().install();     // the test page's timers
```

They are independent: freezing one leaves the other running. See the
[webapp testkit](../webapp-testkit-app/README.md) for the framed case.

### Await rendering while the fake clock is installed

The fake clock controls application timers. Webapp Testkit DOM uses the saved real browser
timer only for its internal retry loop, so an awaited query can resume while
the fake clock remains installed. This retry loop is not exposed as a second
test clock and does not advance fake time.

`Thread.sleep` is the exception, and it deadlocks. TeaVM schedules it through the very
`setTimeout` the clock has replaced, so it never wakes while the test page's clock is
installed. Wait through `Dom.waitFor`, which holds the real timer, rather than through
the language. A clock installed in an application's window does not have this problem,
because the test page's timers are untouched.

For a UI that displays a result after a controlled delay, advance the delay and
then await the rendering work that follows it:

```java
clock().install();
try {
    click(findByRole("button", "Save"));

    clock().tick(500);                 // runs the application's delayed callback
    expect(awaitByRole("status"))      // allows its continuation to render
            .toHaveText("Saved");
} finally {
    clock().uninstall();
}
```

`tick` runs application callbacks that are due. `awaitByRole` then yields while
promise or framework work updates the DOM. The fake clock can remain installed
between those operations.

## Check the result

```java
expect(findByRole("heading"))
        .toHaveAccessibleName("July timesheet")
        .toHaveRole("heading");
expect(findByLabelText("Hours")).toBeRequired().toBeValid();
expect(findByRole(role("button").expanded(true))).toBeExpanded();
expect(findByRole(role("option").selected(true))).toBeSelected();
expect(find("form")).toHaveFormValues(Map.of(
        "account", "A-17",
        "hours", "7.5"));
```

Other checks cover text, classes, attributes, values, styles, visibility,
enabled and checked state, focus, document attachment, empty content, child
elements, and HTML fragments. `not()` negates the next check only.

A failed check includes the element that was inspected:

```text
Wanted text "Saved" but found "Saving".
The element is:
<p role="status">Saving</p>
```

The browser tests in [`src/test`](src/test/java/io/instanto/webapp/testkit/dom)
contain complete examples for scopes, interactions, waiting, fake time, and
promise-driven rendering.

## Parent pages and frames

`Dom.within(element)` starts a scope at any accessible element. The element may
belong to the test page, another container or a same-origin child frame. Queries,
labels, focus, computed styles and generated input events use its owning document.
Calling `scope.within(element)` still requires the element to be inside that scope.

```java
DomScope child = Dom.within(frame.getContentDocument().getBody());
Dom.click(child.findByRole("button", "Save"));
expect(child.findByRole("status")).toHaveText("Saved");
```

## Geometry

Computed style and measured rectangles, both resolved in the element's **own** window
so they work for a framed application:

```java
String display = Dom.computedStyle(element, "display");
String marker  = Dom.computedStyle(element, "::before", "content");
ElementBox box = Dom.layout(element);
```

`Dom.layout` reads `getBoundingClientRect()` once and holds the numbers, so the
rectangle cannot change between two assertions about it. Viewport-relative CSS pixels,
fractional values preserved. A detached or `display:none` element measures zero, which
is a legitimate rectangle rather than an error.

The relations from [Webapp Testkit Layout](../webapp-testkit-layout/README.md) are re-exposed so
the call site reads naturally:

```java
expect(element).toHaveWidth(240, 0.5);
expect(element).toHaveHeight(40);
expect(element).toBeBelow(reference);
expect(element).toBeLeftOf(reference);
expect(element).toHaveSameWidthAs(reference);
expect(element).toBeTopAlignedWith(reference);
expect(element).toTouchHorizontally(reference);
```

Each takes one snapshot and does not wait. Wrap `Dom.waitFor` around an assertion when
the application moves things asynchronously:

```java
Dom.waitFor(() -> expect(mover).toBeBelow(anchor));
```

Rectangle relations are valid only between elements of the same document. Comparing an
element in the test page with one inside an application frame fails with a
coordinate-system error naming both documents, rather than silently comparing unrelated
coordinate spaces.

These are what a graphical application can be asserted on at all. A JavaFX scene
transpiled by WebFX, or an SVG-driven UI, exposes no roles and no accessible names, so
the queries above the fold do not apply to it — but it is still laid out, and geometry
is the observable that survives.

A separately built application is the
[webapp testkit](../webapp-testkit-app/README.md)'s job. It extends
Webapp Testkit DOM and TeaVM's test runner to applications built with any web stack;
the application itself does not need to use TeaVM. The testkit retains the asset
tree and observes errors before startup. The application loads its own styles and
scripts and runs its normal entry point, and readiness is an application
condition, independent of the iframe load event.

Its `ApplicationRule` stages that work out of sight, binding these same queries to
the application so the test never handles a frame:

```java
@Rule
public ApplicationRule app =
        new ApplicationRule("/resources/applications/demo/index.html#buttons");

@Test
public void enablesNotifications() {
    Dom.click(Dom.findByRole("button", "Notifications"));
    expect(Dom.findByRole("button", "Notifications")).toHaveAttribute("aria-pressed", "true");
}
```

`Dom.use(element)` is what the rule binds with. It redirects the static queries to
any element in an accessible document, and `Dom.reset()` restores them.

Frames remain rendered for focus, visibility and viewport-dependent CSS checks.
Cross-origin URLs and navigation are rejected. Existing direct widget tests can
continue to use `Dom.container()` with their framework's normal lifecycle.

### Synthetic interactions

`Dom.click()` and the typing helpers dispatch browser events from JavaScript.
They exercise application event handlers and resulting state changes, but the
browser does not classify these events as trusted user input. Use browser
automation when a test depends on native touch handling or browser gestures.

### Implementation note: DOM casts across frames

Tests do not need to track the window hierarchy before casting a DOM element.
Once a query returns an element, the testkit uses that element's owning document
to find the correct window automatically. This also works with multiple sibling
or nested same-origin frames because every element points directly to its own
document and window. The test must still use the appropriate `DomScope` to
query the intended frame.

Java identifies a class by its type. JavaScript uses constructor objects and
prototype chains for the equivalent `instanceof` check. A constructor is not
identified by its name alone: it is an object belonging to a particular browser
window.

The TeaVM test page and every iframe have separate `Window` objects. Each window
creates its own DOM constructors, so these two references have the same name but
are different objects:

```javascript
window.HTMLInputElement !== frame.contentWindow.HTMLInputElement
```

An input created by the framed application inherits from the iframe's
`HTMLInputElement.prototype`. The resulting JavaScript checks behave like this:

```javascript
input instanceof window.HTMLInputElement                     // false
input instanceof frame.contentWindow.HTMLInputElement        // true
```

TeaVM represents JavaScript DOM types such as `HTMLInputElement` as JSO types.
When TeaVM 0.15 compiles a Java `instanceof` expression or checked cast, its
normal JavaScript check receives the constructor from the test page. That works
for elements created in the test page, but it rejects an element of the correct
type when it comes from an application frame.

Webapp Testkit DOM includes a TeaVM compiler plugin that makes this check aware of
the element's window. It first performs TeaVM's normal constructor check. If
that fails for a native DOM type, it follows the element directly to
`ownerDocument.defaultView`; it does not traverse or infer the frame hierarchy.
The plugin obtains the constructor with the same name from that window and
checks the element against it. This allows:

```java
HTMLInputElement name =
        (HTMLInputElement) app.page().findByLabelText("Child name");
```

The fallback is restricted to standard DOM node and element constructors. It
does not accept a cast merely because another constructor has the same name.
Casting the input to `HTMLButtonElement` therefore still throws
`ClassCastException`, and checks for unrelated JavaScript types keep TeaVM's
normal behaviour.

TeaVM discovers the plugin automatically from the `webapp-testkit-dom` dependency;
tests do not need to register it.
