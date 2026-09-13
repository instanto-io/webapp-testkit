/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.layout;

import static org.junit.Assert.*;

import org.junit.Test;

/**
 * The relation semantics, as plain arithmetic.
 *
 * <p>These implement {@link LayoutBox} themselves. If a case ever needs a browser or a scene graph
 * to express, the split between this module and its consumers has been drawn in the wrong place.
 */
public class LayoutTest {

  /** The caller's rectangle: a few lines, staying with the caller. */
  record Box(double left, double top, double width, double height) implements LayoutBox {}

  private static final double T = 0.25;

  // 1. Each relation passes just inside its tolerance boundary and fails just outside.

  @Test public void belowHoldsToTheToleranceBoundary() {
    Box reference = new Box(0, 0, 10, 10);           // bottom = 10
    assertTrue(Layout.isBelow(new Box(0, 9.75, 10, 10), reference, T));
    assertFalse(Layout.isBelow(new Box(0, 9.74, 10, 10), reference, T));
  }

  @Test public void aboveHoldsToTheToleranceBoundary() {
    Box reference = new Box(0, 10, 10, 10);          // top = 10
    assertTrue(Layout.isAbove(new Box(0, 0, 10, 10.25), reference, T));
    assertFalse(Layout.isAbove(new Box(0, 0, 10, 10.26), reference, T));
  }

  @Test public void leftOfHoldsToTheToleranceBoundary() {
    Box reference = new Box(10, 0, 10, 10);          // left = 10
    assertTrue(Layout.isLeftOf(new Box(0, 0, 10.25, 10), reference, T));
    assertFalse(Layout.isLeftOf(new Box(0, 0, 10.26, 10), reference, T));
  }

  @Test public void rightOfHoldsToTheToleranceBoundary() {
    Box reference = new Box(0, 0, 10, 10);           // right = 10
    assertTrue(Layout.isRightOf(new Box(9.75, 0, 10, 10), reference, T));
    assertFalse(Layout.isRightOf(new Box(9.74, 0, 10, 10), reference, T));
  }

  @Test public void alignmentHoldsToTheToleranceBoundary() {
    Box reference = new Box(10, 20, 10, 10);
    assertTrue(Layout.isLeftAlignedWith(new Box(10.25, 0, 5, 5), reference, T));
    assertFalse(Layout.isLeftAlignedWith(new Box(10.26, 0, 5, 5), reference, T));
    assertTrue(Layout.isTopAlignedWith(new Box(0, 19.75, 5, 5), reference, T));
    assertFalse(Layout.isTopAlignedWith(new Box(0, 19.74, 5, 5), reference, T));
  }

  @Test public void sameExtentHoldsToTheToleranceBoundary() {
    Box reference = new Box(0, 0, 100, 40);
    assertTrue(Layout.hasSameWidth(new Box(0, 0, 100.25, 40), reference, T));
    assertFalse(Layout.hasSameWidth(new Box(0, 0, 100.26, 40), reference, T));
    assertTrue(Layout.hasSameHeight(new Box(0, 0, 100, 39.75), reference, T));
    assertFalse(Layout.hasSameHeight(new Box(0, 0, 100, 39.74), reference, T));
  }

  @Test public void extentHoldsToTheToleranceBoundary() {
    assertTrue(Layout.hasWidth(new Box(0, 0, 240.25, 40), 240, T));
    assertFalse(Layout.hasWidth(new Box(0, 0, 240.26, 40), 240, T));
    assertTrue(Layout.hasHeight(new Box(0, 0, 240, 39.75), 40, T));
    assertFalse(Layout.hasHeight(new Box(0, 0, 240, 39.74), 40, T));
  }

  @Test public void touchingHoldsToTheToleranceBoundary() {
    Box left = new Box(0, 0, 10, 10);                // right = 10
    assertTrue(Layout.touchesHorizontally(new Box(10.25, 0, 10, 10), left, T));
    assertFalse(Layout.touchesHorizontally(new Box(10.26, 0, 10, 10), left, T));
  }

  // 2. Touching edges but no overlap in the perpendicular axis is not touching.

  @Test public void oppositeCornersSharingACoordinateDoNotTouch() {
    Box topLeft = new Box(0, 0, 10, 10);             // right = 10, bottom = 10
    Box bottomRight = new Box(10, 500, 10, 10);      // left = 10, but far below
    assertFalse("edges meet horizontally but the vertical ranges do not overlap",
        Layout.touchesHorizontally(bottomRight, topLeft, T));
    assertFalse(Layout.touchesVertically(new Box(500, 10, 10, 10), topLeft, T));
  }

  // 3. Overlapping boxes whose edges do not meet are not touching.

  @Test public void overlappingWithoutMeetingEdgesIsNotTouching() {
    Box a = new Box(0, 0, 100, 100);
    Box b = new Box(20, 20, 10, 10);                 // wholly inside a
    assertFalse(Layout.touchesHorizontally(b, a, T));
    assertFalse(Layout.touchesVertically(b, a, T));
  }

  // 4. Overlapping with a negative gap within tolerance is touching.

  @Test public void aSmallOverlapWithinToleranceStillTouches() {
    Box left = new Box(0, 0, 10, 10);                // right = 10
    Box overlapping = new Box(9.8, 0, 10, 10);       // left = 9.8, gap = -0.2
    assertTrue(Layout.touchesHorizontally(overlapping, left, T));
  }

  // 5. Zero-sized boxes compare without throwing.

  @Test public void zeroSizedBoxesAreLegitimate() {
    Box collapsed = new Box(5, 5, 0, 0);             // display:none, or unlaid-out
    Box other = new Box(0, 0, 10, 10);
    assertFalse(Layout.isBelow(collapsed, other, T));
    assertTrue(Layout.hasWidth(collapsed, 0, T));
    assertNotNull(Layout.describe(collapsed));
  }

  // 6. Fractional coordinates are preserved and compared without rounding.

  @Test public void fractionalCoordinatesAreNotRounded() {
    Box box = new Box(12.6608, 1.17238, 300.5, 120.25);
    assertTrue(Layout.describe(box).contains("12.6608"));
    assertTrue(Layout.hasWidth(box, 300.5, 0));
    assertFalse("300.5 is not 300 at zero tolerance", Layout.hasWidth(box, 300, 0));
  }

  // 7. Negative tolerance, negative extents and null boxes are argument errors.

  @Test public void argumentErrors() {
    Box ok = new Box(0, 0, 10, 10);
    assertThrows(IllegalArgumentException.class, () -> Layout.isBelow(ok, ok, -0.1));
    assertThrows(IllegalArgumentException.class,
        () -> Layout.isBelow(new Box(0, 0, -1, 10), ok, T));
    assertThrows(IllegalArgumentException.class,
        () -> Layout.hasHeight(new Box(0, 0, 10, -1), 10, T));
    assertThrows(NullPointerException.class, () -> Layout.isBelow(null, ok, T));
    assertThrows(NullPointerException.class, () -> Layout.isBelow(ok, null, T));
    assertThrows(NullPointerException.class, () -> Layout.describe(null));
  }

  // 8. Every failure message contains both rectangles and the tolerance.

  @Test public void failureMessagesAreDiagnosable() {
    Box control = new Box(12, 40, 80, 34);
    Box suffix = new Box(96.5, 40, 83.5, 34);

    String message = Layout.explain(LayoutRelation.TOUCHES_HORIZONTALLY, control, suffix, 0.5);

    assertTrue(message, message.contains("[left=12.0 top=40.0 right=92.0 bottom=74.0]"));
    assertTrue(message, message.contains("[left=96.5 top=40.0 right=180.0 bottom=74.0]"));
    assertTrue(message, message.contains("to touch horizontally"));
    assertTrue(message, message.contains("within 0.5"));
    assertTrue("reports the measured gap: " + message, message.contains("horizontal gap was 4.5"));
  }

  @Test public void extentFailuresReportTheMeasurement() {
    Box box = new Box(0, 0, 236, 40);
    String message = Layout.explainExtent("width", box, 240, box.width(), 0.5);
    assertTrue(message, message.contains("to have width 240.0"));
    assertTrue(message, message.contains("within 0.5"));
    assertTrue(message, message.contains("measured 236.0"));
  }
}
