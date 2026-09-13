# 4. Waiting and time

## Waiting

Rendering is often asynchronous. Wrap an assertion in `Dom.waitFor` and it is retried
until it holds or the timeout expires:

```java
Dom.click(Dom.findByRole("button", "Save"));

Dom.waitFor(() -> expect(Dom.findByRole("status")).toHaveText("Saved"));
```

The default budget is one second; an overload takes an explicit timeout in
milliseconds. The final failure is the assertion's own, so the message says what was
expected rather than that a wait expired.

This is how to observe a framework that commits asynchronously. React 18 is one: a
click schedules a re-render rather than performing it, so reading the DOM in the same
turn sees the old value.

## Controlling time

A test can replace the browser's timers and advance them by hand:

```java
Dom.clock().install();
try {
    component.startPolling();

    Dom.clock().tick(1000);          // runs whatever fell due

    verify(feed, times(4)).refresh();
} finally {
    Dom.clock().uninstall();
}
```

`install` replaces `setTimeout`, `setInterval`, `requestAnimationFrame`, `Date` and
`performance.now`. `tick` runs everything due in order, including work scheduled by a
callback while it runs. `setTime` fixes the instant reported; `pending()` counts what
is waiting.

Install it for one test and uninstall it in a `finally` block or an `@After` method.

### One clock per window

Each window has its own timers. `Dom.clock()` controls the page the test runs in. An
application staged in a frame has its own, reached through it:

```java
app.clock().install();     // the application's timers
Dom.clock().install();     // the test page's timers
```

They are independent: freezing one leaves the other running.

### Thread.sleep does not work here

While the test page's clock is installed, `Thread.sleep` never returns. TeaVM
schedules it through the same `setTimeout` the clock has replaced. Wait with
`Dom.waitFor`, which holds the real timer it saved when the clock displaced it.

A clock installed in an application's window does not have this problem, because the
test page's timers are untouched.
