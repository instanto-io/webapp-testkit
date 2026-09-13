/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import java.util.List;

/** The boundary a timesheet view reads from. */
public interface TimesheetService {

  List<String> entriesFor(String month);

  void submit(String month);
}
