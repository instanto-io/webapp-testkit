/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.layout;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

/**
 * Relations between rectangles, with a tolerance and a diagnosable failure message.
 *
 * <p>Nothing here mentions an element, a document or a browser, so the fiddly part — the relation
 * semantics at the tolerance boundary — is an ordinary JVM unit test, and a second testkit over a
 * different substrate reuses it unchanged.
 */
public final class Layout {

  /** Tight enough to catch a layout gap, loose enough for sub-pixel rounding. */
  public static final double DEFAULT_TOLERANCE = 0.5;

  private Layout() {}

  public static boolean hasWidth(LayoutBox box, double width) {
    return hasWidth(box, width, DEFAULT_TOLERANCE);
  }

  public static boolean hasWidth(LayoutBox box, double width, double tolerance) {
    return Math.abs(checked(box, "box").width() - width) <= checkedTolerance(tolerance);
  }

  public static boolean hasHeight(LayoutBox box, double height) {
    return hasHeight(box, height, DEFAULT_TOLERANCE);
  }

  public static boolean hasHeight(LayoutBox box, double height, double tolerance) {
    return Math.abs(checked(box, "box").height() - height) <= checkedTolerance(tolerance);
  }

  public static boolean hasSameWidth(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.SAME_WIDTH, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean hasSameWidth(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.SAME_WIDTH, a, b, tolerance);
  }

  public static boolean hasSameHeight(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.SAME_HEIGHT, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean hasSameHeight(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.SAME_HEIGHT, a, b, tolerance);
  }

  public static boolean isBelow(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.BELOW, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isBelow(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.BELOW, a, b, tolerance);
  }

  public static boolean isAbove(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.ABOVE, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isAbove(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.ABOVE, a, b, tolerance);
  }

  public static boolean isLeftOf(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.LEFT_OF, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isLeftOf(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.LEFT_OF, a, b, tolerance);
  }

  public static boolean isRightOf(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.RIGHT_OF, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isRightOf(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.RIGHT_OF, a, b, tolerance);
  }

  public static boolean isLeftAlignedWith(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.LEFT_ALIGNED_WITH, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isLeftAlignedWith(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.LEFT_ALIGNED_WITH, a, b, tolerance);
  }

  public static boolean isTopAlignedWith(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.TOP_ALIGNED_WITH, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean isTopAlignedWith(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.TOP_ALIGNED_WITH, a, b, tolerance);
  }

  public static boolean touchesVertically(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.TOUCHES_VERTICALLY, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean touchesVertically(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.TOUCHES_VERTICALLY, a, b, tolerance);
  }

  public static boolean touchesHorizontally(LayoutBox a, LayoutBox b) {
    return holds(LayoutRelation.TOUCHES_HORIZONTALLY, a, b, DEFAULT_TOLERANCE);
  }

  public static boolean touchesHorizontally(LayoutBox a, LayoutBox b, double tolerance) {
    return holds(LayoutRelation.TOUCHES_HORIZONTALLY, a, b, tolerance);
  }

  /** Evaluates any relation, validating both boxes and the tolerance. */
  public static boolean holds(LayoutRelation relation, LayoutBox a, LayoutBox b, double tolerance) {
    Objects.requireNonNull(relation, "relation");
    return relation.holds(checked(a, "subject"), checked(b, "reference"), checkedTolerance(tolerance));
  }

  /** {@code [left=12.0 top=40.0 right=92.0 bottom=74.0]} */
  public static String describe(LayoutBox box) {
    checked(box, "box");
    return "[left=" + number(box.left()) + " top=" + number(box.top())
        + " right=" + number(box.right()) + " bottom=" + number(box.bottom()) + "]";
  }

  /** States the relation, both complete rectangles, the tolerance and the measurement. */
  public static String explain(LayoutRelation relation, LayoutBox a, LayoutBox b, double tolerance) {
    Objects.requireNonNull(relation, "relation");
    checked(a, "subject");
    checked(b, "reference");
    checkedTolerance(tolerance);
    return "expected " + describe(a) + " " + relation.description() + " " + describe(b)
        + " within " + number(tolerance)
        + "; " + relation.measurement() + " was " + number(relation.measure(a, b));
  }

  public static String explainExtent(String extent, LayoutBox box, double expected, double actual,
      double tolerance) {
    checked(box, "box");
    checkedTolerance(tolerance);
    return "expected " + describe(box) + " to have " + extent + " " + number(expected)
        + " within " + number(tolerance) + "; measured " + number(actual);
  }

  private static LayoutBox checked(LayoutBox box, String role) {
    Objects.requireNonNull(box, role);
    if (box.width() < 0 || box.height() < 0) {
      throw new IllegalArgumentException(
          "Rectangle extents cannot be negative: " + describeRaw(box));
    }
    return box;
  }

  private static double checkedTolerance(double tolerance) {
    if (!(tolerance >= 0)) {
      throw new IllegalArgumentException("Tolerance cannot be negative: " + tolerance);
    }
    return tolerance;
  }

  private static String describeRaw(LayoutBox box) {
    return "[left=" + number(box.left()) + " top=" + number(box.top())
        + " width=" + number(box.width()) + " height=" + number(box.height()) + "]";
  }

  /** Keeps fractional coordinates without printing floating-point noise. */
  private static String number(double value) {
    if (Double.isNaN(value) || Double.isInfinite(value)) {
      return Double.toString(value);
    }
    BigDecimal rounded = BigDecimal.valueOf(value).setScale(4, RoundingMode.HALF_UP);
    BigDecimal trimmed = rounded.stripTrailingZeros();
    return trimmed.scale() <= 0 ? trimmed.setScale(1).toPlainString() : trimmed.toPlainString();
  }
}
