/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

/**
 * Names of the keys {@link Dom#press} understands, so they are checked when you compile.
 *
 * <pre>{@code
 * Dom.press(field, Keys.ENTER);
 * Dom.press(field, "a");        // a printable character needs no constant
 * }</pre>
 *
 * <p>A press carries three values a handler may read — {@code key}, {@code code} and the legacy
 * {@code keyCode} — and they are derived from this name. A name that is not one of these and is
 * not a single character is rejected, because it would otherwise produce an event with no code
 * and a zero key code, which some handlers quietly ignore.
 */
public final class Keys {

  public static final String ENTER = "Enter";
  public static final String TAB = "Tab";
  public static final String ESCAPE = "Escape";
  public static final String SPACE = " ";
  public static final String BACKSPACE = "Backspace";
  public static final String DELETE = "Delete";
  public static final String INSERT = "Insert";
  public static final String HOME = "Home";
  public static final String END = "End";
  public static final String PAGE_UP = "PageUp";
  public static final String PAGE_DOWN = "PageDown";
  public static final String ARROW_LEFT = "ArrowLeft";
  public static final String ARROW_UP = "ArrowUp";
  public static final String ARROW_RIGHT = "ArrowRight";
  public static final String ARROW_DOWN = "ArrowDown";

  public static final String F1 = "F1";
  public static final String F2 = "F2";
  public static final String F3 = "F3";
  public static final String F4 = "F4";
  public static final String F5 = "F5";
  public static final String F6 = "F6";
  public static final String F7 = "F7";
  public static final String F8 = "F8";
  public static final String F9 = "F9";
  public static final String F10 = "F10";
  public static final String F11 = "F11";
  public static final String F12 = "F12";

  private Keys() {}
}
