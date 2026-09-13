/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.layout;

/**
 * A relation between two rectangles, with the measurement that explains a failure.
 *
 * <p>Each constant owns both halves so that a predicate and its diagnostics cannot drift apart.
 */
public enum LayoutRelation {

  BELOW("to be below", "vertical gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) { return a.top() + t >= b.bottom(); }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.top() - b.bottom(); }
  },
  ABOVE("to be above", "vertical gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) { return a.bottom() - t <= b.top(); }
    @Override double measure(LayoutBox a, LayoutBox b) { return b.top() - a.bottom(); }
  },
  LEFT_OF("to be left of", "horizontal gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) { return a.right() - t <= b.left(); }
    @Override double measure(LayoutBox a, LayoutBox b) { return b.left() - a.right(); }
  },
  RIGHT_OF("to be right of", "horizontal gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) { return a.left() + t >= b.right(); }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.left() - b.right(); }
  },
  LEFT_ALIGNED_WITH("to be left aligned with", "left difference") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      return Math.abs(a.left() - b.left()) <= t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.left() - b.left(); }
  },
  TOP_ALIGNED_WITH("to be top aligned with", "top difference") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      return Math.abs(a.top() - b.top()) <= t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.top() - b.top(); }
  },
  SAME_WIDTH("to have the same width as", "width difference") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      return Math.abs(a.width() - b.width()) <= t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.width() - b.width(); }
  },
  SAME_HEIGHT("to have the same height as", "height difference") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      return Math.abs(a.height() - b.height()) <= t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) { return a.height() - b.height(); }
  },
  /**
   * Edges meet vertically <em>and</em> the horizontal ranges overlap. Without the second
   * condition two boxes at opposite corners touch whenever their edges share a coordinate.
   */
  TOUCHES_VERTICALLY("to touch vertically", "vertical gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      boolean edgesMeet = Math.abs(a.bottom() - b.top()) <= t || Math.abs(b.bottom() - a.top()) <= t;
      return edgesMeet && Math.min(a.right(), b.right()) - Math.max(a.left(), b.left()) > -t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) {
      return Math.min(Math.abs(a.bottom() - b.top()), Math.abs(b.bottom() - a.top()));
    }
  },
  TOUCHES_HORIZONTALLY("to touch horizontally", "horizontal gap") {
    @Override boolean holds(LayoutBox a, LayoutBox b, double t) {
      boolean edgesMeet = Math.abs(a.right() - b.left()) <= t || Math.abs(b.right() - a.left()) <= t;
      return edgesMeet && Math.min(a.bottom(), b.bottom()) - Math.max(a.top(), b.top()) > -t;
    }
    @Override double measure(LayoutBox a, LayoutBox b) {
      return Math.min(Math.abs(a.right() - b.left()), Math.abs(b.right() - a.left()));
    }
  };

  private final String description;
  private final String measurement;

  LayoutRelation(String description, String measurement) {
    this.description = description;
    this.measurement = measurement;
  }

  abstract boolean holds(LayoutBox a, LayoutBox b, double tolerance);

  /** The number a failure reports, so a layout gap is diagnosable without opening a browser. */
  abstract double measure(LayoutBox a, LayoutBox b);

  public String description() {
    return description;
  }

  public String measurement() {
    return measurement;
  }
}
