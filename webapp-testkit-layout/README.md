# Webapp Testkit Layout

Rectangle relations and their tolerances. No DOM, no scene graph, no browser, no
dependencies — everything here is arithmetic on four doubles, and it runs as
ordinary JVM unit tests.

It is separate from `webapp-testkit-dom` because the hard part is the relation semantics,
not the measuring. Reading `getBoundingClientRect()` is one call. What goes wrong is
whether "below" is inclusive at the tolerance boundary, and that touching requires
edges to meet **and** the perpendicular ranges to overlap. Welded to an element, every
one of those cases costs a browser to test.

## The box

The caller supplies the rectangle:

```java
record Box(double left, double top, double width, double height) implements LayoutBox {}
```

There is deliberately no value type here. Every caller already has a rectangle —
`DOMRect` in a browser, `Rectangle` and `Bounds2D` in a graphics library — and
shipping one more would force a conversion at every call site. The values must be a
snapshot: an implementation reading through to a live object would let a rectangle
change between two assertions about it.

Zero-sized boxes are legitimate; a `display:none` element and an unlaid-out node both
measure zero. Negative extents are rejected.

## The relations

`a` is the subject, `b` the reference, `t` the tolerance. All comparisons are
inclusive within the tolerance, which defaults to `0.5` — tight enough to catch a
layout gap, loose enough for sub-pixel rounding.

| Assertion | Holds when |
| --- | --- |
| `hasWidth(a, w, t)` | `abs(a.width - w) <= t` |
| `hasHeight(a, h, t)` | `abs(a.height - h) <= t` |
| `hasSameWidth(a, b, t)` | `abs(a.width - b.width) <= t` |
| `hasSameHeight(a, b, t)` | `abs(a.height - b.height) <= t` |
| `isBelow(a, b, t)` | `a.top + t >= b.bottom` |
| `isAbove(a, b, t)` | `a.bottom - t <= b.top` |
| `isLeftOf(a, b, t)` | `a.right - t <= b.left` |
| `isRightOf(a, b, t)` | `a.left + t >= b.right` |
| `isLeftAlignedWith(a, b, t)` | `abs(a.left - b.left) <= t` |
| `isTopAlignedWith(a, b, t)` | `abs(a.top - b.top) <= t` |
| `touchesVertically(a, b, t)` | edges meet **and** horizontal ranges overlap |
| `touchesHorizontally(a, b, t)` | edges meet **and** vertical ranges overlap |

Right, bottom and centre alignment are deliberately absent. Add them when a test
needs one, with the same shape.

## Diagnostics

A failure states the relation, both complete rectangles, the tolerance and the
measurement — never just `true`/`false`, and never rounded integers:

```
expected [left=12.0 top=40.0 right=92.0 bottom=74.0] to touch horizontally
         [left=96.5 top=40.0 right=180.0 bottom=74.0] within 0.5;
         horizontal gap was 4.5
```

Reporting the measured gap is what makes a layout failure diagnosable without opening
a browser.

## Consumers

`webapp-testkit-dom` implements `LayoutBox` over `getBoundingClientRect()` and re-exposes
the relations as assertions — see [Webapp Testkit DOM](../webapp-testkit-dom/README.md#geometry).

`sarto-scene-testkit` implements it over a scene graph, as `NodeBox`. A scene node
reports its position relative to its parent, so that adapter resolves to scene-root
coordinates by accumulating `layoutX + translateX` up the parent chain — the same
choice `SceneDriver` already makes when working out where to click. Measuring
parent-relative values instead would compare two nodes in unrelated coordinate spaces,
which is the scene-graph form of the cross-document error the DOM adapter rejects.
It also refuses a node that has not been through a rendering pulse, because nothing
lays a scene out until something renders it.

Two consumers over different substrates share the relations, the tolerance semantics
and the diagnostics, so a bug fixed in one is fixed for both. That is the reason this
module exists rather than the assertions living in either testkit.

What stays with the caller is anything naming a domain concept. This library says two
boxes touch; it does not say an input group is contiguous.
