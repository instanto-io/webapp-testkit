/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static io.instanto.mockatcha.Mockatcha.mock;
import static io.instanto.mockatcha.Mockatcha.verify;
import static io.instanto.mockatcha.Mockatcha.when;
import static io.instanto.webapp.testkit.dom.Expect.expect;

import io.instanto.webapp.testkit.dom.Dom;
import io.instanto.webapp.testkit.dom.DomRule;
import java.util.List;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * The case this exists for: a user interface written in Java, compiled by TeaVM, tested in the
 * browser it will run in.
 *
 * <p>The test and the component compile together, so the component is constructed through its own
 * constructor and handed the service it reads from. There is no application to serve, no URL and
 * no frame — the component is put on the page directly. Renaming a method on it breaks this test
 * at compile time rather than at run time.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class TimesheetComponentTeaVmTest {

  @Rule public DomRule dom = new DomRule();

  private TimesheetService service;

  private void showTimesheetFor(String month, String... entries) {
    service = mock(TimesheetService.class);
    when(service.entriesFor(month)).thenReturn(List.of(entries));
    Dom.container().appendChild(new TimesheetComponent(service, month).element());
  }

  @Test
  public void rendersWhatTheServiceReturns() {
    showTimesheetFor("July", "Monday: 7h", "Tuesday: 8h");

    expect(Dom.findByRole("heading", "July timesheet")).toBeVisible();
    expect(Dom.findByText("Monday: 7h")).toBeVisible();
    expect(Dom.findByText("Tuesday: 8h")).toBeVisible();
  }

  @Test
  public void submitsThroughTheServiceAndReportsIt() {
    showTimesheetFor("July", "Monday: 7h");
    expect(Dom.findByRole("status")).toHaveText("Not submitted");

    Dom.click(Dom.findByRole("button", "Submit"));

    // The collaborator is an object this test supplied, not traffic it intercepted.
    verify(service).submit("July");
    expect(Dom.findByRole("status")).toHaveText("Submitted");
  }

  @Test
  public void laysTheEntriesOutBelowTheHeading() {
    showTimesheetFor("July", "Monday: 7h");

    expect(Dom.findByText("Monday: 7h")).toBeBelow(Dom.findByRole("heading", "July timesheet"));
  }
}
