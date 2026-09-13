/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.app;

import io.instanto.webapp.testkit.dom.Dom;
import io.instanto.webapp.testkit.dom.DomScope;
import java.util.Objects;
import java.util.function.Predicate;
import org.junit.rules.TestRule;
import org.junit.runner.Description;
import org.junit.runners.model.Statement;

/**
 * Runs each test against an application staged by {@link ApplicationFiles}, so the application
 * is what the plain {@link Dom} queries see.
 *
 * <pre>{@code
 * @Rule
 * public ApplicationRule app = new ApplicationRule("/resources/applications/my-app/index.html");
 *
 * @Test
 * public void savesTheForm() {
 *   Dom.type(Dom.findByLabelText("Name"), "Ada");
 *   Dom.click(Dom.findByRole("button", "Save"));
 * }
 * }</pre>
 *
 * <p>The application is hosted in a same-origin frame so that it bootstraps normally and can be
 * torn down between tests, but tests never handle the frame. Use {@link #application()} for the
 * cases that do, such as comparing two instances of the same application.
 *
 * <p>TeaVM tests need the reusable {@code teavm-rule-support} module for rules to run at all.
 */
public final class ApplicationRule implements TestRule {

  /** The default readiness marker, set by an application once its own startup has finished. */
  public static final String READY_ATTRIBUTE = "data-ready";

  private final String url;
  private Predicate<DomScope> ready = ApplicationRule::readyAttributeIsTrue;
  private int timeoutMilliseconds = 10_000;
  private int width = 1024;
  private int height = 768;
  private FramedApplication application;

  public ApplicationRule(String url) {
    this.url = Objects.requireNonNull(url, "url");
  }

  /** Waits for this condition instead of the {@value #READY_ATTRIBUTE} attribute. */
  public ApplicationRule readyWhen(Predicate<DomScope> condition) {
    this.ready = Objects.requireNonNull(condition, "condition");
    return this;
  }

  public ApplicationRule readyWithin(int milliseconds) {
    if (milliseconds <= 0) throw new IllegalArgumentException("Timeout must be positive");
    this.timeoutMilliseconds = milliseconds;
    return this;
  }

  /** Sizes the viewport the application renders into, for layout and visibility assertions. */
  public ApplicationRule sized(int width, int height) {
    this.width = width;
    this.height = height;
    return this;
  }

  /** The running application, for tests that need more than the current scope. */
  public FramedApplication application() {
    if (application == null) {
      throw new IllegalStateException("The application is only open while a test is running");
    }
    return application;
  }

  @Override
  public Statement apply(Statement base, Description description) {
    return new Statement() {
      @Override
      public void evaluate() throws Throwable {
        application =
            FramedApplication.open(url, width, height).awaitReady(ready, timeoutMilliseconds);
        Throwable failure = null;
        try {
          Dom.use(application.page().root());
          base.evaluate();
        } catch (Throwable testFailure) {
          failure = testFailure;
        } finally {
          FramedApplication opened = application;
          application = null;
          // Close before resetting, because the container Dom clears is the frame's host.
          // Startup errors matter too, but never at the cost of hiding why the test failed.
          try {
            opened.close();
          } catch (RuntimeException | Error applicationFailure) {
            // addSuppressed is unreliable for natively raised throwables, so the first wins.
            if (failure == null) {
              failure = applicationFailure;
            }
          }
          Dom.reset();
        }
        if (failure != null) throw failure;
      }
    };
  }

  private static boolean readyAttributeIsTrue(DomScope scope) {
    return "true".equals(scope.root().getAttribute(READY_ATTRIBUTE));
  }
}
