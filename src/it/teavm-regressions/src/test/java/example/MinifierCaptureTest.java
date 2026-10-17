/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package example;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.*;
import org.teavm.junit.*;

@RunWith(TeaVMTestRunner.class)
@SkipJVM
@OnlyPlatform(TestPlatform.JAVASCRIPT)
public class MinifierCaptureTest {
  @Test
  public void callbackSurvivesNestedParameterNames() {
    assertEquals(42, nested(() -> 42));
  }

  @JSFunctor
  interface Value extends JSObject {
    int get();
  }

  @JSBody(params = "value", script = "function read(b) { return value(); } return read();")
  private static native int nested(Value value);
}
