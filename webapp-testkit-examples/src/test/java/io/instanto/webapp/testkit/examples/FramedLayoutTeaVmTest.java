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
import io.instanto.webapp.testkit.dom.ElementBox;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/** Style and geometry are evaluated in the element's own window, not the test runner's. */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class FramedLayoutTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/plain-js/index.html");

  @Test
  public void geometryAndStyleWorkInsideTheApplicationFrame() {
    HTMLElement field = Dom.findByLabelText("Child name");
    HTMLElement toggle = Dom.findByRole("button", "Toggle");

    ElementBox box = Dom.layout(field);
    assertTrue("the field is laid out in the child document: " + box, box.width() > 0);
    assertEquals("rgb(12, 34, 56)", Dom.computedStyle(toggle, "color"));

    // Both elements belong to the application's document, so relations apply.
    expect(field).toBeLeftOf(toggle);
    expect(field).toBeTopAlignedWith(toggle, 20);
  }

  @Test
  public void comparingAcrossDocumentsIsACoordinateSystemError() {
    HTMLElement insideApplication = Dom.findByRole("button", "Toggle");
    HTMLElement inTheTestPage =
        Dom.container().getOwnerDocument().createElement("div");
    Dom.container().appendChild(inTheTestPage);

    IllegalArgumentException failure = assertThrows(IllegalArgumentException.class,
        () -> expect(inTheTestPage).toBeLeftOf(insideApplication));

    assertTrue(failure.getMessage(), failure.getMessage().contains("across documents"));
    assertTrue("names both documents: " + failure.getMessage(),
        failure.getMessage().contains("plain-js"));
  }
}
