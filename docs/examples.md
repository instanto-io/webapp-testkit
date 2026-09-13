# 7. The examples

`webapp-testkit-examples` runs against four applications. They are not decoration:
each one covers something the others cannot.

## A TeaVM component, both ways

The same component is tested twice.

[`TimesheetComponentTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/TimesheetComponentTeaVmTest.java)
constructs it in the test's own page and substitutes its service. Nothing is served.

[`StagedTeaVmApplicationTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/StagedTeaVmApplicationTeaVmTest.java)
drives the same component compiled to JavaScript by `teavm-maven-plugin`, staged, and
opened through its own entry point. It cannot replace the service; it covers startup
and asset paths instead.

Together they show the trade: reach inside and lose fidelity, or keep fidelity and
lose reach.

## Three applications this build did not compile

| Application | Built by | What can be asserted |
| --- | --- | --- |
| A plain page | hand-written | roles, labels, text, geometry |
| [WebFX](https://webfx.dev) Colorful Circles | JavaFX → GWT | geometry only |
| [teavm-react](https://github.com/webliteca/teavm-react) kitchen sink | React, via TeaVM | roles, labels, text, geometry |
| A timesheet | Angular 22 | roles, labels, text, geometry |

They make one point between them: **semantics are a property of the framework,
layout is not.** WebFX renders its scene graph into `fx-scene` and `fx-circle`
elements carrying no roles and no accessible names, so the queries in
[chapter 3](finding-and-driving.md) match nothing and only
[chapter 5](layout-and-geometry.md) applies. React and Angular render ordinary HTML,
so everything applies.

Each is checked in as build output, because the testkit exists to test something
someone else built. Nothing in this build runs npm or compiles JavaFX, GWT or J2CL.

The Angular one is breadth rather than strength: an Angular team has better tools for
their own components and should use them. It earns its place by making a deployment
caveat concrete — built with `--base-href ./`, because its default `<base href="/">`
would break under the staged prefix.

## Supporting examples

- `ApplicationClockTeaVmTest` — holding an application's animation still, and
  advancing it by hand.
- `FramedApplicationIntegrationTest` — two instances at once, document scoping, focus,
  events raised in the application's own window.
- `SearchBoxTeaVmTest` — a debounced search, driven with the fake clock and a mocked
  service.
