/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package example;

import java.util.ArrayList;
import java.util.List;
import org.teavm.jso.browser.Window;

public class TimerApplication {
  public static void main(String[] args) {
    List<String> values = new ArrayList<>();
    int id = Window.setTimeout(() -> values.add("fired"), 100000);
    Window.clearTimeout(id);
    if (!values.isEmpty()) throw new AssertionError();
  }
}
