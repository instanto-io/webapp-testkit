/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static io.instanto.webapp.testkit.dom.Expect.expect;
import static org.junit.Assert.assertTrue;

import io.instanto.webapp.testkit.app.ApplicationRule;
import io.instanto.webapp.testkit.dom.Dom;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * The same component, tested as a deployed TeaVM application rather than in the test's own page.
 *
 * <p>{@link TimesheetComponentTeaVmTest} constructs {@link TimesheetComponent} directly and can
 * substitute its service. This cannot: the application has been compiled to JavaScript, staged
 * onto the test classpath and opened through its own entry point, so what it covers is startup,
 * asset paths and the behaviour a user would see. Both are worth having, and they cost the same
 * to write.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class StagedTeaVmApplicationTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/teavm/index.html");

  @Test
  public void startsFromItsOwnEntryPointAndRendersItsData() {
    expect(Dom.findByRole("heading", "July timesheet")).toBeVisible();
    expect(Dom.findByText("Monday: 7h")).toBeVisible();
    assertTrue("the application's own script produced the list",
        Dom.page().findAll("li").size() >= 3);
  }

  @Test
  public void respondsToTheUserThroughItsOwnHandlers() {
    expect(Dom.findByRole("status")).toHaveText("Not submitted");

    Dom.click(Dom.findByRole("button", "Submit"));

    expect(Dom.findByRole("status")).toHaveText("Submitted");
  }

  @Test
  public void addsAnEntryThroughTheFormItRendered() {
    Dom.type(Dom.findByLabelText("New entry"), "Thursday: 5h");
    Dom.click(Dom.findByRole("button", "Add"));

    expect(Dom.findByText("Thursday: 5h")).toBeVisible();
  }
}
