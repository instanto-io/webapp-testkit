# 3. Finding and driving elements

## Finding

Prefer the queries a user could describe. In order of preference:

```java
Dom.findByRole("button", "Save");        // role and accessible name
Dom.findByLabelText("Name");             // the label a user reads
Dom.findByPlaceholderText("Add a todo"); // placeholder text
Dom.findByText("Saved");                 // visible text
Dom.find("#save");                       // a CSS selector, when nothing else fits
```

Each has a `findAll…` form returning every match, and a `…OrNull` form returning
`null` rather than failing. A failing query reports what it looked for and prints the
element it searched, which is usually enough to see why.

Queries that name a role or a label are stable across markup changes and fail when
the interface becomes unusable — a button that loses its accessible name stops being
findable. A CSS selector does not notice.

Some applications expose nothing to query. A JavaFX scene transpiled by WebFX renders
into `fx-scene` and `fx-circle` elements with no roles or names; there, the queries
above do not apply and [chapter 5](layout-and-geometry.md) is what remains.

## Scoping

`Dom` searches the test's container. `Dom.within(element)` narrows to one subtree,
in any accessible document:

```java
DomScope dialog = Dom.within(Dom.find("#dialog"));
expect(dialog.findByRole("button", "Save")).toBeVisible();
```

## Driving

```java
Dom.click(element);
Dom.type(element, "Ada");        // through the native setter, so frameworks observe it
Dom.select(element, "B");
Dom.focus(element);
Dom.press(element, Keys.ENTER);   // or "a" for a character
```

Events are created in the element's own window, so an application in a frame sees
events from its own realm rather than the test's.

A key press carries three values a handler may read: `key` (`Enter`), `code`
(`Enter`, or `KeyA` for `a`) and the legacy `keyCode` (13). Code that reads `keyCode`
— which older widget libraries do — behaves differently if it is missing, so `press`
derives all three from the name.

Use a constant from `Keys` for a named key, so the name is checked when you compile.
Printable characters are passed directly. A name that is neither — `"Return"`,
`"enter"`, `"ESC"` — is rejected, rather than sent with no code and a zero key code
for a handler to quietly ignore. Legacy aliases that browsers do define are accepted
and normalised: `Esc`, `Left`, `Spacebar`.

## Asserting

```java
expect(element).toHaveText("Saved");
expect(element).toHaveValue("Ada");
expect(element).toHaveAttribute("aria-pressed", "true");
expect(element).toBeVisible();
expect(element).toHaveFocus();
expect(element).not().toBeDisabled();
```

The full list is in the [dom reference](../webapp-testkit-dom/README.md#check-the-result).
