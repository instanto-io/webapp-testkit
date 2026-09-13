/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static io.instanto.webapp.testkit.dom.Expect.expect;
import static org.junit.Assert.*;

import io.instanto.webapp.testkit.app.ApplicationRule;
import io.instanto.webapp.testkit.dom.Dom;
import io.instanto.webapp.testkit.dom.DomScope;
import io.instanto.webapp.testkit.dom.ElementBox;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/**
 * A JavaFX application, transpiled to JavaScript by WebFX, tested from a TeaVM Java test.
 *
 * <p>Nothing here compiles JavaFX. The application is checked-in build output from a toolchain this
 * repository does not run, which is the case the testkit exists for.
 *
 * <p>It also shows the limit of the accessible queries. WebFX renders its scene graph into custom
 * elements — {@code fx-scene}, {@code fx-circle} — with no roles and no accessible names, so
 * {@code findByRole} and {@code findByLabelText} have nothing to match. What a graphical
 * application does expose is geometry, which is what these assertions use.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class WebFxApplicationTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/webfx/index.html")
      // WebFX never sets data-ready, and its shapes are in the DOM before JavaFX has laid them
      // out, so readiness is the first shape acquiring a box rather than merely existing.
      .readyWhen(page -> laidOutShape(page) != null)
      .readyWithin(20_000)
      .sized(800, 600);

  @Test
  public void bootstrapsFromItsOwnStagedAssets() {
    HTMLElement scene = Dom.page().findAll("fx-scene").get(0);

    // The GWT bootstrap resolved ./nocache.js, its permutation and its stylesheet under the
    // staged prefix, and JavaFX laid the scene out to the viewport the rule asked for.
    expect(scene).toHaveWidth(800);
    expect(scene).toHaveHeight(600);
  }

  @Test
  public void laysOutItsShapesWithSubPixelGeometry() {
    assertTrue("the scene graph rendered shapes", Dom.page().findAll("fx-circle").size() > 1);

    ElementBox shape = Dom.layout(laidOutShape(Dom.page()));

    // Whether a given frame lands on whole pixels depends on where the animation is; that
    // fractional values survive at all is covered deterministically in mockatcha-dom.
    assertTrue("a shape has a measurable box: " + shape, shape.width() > 0);
    assertTrue("a shape has a measurable height: " + shape, shape.height() > 0);
  }

  @Test
  public void animatesItsSceneGraphOverTime() {
    HTMLElement circle = laidOutShape(Dom.page());
    ElementBox before = Dom.layout(circle);

    Dom.waitFor(() -> {
      ElementBox now = Dom.layout(circle);
      assertTrue("expected the animation to move " + before + " but it is still " + now,
          Math.abs(now.left() - before.left()) > 0.5 || Math.abs(now.top() - before.top()) > 0.5);
    }, 5_000);
  }

  /** The first shape JavaFX has actually laid out, or null while the scene is still building. */
  private static HTMLElement laidOutShape(DomScope page) {
    for (HTMLElement circle : page.findAll("fx-circle")) {
      if (Dom.layout(circle).width() > 0) {
        return circle;
      }
    }
    return null;
  }

  @Test
  public void exposesNoAccessibleSemanticsToQueryOn() {
    // A tripwire, not an endorsement. If WebFX ever emits roles this fails and the demo can
    // use findByRole like any other application.
    assertTrue("WebFX now exposes roles - the accessible queries apply to it",
        Dom.page().findAllByRole("button").isEmpty());
  }
}
