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
 * An Angular application, staged and driven from Java.
 *
 * <p>This is the breadth case rather than the strong one. An Angular team has better tools for
 * their own components — Karma, Jest, Testing Library — and should use them. What this shows is
 * that a built front end of any provenance can be put under a Java browser test, alongside the
 * Java-compiled applications the other examples cover.
 *
 * <p>It also makes a deployment caveat concrete. Angular's default {@code index.html} carries
 * {@code <base href="/">}, which resolves assets against the origin root and breaks under the
 * staged prefix. The vendored build was produced with {@code --base-href ./}, the same adjustment
 * any subdirectory deployment needs; {@code ApplicationFiles} then stages it unchanged.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class AngularApplicationTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/angular/index.html")
      // Angular replaces <app-root> once it has bootstrapped; that is the readiness signal.
      .readyWhen(page -> page.findByRoleOrNull("heading", "July timesheet") != null)
      .readyWithin(20_000);

  @Test
  public void resolvesItsAssetsUnderTheStagedPrefix() {
    // If <base href> were the default "/", the bundle would 404 and nothing would render.
    expect(Dom.findByRole("heading", "July timesheet")).toBeVisible();
    assertTrue("Angular rendered its list", Dom.page().findAll("li").size() >= 2);
  }

  @Test
  public void bindsThroughAngularsOwnChangeDetection() {
    Dom.type(Dom.findByLabelText("New entry"), "Thursday: 5h");
    Dom.click(Dom.findByRole("button", "Add"));

    Dom.waitFor(() -> expect(Dom.findByText("Thursday: 5h")).toBeVisible());
  }

  @Test
  public void updatesASignalBackedValue() {
    expect(Dom.findByRole("status")).toHaveText("Not submitted");

    Dom.click(Dom.findByRole("button", "Submit"));

    Dom.waitFor(() -> expect(Dom.findByRole("status")).toHaveText("Submitted"));
  }
}
