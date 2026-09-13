/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

import io.instanto.webapp.testkit.layout.LayoutBox;
import java.util.Objects;
import org.teavm.jso.dom.html.HTMLElement;

/**
 * An element's measured rectangle, held as numbers rather than as the live {@code DOMRect}.
 *
 * <p>Viewport-relative CSS pixels, fractional values preserved. A detached or {@code display:none}
 * element measures zero, which is a legitimate rectangle rather than an error.
 */
public final class ElementBox implements LayoutBox {

  private final double left;
  private final double top;
  private final double width;
  private final double height;
  private final HTMLElement element;

  private ElementBox(HTMLElement element, Browser.Rect rect) {
    this.element = element;
    this.left = rect.getLeft();
    this.top = rect.getTop();
    this.width = rect.getWidth();
    this.height = rect.getHeight();
  }

  static ElementBox of(HTMLElement element) {
    Objects.requireNonNull(element, "element");
    return new ElementBox(element, Browser.rect(element));
  }

  /** The element measured, so a relation can check both are in one coordinate system. */
  HTMLElement element() {
    return element;
  }

  @Override
  public double left() {
    return left;
  }

  @Override
  public double top() {
    return top;
  }

  @Override
  public double width() {
    return width;
  }

  @Override
  public double height() {
    return height;
  }

  @Override
  public String toString() {
    return io.instanto.webapp.testkit.layout.Layout.describe(this);
  }
}
