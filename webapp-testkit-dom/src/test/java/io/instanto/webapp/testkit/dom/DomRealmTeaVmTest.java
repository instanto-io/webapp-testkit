/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLButtonElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLIFrameElement;
import org.teavm.jso.dom.html.HTMLInputElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class DomRealmTeaVmTest {
  @Test
  public void childElementRetainsItsTypeThroughObject() {
    HTMLIFrameElement frame = (HTMLIFrameElement) HTMLDocument.current().createElement("iframe");
    HTMLDocument.current().getBody().appendChild(frame);
    try {
      Object value = frame.getContentDocument().createElement("input");
      assertTrue(value instanceof HTMLInputElement);
      HTMLInputElement input = (HTMLInputElement) value;
      input.setValue("ok");
      assertEquals("ok", input.getValue());
      assertFalse(value instanceof HTMLButtonElement);
      assertThrows(ClassCastException.class, () -> ((HTMLButtonElement) value).getValue());
    } finally {
      frame.getParentNode().removeChild(frame);
    }
  }
}
