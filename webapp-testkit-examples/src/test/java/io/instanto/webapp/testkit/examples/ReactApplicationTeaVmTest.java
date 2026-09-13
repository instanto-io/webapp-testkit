/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static io.instanto.webapp.testkit.dom.Expect.expect;
import static org.junit.Assert.*;

import io.instanto.webapp.testkit.app.ApplicationRule;
import io.instanto.webapp.testkit.dom.Dom;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * A React application, its components written in Java and compiled by TeaVM, tested as built output.
 *
 * <p>The counterpart to {@link WebFxApplicationTeaVmTest}. A transpiled JavaFX scene exposes no
 * roles or accessible names, so only geometry can be asserted on it. React renders ordinary HTML,
 * so the accessible queries apply in full — and the same geometry assertions still work, because
 * they are properties of the layout rather than of the framework.
 *
 * <p>Nothing here compiles the application. It is checked-in build output from another repository,
 * staged onto the test classpath.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class ReactApplicationTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/react/index.html")
      // React replaces the "Loading..." placeholder once it has mounted.
      .readyWhen(page -> !page.findAllByRole("heading").isEmpty())
      .readyWithin(20_000);

  @Test
  public void findsControlsByTheirAccessibleNames() {
    expect(Dom.findByRole("heading", "teavm-react Kitchen Sink")).toBeVisible();
    expect(Dom.findByRole("button", "Switch to Dark")).toBeVisible();
    expect(Dom.findByRole("heading", "Todo List")).toBeVisible();
    assertFalse("the application renders real form controls",
        Dom.page().findAllByRole("textbox").isEmpty());
  }

  @Test
  public void drivesReactStateThroughTheDom() {
    Dom.click(Dom.findByRole("button", "Switch to Dark"));

    // React 18 commits its re-render asynchronously, so wait for the state to reach the DOM
    // rather than reading it in the same turn as the click.
    Dom.waitFor(() -> expect(Dom.findByRole("button", "Switch to Light")).toBeVisible());

    assertNull("the old label is gone", Dom.page().findByRoleOrNull("button", "Switch to Dark"));
  }

  @Test
  public void typesIntoAControlledInputAndCommitsTheUpdate() {
    HTMLElement todoField = Dom.findByPlaceholderText("Add a todo...");

    Dom.type(todoField, "Ship the release");
    Dom.click(Dom.findByRole("button", "Add"));

    Dom.waitFor(() -> expect(Dom.findByText("Ship the release")).toBeVisible());
  }

  @Test
  public void geometryAppliesToAnAccessibleApplicationToo() {
    HTMLElement title = Dom.findByRole("heading", "teavm-react Kitchen Sink");
    HTMLElement todo = Dom.findByRole("heading", "Todo List");

    expect(title).toBeAbove(todo);
    assertTrue("the heading is laid out", Dom.layout(title).width() > 0);
    assertEquals("rgb(0, 102, 204)", Dom.computedStyle(title, "color"));
  }

  @Test
  public void startsEachTestFromAFreshlyMountedApplication() {
    // The previous test switched the theme; the rule gave this one a new application.
    expect(Dom.findByRole("button", "Switch to Dark")).toBeVisible();
  }
}
