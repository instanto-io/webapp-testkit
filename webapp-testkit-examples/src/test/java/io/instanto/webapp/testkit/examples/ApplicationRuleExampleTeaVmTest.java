/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static io.instanto.webapp.testkit.dom.Expect.expect;

import io.instanto.webapp.testkit.app.ApplicationRule;
import io.instanto.webapp.testkit.dom.Dom;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * Tests written against an application this build did not compile.
 *
 * <p>The application in {@code src/main/resources/webapp} stands in for any built web application
 * — a GWT permutation, a bundler's output, a hand-written page. The build stages it with {@code
 * ApplicationFiles}; the rule serves it and points the queries at it. Nothing below mentions a
 * frame, a document or a window: these are the same {@link Dom} calls a unit test would make.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class ApplicationRuleExampleTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/plain-js/index.html");

  @Test
  public void findsControlsByTheirAccessibleNames() {
    expect(Dom.findByLabelText("Child name")).toHaveValue("");
    expect(Dom.findByRole("button", "Toggle")).toHaveAttribute("aria-pressed", "false");
  }

  @Test
  public void drivesTheApplicationsOwnEventHandlers() {
    Dom.type(Dom.findByLabelText("Child name"), "Ada");
    expect(Dom.findByRole("status")).toHaveText("Typed Ada");

    Dom.select(Dom.findByLabelText("Choice"), "B");
    expect(Dom.findByRole("status")).toHaveText("Selected B");
  }

  @Test
  public void startsEachTestFromTheApplicationsInitialState() {
    Dom.click(Dom.findByRole("button", "Toggle"));
    expect(Dom.findByRole("button", "Toggle")).toHaveAttribute("aria-pressed", "true");
  }

  @Test
  public void theToggleIsBackToItsStartingStateInTheNextTest() {
    expect(Dom.findByRole("button", "Toggle")).toHaveAttribute("aria-pressed", "false");
    expect(Dom.findByRole("status")).toHaveText("Starting");
  }

  @Test
  public void stillReachesTheApplicationDirectlyWhenATestNeedsIt() {
    expect(app.application().page().findByRole("button", "Toggle")).toHaveAccessibleName("Toggle");
  }
}
