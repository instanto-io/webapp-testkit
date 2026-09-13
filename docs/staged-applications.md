# 6. Staged applications

[Chapter 2](component-tests.md) covers a component this build compiles. This chapter
covers an application it does not: a GWT permutation, a bundler's output, a
hand-written page. The test drives it through its own entry point.

## Staging

The application is copied onto the test classpath at build time:

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

`TeaVMTestRunner` then serves it at `/resources/applications/demo/index.html`. There
is no server to start and no port to choose.

`ApplicationFiles` copies the tree unchanged and adds one thing: a small script at the
start of each HTML head, before application scripts run, which records startup
exceptions, failed resources and unhandled promise rejections. It selects, replaces
and loads nothing. The original build output is untouched.

Relative paths are preserved, so an application deployed under a prefix works. One
that resolves assets against the origin root does not — Angular's default
`<base href="/">` is the common case, and the fix is the one any subdirectory
deployment needs, `--base-href ./` at build time.

## Driving it

`ApplicationRule` opens the application, waits for it, and points the ordinary
queries at it:

```java
@Rule
public ApplicationRule app = new ApplicationRule("/resources/applications/demo/index.html");

@Test
public void savesTheForm() {
    Dom.type(Dom.findByLabelText("Name"), "Ada");
    Dom.click(Dom.findByRole("button", "Save"));
}
```

No frame appears in the test. One runs underneath, because that is what lets the
application bootstrap normally, keeps its realm separate, and allows it to be torn
down between tests. The rule closes it afterwards and fails the test if the
application reported startup errors — unless the test itself already failed, in which
case that failure is reported instead.

## Readiness

The frame's load event says the document arrived, not that the application is usable.
By default the rule waits for the application to set `data-ready` on its body. When it
sets no such flag, describe readiness directly:

```java
@Rule
public ApplicationRule app = new ApplicationRule(url)
        .readyWhen(page -> !page.findAllByRole("row").isEmpty())
        .readyWithin(30_000)
        .sized(800, 600);
```

Readiness is worth stating precisely. A scene graph may put its elements in the
document before laying them out, in which case "a shape exists" is true too early and
"a shape has a box" is the honest condition.

## Reaching the frame directly

For tests that need more than the current scope — two instances of an application,
or one document compared with another — use `FramedApplication`, through
`app.application()` or on its own:

```java
try (FramedApplication app = FramedApplication.open(url)) {
    app.awaitReady(page -> "true".equals(page.root().getAttribute("data-ready")));
    expect(app.page().findByRole("button", "Save")).toBeVisible();
}
```
