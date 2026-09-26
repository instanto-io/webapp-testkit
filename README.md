# Webapp Testkit

Browser tests for web applications, written in Java and compiled by TeaVM.

It is built first for TeaVM applications: a user interface written in Java, tested by
a JUnit test compiled the same way, running in the browser it will ship in. It also
drives applications this build did not compile — a GWT permutation, a React bundle,
an Angular build — by staging them onto the test classpath.

The aim is for a TeaVM project to have browser testing as good as a TypeScript
project takes for granted: find elements the way a user does, drive them, control
time, assert layout, and mount a component in isolation, without leaving Java.

```java
@Rule public DomRule dom = new DomRule();

@Test
public void submitsTheTimesheet() {
    TimesheetService service = mock(TimesheetService.class);
    Dom.container().appendChild(new TimesheetComponent(service, "July").element());

    Dom.click(Dom.findByRole("button", "Submit"));

    verify(service).submit("July");
    expect(Dom.findByRole("status")).toHaveText("Submitted");
}
```

## Guide

The [guide](docs/README.md) is ordered, and each chapter ends with something that
runs.

1. [Getting started](docs/getting-started.md) — dependencies, classpath order, the browser, a first passing test
2. [Testing a component](docs/component-tests.md) — mounting a Java component and substituting what it depends on
3. [Finding and driving elements](docs/finding-and-driving.md) — queries by role, label and text; clicks, typing and focus
4. [Waiting and time](docs/waiting-and-time.md) — asynchronous rendering, and advancing timers by hand
5. [Layout and geometry](docs/layout-and-geometry.md) — sizes, positions and the relations between them
6. [Staged applications](docs/staged-applications.md) — testing an application this build did not compile
7. [The examples](docs/examples.md) — four applications, and what each one demonstrates

## Modules

| Module | Contents |
| --- | --- |
| [`webapp-testkit-layout`](webapp-testkit-layout/README.md) | Rectangle relations and tolerances. No DOM, no browser, no dependencies. |
| [`webapp-testkit-dom`](webapp-testkit-dom/README.md) | Accessible queries, interactions, waiting, geometry, and a controllable clock. |
| [`webapp-testkit-app`](webapp-testkit-app/README.md) | Stages a separately built application and hosts it for a test. |
| [`webapp-testkit-examples`](webapp-testkit-examples) | Worked examples. |

Each module depends only on the one above it. The libraries have no dependency on a
mocking library; the examples add [Mockatcha](https://github.com/instanto-io/mockatcha)
at test scope, to show a mocked collaborator behind a user interface.

## Requirements

Java 21 and Maven. These are real browser tests: TeaVM does not bundle a browser, so
Chrome or Firefox must be installed and available to the build.

JUnit rules under TeaVM need
[`io.instanto:teavm-rule-support`](https://github.com/instanto-io/teavm-rule-support)
ahead of `teavm-junit` on the test classpath. That library is separate and depends on
nothing of its own.

## Comparison with Playwright

[Playwright](https://playwright.dev/java/) has an official Java binding, controls time
with `clock().install()`, reads geometry with `boundingBox()`, and brings tracing,
video, codegen and a far larger ecosystem. For an application that is not compiled
from Java, it is the better choice.

Two things differ here. Serving the application under test is not carried into
Playwright's Java binding — `webServer` belongs to its JavaScript test runner — so
from Java you provide a server, a port, a readiness check and teardown; staging
replaces that with a classpath URL. And a test compiled into the page can construct a
Java component and substitute its collaborators, which a browser driven from outside
cannot do.

## Support the Webapp Testkit and TeaVM

If this helps your work, please consider supporting its development and the compiler
it builds on:

- [Support Instanto](https://github.com/sponsors/instanto-io).
- [Support TeaVM](https://github.com/sponsors/konsoletyper), the compiler that
  brings Java to the browser.
