# 1. Getting started

## Dependencies

Two artifacts are needed for a test that uses rules. Declare rule support **before**
`teavm-junit`:

```xml
<!-- Declared first: its classes take precedence over teavm-junit's. -->
<dependency>
  <groupId>io.instanto</groupId>
  <artifactId>teavm-rule-support</artifactId>
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
