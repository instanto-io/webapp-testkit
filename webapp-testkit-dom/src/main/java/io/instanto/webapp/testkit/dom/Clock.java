/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.NavigableSet;
import java.util.Objects;
import java.util.TreeSet;
import org.teavm.jso.JSObject;

/**
 * A clock a test advances by hand.
 *
 * <p>While installed, work scheduled through {@code setTimeout}, {@code setInterval}, or {@code
 * requestAnimationFrame} waits until {@link #tick} reaches it. {@code Date} and {@code
 * System.currentTimeMillis} report its absolute time; {@code performance.now} and animation frame
 * timestamps report elapsed time.
 *
 * <pre>{@code
 * clock().install();
 * try {
 *     component.startPolling();
 *     clock().tick(1000);
 *     verify(feed, times(2)).refresh();
 * } finally {
 *     clock().uninstall();
 * }
 * }</pre>
 *
 * <p>Install the clock for one test and uninstall it in a {@code finally} block or an
 * {@code @After} method. Application timers wait for {@link #tick}; promises and test-library
 * continuations can still resume without advancing fake time.
 */
public final class Clock {

  private static final int MAXIMUM_CALLBACKS_PER_TICK = 100_000;

  private final NavigableSet<ScheduledCall> scheduled =
      new TreeSet<>(
          Comparator.comparingLong((ScheduledCall call) -> call.due)
              .thenComparingLong(call -> call.sequence));
  private final Map<Integer, ScheduledCall> handles = new HashMap<>();
  private long nextSequence;
  private long baseTime = 1_600_000_000_000L;
  private long elapsed;
  private int nextHandle = 1;
  private boolean installed;

  private final JSObject window;

  /** A clock over the window the test runs in. */
  Clock() {
    this(BrowserTimers.testWindow());
  }

  private Clock(JSObject window) {
    this.window = Objects.requireNonNull(window, "window");
  }

  /**
   * A clock over another same-origin window, such as a staged application's.
   *
   * <p>Each window has its own timers, so a clock installed in the test page does not affect an
   * application running in a frame, and the reverse. Timers the application scheduled before the
   * clock was installed keep running on the real ones; work scheduled afterwards waits for {@link
   * #tick}.
   */
  public static Clock forWindow(JSObject window) {
    return new Clock(window);
  }

  /**
   * Replaces the browser's timer and time functions until {@link #uninstall} is called.
   *
   * <p>Starts at a fixed instant rather than the real one.
   */
  public Clock install() {
    if (installed) {
      throw new IllegalStateException("The test clock is already installed");
    }
    scheduled.clear();
    handles.clear();
    elapsed = 0;
    BrowserTimers.install(window, this::schedule, this::cancel, this::now, () -> elapsed);
    installed = true;
    return this;
  }

  /** Restores the browser's own functions and discards anything still queued. */
  public void uninstall() {
    if (!installed) {
      return;
    }
    installed = false;
    scheduled.clear();
    handles.clear();
    BrowserTimers.uninstall(window);
  }

  public boolean isInstalled() {
    return installed;
  }

  /** Sets the instant the clock reports, without running anything that is due. */
  public Clock setTime(long epochMilliseconds) {
    baseTime = epochMilliseconds - elapsed;
    return this;
  }

  /** The instant this clock reports. */
  public long now() {
    return baseTime + elapsed;
  }

  /** How many callbacks are waiting. */
  public int pending() {
    return scheduled.size();
  }

  /**
   * Advances the clock, running everything that falls due along the way.
   *
   * <p>Callbacks run in due order and see the time they were scheduled for, including work a
   * callback schedules while running. The clock ends at exactly the requested instant.
   */
  public void tick(long milliseconds) {
    if (!installed) {
      throw new IllegalStateException("Install the clock before advancing it");
    }
    if (milliseconds < 0) {
      throw new IllegalArgumentException("Time does not run backwards: " + milliseconds);
    }

    long target = elapsed + milliseconds;
    for (int callbacks = 0; ; callbacks++) {
      if (callbacks > MAXIMUM_CALLBACKS_PER_TICK) {
        throw new IllegalStateException(
            "Stopped after "
                + MAXIMUM_CALLBACKS_PER_TICK
                + " callbacks in one tick, because"
                + " something is rescheduling itself faster than the clock advances");
      }
      ScheduledCall next = nextDueBy(target);
      if (next == null) {
        break;
      }

      elapsed = Math.max(elapsed, next.due);
      scheduled.remove(next);
      if (next.repeating) {
        next.due = elapsed + Math.max(next.delay, 1);
        scheduled.add(next);
      } else {
        handles.remove(next.handle);
      }
      BrowserTimers.run(next.callback);
    }
    elapsed = target;
  }

  private ScheduledCall nextDueBy(long target) {
    if (scheduled.isEmpty()) {
      return null;
    }
    ScheduledCall earliest = scheduled.first();
    return earliest.due <= target ? earliest : null;
  }

  private int schedule(JSObject callback, int delay, boolean repeating) {
    int handle = nextHandle++;
    ScheduledCall call =
        new ScheduledCall(
            handle, callback, elapsed + Math.max(delay, 0), delay, repeating, nextSequence++);
    scheduled.add(call);
    handles.put(handle, call);
    return handle;
  }

  private void cancel(int handle) {
    ScheduledCall call = handles.remove(handle);
    if (call != null) {
      scheduled.remove(call);
    }
  }

  private static final class ScheduledCall {

    private final int handle;
    private final JSObject callback;
    private final int delay;
    private final boolean repeating;
    private final long sequence;
    private long due;

    private ScheduledCall(
        int handle, JSObject callback, long due, int delay, boolean repeating, long sequence) {
      this.sequence = sequence;
      this.handle = handle;
      this.callback = callback;
      this.due = due;
      this.delay = delay;
      this.repeating = repeating;
    }
  }
}
