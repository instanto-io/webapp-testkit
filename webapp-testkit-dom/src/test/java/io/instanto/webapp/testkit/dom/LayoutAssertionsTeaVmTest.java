/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

import static io.instanto.webapp.testkit.dom.Expect.expect;
import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * The DOM half: computed style, measuring a rectangle, and the wiring to the relations.
 *
 * <p>The relation arithmetic itself is covered on the JVM in {@code webapp-testkit-layout}; what needs a
 * browser is that real layout reaches it intact.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class LayoutAssertionsTeaVmTest {

  @Rule public DomRule dom = new DomRule();

  @Test
  public void computedStyleResolvesTheCascadeNotJustInlineStyle() {
    Dom.render("<style>.boxed { display: flex; --gap-size: 7px }</style>"
        + "<div class='boxed' id='outer'><span id='inner'>x</span></div>");

    assertEquals("flex", Dom.computedStyle(Dom.find("#outer"), "display"));
    assertEquals("7px", Dom.computedStyle(Dom.find("#outer"), "--gap-size"));
    // The same value the existing assertion uses.
    expect(Dom.find("#outer")).toHaveStyle("display", "flex");
  }

  @Test
  public void computedStyleReadsPseudoElements() {
    Dom.render("<style>#marked::before { content: 'tick'; display: block }</style>"
        + "<div id='marked'>x</div>");

    assertEquals("\"tick\"", Dom.computedStyle(Dom.find("#marked"), "::before", "content"));
    assertEquals("block", Dom.computedStyle(Dom.find("#marked"), "::before", "display"));
  }

  @Test
  public void aPositionedFixtureMeasuresWithoutTruncation() {
    Dom.render("<div id='p' style='position:absolute; left:12.5px; top:40.25px;"
        + " width:80.5px; height:34.75px'></div>");

    ElementBox box = Dom.layout(Dom.find("#p"));

    assertEquals(80.5, box.width(), 0.01);
    assertEquals(34.75, box.height(), 0.01);
    assertTrue("fractional left preserved: " + box.left(), box.left() % 1 != 0);
  }

  @Test
  public void hiddenAndDetachedElementsMeasureZeroRatherThanThrowing() {
    Dom.render("<div id='gone' style='display:none'>x</div>");
    ElementBox hidden = Dom.layout(Dom.find("#gone"));
    assertEquals(0, hidden.width(), 0.0001);
    assertEquals(0, hidden.height(), 0.0001);

    HTMLElement detached = Dom.container().getOwnerDocument().createElement("div");
    ElementBox loose = Dom.layout(detached);
    assertEquals(0, loose.width(), 0.0001);
  }

  @Test
  public void relationsRunAgainstRealLayout() {
    Dom.render("<div style='position:relative; width:300px'>"
        + "<div id='a' style='position:absolute; left:0; top:0; width:80px; height:34px'></div>"
        + "<div id='b' style='position:absolute; left:80px; top:0; width:80px; height:34px'></div>"
        + "<div id='c' style='position:absolute; left:0; top:34px; width:80px; height:34px'></div>"
        + "</div>");
    HTMLElement a = Dom.find("#a");
    HTMLElement b = Dom.find("#b");
    HTMLElement c = Dom.find("#c");

    expect(a).toHaveWidth(80);
    expect(a).toHaveHeight(34);
    expect(a).toBeLeftOf(b);
    expect(b).toBeRightOf(a);
    expect(c).toBeBelow(a);
    expect(a).toBeAbove(c);
    expect(a).toTouchHorizontally(b);
    expect(a).toTouchVertically(c);
    expect(a).toBeTopAlignedWith(b);
    expect(a).toBeLeftAlignedWith(c);
    expect(a).toHaveSameWidthAs(b);
    expect(a).toHaveSameHeightAs(b);
    expect(a).not().toBeBelow(b);
  }

  @Test
  public void aFailureNamesBothRectanglesAndTheTolerance() {
    Dom.render("<div style='position:relative'>"
        + "<div id='x' style='position:absolute; left:0; top:0; width:80px; height:34px'></div>"
        + "<div id='y' style='position:absolute; left:200px; top:0; width:80px; height:34px'></div>"
        + "</div>");

    AssertionError failure = assertThrows(AssertionError.class,
        () -> expect(Dom.find("#x")).toTouchHorizontally(Dom.find("#y")));

    String message = failure.getMessage();
    assertTrue(message, message.contains("to touch horizontally"));
    assertTrue(message, message.contains("within 0.5"));
    assertTrue("reports the measured gap: " + message, message.contains("horizontal gap was 120"));
  }

  @Test
  public void anAsynchronouslyMovedElementIsAssertedThroughWaitFor() {
    Dom.render("<div style='position:relative; height:200px'>"
        + "<div id='anchor' style='position:absolute; left:0; top:0; width:50px; height:20px'></div>"
        + "<div id='mover' style='position:absolute; left:0; top:0; width:50px; height:20px'></div>"
        + "</div>");
    HTMLElement mover = Dom.find("#mover");
    HTMLElement anchor = Dom.find("#anchor");
    Browser.setPollingTimeout(() -> mover.setAttribute("style",
        "position:absolute; left:0; top:120px; width:50px; height:20px"), 60);

    Dom.waitFor(() -> expect(mover).toBeBelow(anchor));

    expect(mover).toBeBelow(anchor);
  }

  @Test
  public void argumentsAreValidated() {
    Dom.render("<div id='v'>x</div>");
    HTMLElement v = Dom.find("#v");

    assertThrows(NullPointerException.class, () -> Dom.computedStyle(null, "display"));
    assertThrows(NullPointerException.class, () -> Dom.computedStyle(v, null));
    assertThrows(IllegalArgumentException.class, () -> Dom.computedStyle(v, " "));
    assertThrows(IllegalArgumentException.class, () -> Dom.computedStyle(v, " ", "display"));
    assertThrows(NullPointerException.class, () -> Dom.layout(null));
    assertThrows(IllegalArgumentException.class, () -> expect(v).toHaveWidth(10, -1));
  }
}
