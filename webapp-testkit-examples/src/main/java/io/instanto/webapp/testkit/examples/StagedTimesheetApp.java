/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import java.util.List;
import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLDocument;

/**
 * A TeaVM application, compiled to JavaScript by this build and then tested as deployed output.
 *
 * <p>{@link TimesheetComponentTeaVmTest} drives the same component in the test's own page. This
 * is the other half: the application is compiled, staged onto the test classpath and opened
 * through its own entry point, so the test covers its startup and asset paths as well as its
 * behaviour.
 */
public final class StagedTimesheetApp {

  private StagedTimesheetApp() {}

  public static void main(String[] args) {
    TimesheetService service = new TimesheetService() {
      @Override
      public List<String> entriesFor(String month) {
        return List.of("Monday: 7h", "Tuesday: 8h", "Wednesday: 6h");
      }

      @Override
      public void submit(String month) {
        // A real application would post it; this one only has to be observable.
      }
    };

    HTMLDocument document = HTMLDocument.current();
    document.getBody().appendChild(new TimesheetComponent(service, "July").element());

    // Readiness is the application's own signal, not the frame's load event.
    Window.setTimeout(() -> document.getBody().setAttribute("data-ready", "true"), 0);
  }
}
