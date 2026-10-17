/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package example;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.*;
import org.teavm.junit.*;

@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class FrameTest {
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
    } finally {
      frame.getParentNode().removeChild(frame);
    }
  }
}
