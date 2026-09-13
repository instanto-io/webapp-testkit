/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.layout;

/**
 * The four numbers a rectangle relation needs, supplied by the caller.
 *
 * <p>This is a contract rather than a value type, because every caller already has a rectangle of
 * its own — {@code DOMRect} in a browser, {@code Rectangle} and {@code Bounds2D} in a graphics
 * library. Shipping one more would force a conversion at every call site.
 *
 * <p>The values must be a snapshot taken when the box is created. An implementation reading
 * through to a live JavaScript object or a mutable scene node would let a rectangle change between
 * two assertions about it.
 */
public interface LayoutBox {

  double left();

  double top();

  double width();

  double height();

  default double right() {
    return left() + width();
  }

  default double bottom() {
    return top() + height();
  }
}
