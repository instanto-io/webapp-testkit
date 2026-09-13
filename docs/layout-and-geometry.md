# 5. Layout and geometry

Some things are only observable as geometry: whether an addon touches its input,
whether a menu is below its trigger, whether an animation moved. Where an application
exposes no roles or labels, geometry may be all there is.

## Measuring

```java
ElementBox box = Dom.layout(element);
```

The rectangle is read once with `getBoundingClientRect()` and held as numbers, so it
cannot change between two assertions about it. Values are viewport-relative CSS
pixels, fractions preserved. A detached or `display:none` element measures zero, which
is a legitimate rectangle rather than an error.

Computed style is read the same way, in the element's own window:

```java
String display = Dom.computedStyle(element, "display");
String marker  = Dom.computedStyle(element, "::before", "content");
```

## Relations

```java
expect(element).toHaveWidth(240);
expect(element).toHaveHeight(40, 0.5);        // explicit tolerance
expect(element).toBeBelow(reference);
expect(element).toBeLeftOf(reference);
expect(element).toBeTopAlignedWith(reference);
expect(element).toHaveSameHeightAs(reference);
expect(element).toTouchHorizontally(reference);
```

Tolerance defaults to 0.5 CSS pixels: tight enough to catch a layout gap, loose enough
for sub-pixel rounding. Every relation takes an explicit tolerance as an overload.

Touching means the edges meet **and** the perpendicular ranges overlap. Without the
second condition, two boxes at opposite corners of the screen touch whenever their
edges share a coordinate.

A failure reports both rectangles, the tolerance and the measurement:

```
expected [left=12.0 top=40.0 right=92.0 bottom=74.0] to touch horizontally
         [left=96.5 top=40.0 right=180.0 bottom=74.0] within 0.5;
         horizontal gap was 4.5
```

## Snapshots, not waits

Each assertion takes one snapshot and does not wait. Wrap `Dom.waitFor` around it when
the application moves things asynchronously:

```java
Dom.waitFor(() -> expect(mover).toBeBelow(anchor));
```

## Across documents

Relations are valid only between elements of the same document. Comparing an element
in the test page with one inside an application frame fails with a coordinate-system
error naming both documents, rather than comparing unrelated coordinate spaces.

The arithmetic lives in [`webapp-testkit-layout`](../webapp-testkit-layout/README.md),
which has no DOM of its own and is shared with a scene-graph testkit.
