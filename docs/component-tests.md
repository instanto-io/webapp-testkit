# 2. Testing a component

This is the case the testkit is built for. A user interface written in Java is
compiled to JavaScript by TeaVM. The test is compiled the same way and runs in the
same page, so it can construct the component directly.

## Mounting

A component is an ordinary object. Construct it, and put its element on the page:

```java
TimesheetComponent timesheet = new TimesheetComponent(service, "July");
Dom.container().appendChild(timesheet.element());
```

`Dom.container()` is a div this library attaches to the document and removes after
each test. Nothing about the component needs to know it is being tested.

## Substituting what it depends on

Because the test and the component share a process, a collaborator can be replaced
with an object the test controls. Any mocking library works; the examples use
Mockatcha:

```java
TimesheetService service = mock(TimesheetService.class);
when(service.entriesFor("July")).thenReturn(List.of("Monday: 7h"));

Dom.container().appendChild(new TimesheetComponent(service, "July").element());

Dom.click(Dom.findByRole("button", "Submit"));

verify(service).submit("July");
expect(Dom.findByRole("status")).toHaveText("Submitted");
```

This substitutes the object behind the interface, not the traffic it would generate.
A test driving the browser from outside can intercept a network call; it cannot hand
a component a different repository.

## What this gives you

The component is reached through its own API, so a rename breaks the build rather
than a selector. There is no application to serve, no URL and no frame. The test
starts in milliseconds because nothing bootstraps.

The limitation is that the component must be compilable by TeaVM. When the subject is
already-built output, use [chapter 6](staged-applications.md) instead.

The worked example is
[`TimesheetComponentTeaVmTest`](../webapp-testkit-examples/src/test/java/io/instanto/webapp/testkit/examples/TimesheetComponentTeaVmTest.java).
