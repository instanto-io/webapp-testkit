/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package example;

/** The field-read reproducer compiled by the standard Maven compiler goal, without JUnit. */
public class RepeatedFieldReadApplication {
  public static void main(String[] args) {
    if (Holder.WARMUP != 1) throw new AssertionError("Holder not initialized");
    int result = read();
    if (result != 7) throw new AssertionError("Catch handler did not return 7");
  }

  private static void operation() {
    Integer.parseInt("invalid input");
  }

  private static int read() {
    try {
      operation();
      return Holder.VALUE;
    } catch (Exception failure) {
      return Holder.VALUE;
    }
  }

  static class Holder {
    static final int WARMUP = Integer.parseInt("1");
    static final int VALUE = Integer.parseInt("7");
  }
}
