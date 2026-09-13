/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import static org.junit.Assert.*;

import io.instanto.webapp.testkit.app.ApplicationRule;
import io.instanto.webapp.testkit.dom.Clock;
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
 * Driving a staged application's own timers by hand.
 *
 * <p>Each window has its own timers. {@code Dom.clock()} controls the test page; this controls the
 * application running in the frame, which is the one whose animation we want to hold still.
 */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class ApplicationClockTeaVmTest {

  @Rule
  public ApplicationRule app = new ApplicationRule("/resources/applications/webfx/index.html")
      .readyWhen(page -> laidOutShape(page) != null)
      .readyWithin(20_000);

  private static HTMLElement laidOutShape(DomScope page) {
    for (HTMLElement circle : page.findAll("fx-circle")) {
      if (Dom.layout(circle).width() > 0) {
        return circle;
      }
    }
    return null;
  }

  private static void realDelay(long milliseconds) {
    try {
      Thread.sleep(milliseconds);
    } catch (InterruptedException interrupted) {
      Thread.currentThread().interrupt();
    }
  }

  @Test
  public void holdsTheApplicationsAnimationStillAndThenAdvancesIt() {
    HTMLElement circle = laidOutShape(Dom.page());
    Clock clock = app.application().clock();

    clock.install();
    try {
      // A frame already in flight when the clock arrived still runs on the real timer.
      realDelay(120);
      ElementBox frozen = Dom.layout(circle);

      // Real time passes; the application's next frame is waiting on the clock, so nothing moves.
      realDelay(300);
      ElementBox stillFrozen = Dom.layout(circle);
      assertEquals("the animation is held still: " + frozen + " then " + stillFrozen,
          frozen.left(), stillFrozen.left(), 0.01);
      assertEquals(frozen.top(), stillFrozen.top(), 0.01);

      // Fake time moves, so the frames the application scheduled now run.
      clock.tick(500);
      ElementBox advanced = Dom.layout(circle);
      assertTrue("ticking the clock advanced the animation: " + frozen + " then " + advanced,
          Math.abs(advanced.left() - frozen.left()) > 0.5
              || Math.abs(advanced.top() - frozen.top()) > 0.5);
    } finally {
      clock.uninstall();
    }
  }

  @Test
  public void theTestPagesClockIsADifferentClock() {
    Clock applicationClock = app.application().clock();
    assertNotSame("each window has its own timers", Dom.clock(), applicationClock);

    applicationClock.install();
    try {
      assertTrue(applicationClock.isInstalled());
      assertFalse("installing one does not install the other", Dom.clock().isInstalled());
    } finally {
      applicationClock.uninstall();
    }
  }

  @Test
  public void awaitingStillWorksWhileTheApplicationsClockIsInstalled() {
    HTMLElement circle = laidOutShape(Dom.page());
    Clock clock = app.application().clock();

    clock.install();
    try {
      // The application's timers are frozen, but the test page keeps its own real ones, so the
      // retry loop behind Dom.waitFor still resumes rather than deadlocking.
      Dom.waitFor(() -> assertTrue("queries still resolve", Dom.layout(circle).width() > 0));

      assertFalse("the frame is untouched by the test page's clock", Dom.clock().isInstalled());
    } finally {
      clock.uninstall();
    }
  }

  @Test
  public void theTestPagesClockLeavesTheApplicationRunning() {
    HTMLElement circle = laidOutShape(Dom.page());

    Dom.clock().install();
    try {
      ElementBox before = Dom.layout(circle);

      // Only the test page is frozen, so the application animates on through real time — and
      // Dom.waitFor still resumes, because it kept hold of the real timer when the clock replaced
      // it. Thread.sleep would not: TeaVM schedules it through the very setTimeout now faked, so
      // it never wakes. Wait through the library, not through the language.
      Dom.waitFor(() -> {
        ElementBox now = Dom.layout(circle);
        assertTrue("the application kept its own timers: " + before + " then " + now,
            Math.abs(now.left() - before.left()) > 0.5
                || Math.abs(now.top() - before.top()) > 0.5);
      }, 5_000);
    } finally {
      Dom.clock().uninstall();
    }
  }
}
