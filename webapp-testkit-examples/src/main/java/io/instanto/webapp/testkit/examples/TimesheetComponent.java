/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.examples;

import java.util.Objects;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.html.HTMLInputElement;

/**
 * A small user interface written in Java and compiled to JavaScript by TeaVM.
 *
 * <p>It is an ordinary object: a test constructs it, hands it the service it reads from, and asks
 * it for its element. Nothing about it knows it is being tested.
 */
public final class TimesheetComponent {

  private final TimesheetService service;
  private final String month;
  private final HTMLElement root;
  private HTMLElement status;

  public TimesheetComponent(TimesheetService service, String month) {
    this.service = Objects.requireNonNull(service, "service");
    this.month = Objects.requireNonNull(month, "month");
    this.root = render();
  }

  /** The element to put on the page. */
  public HTMLElement element() {
    return root;
  }

  private HTMLElement render() {
    HTMLDocument document = HTMLDocument.current();
    HTMLElement section = document.createElement("section");

    HTMLElement heading = document.createElement("h2");
    heading.setTextContent(month + " timesheet");
    section.appendChild(heading);

    HTMLElement entries = document.createElement("ul");
    for (String entry : service.entriesFor(month)) {
      HTMLElement item = document.createElement("li");
      item.setTextContent(entry);
      entries.appendChild(item);
    }
    section.appendChild(entries);

    HTMLElement label = document.createElement("label");
    label.setAttribute("for", "new-entry");
    label.setTextContent("New entry");
    section.appendChild(label);

    HTMLInputElement entry = (HTMLInputElement) document.createElement("input");
    entry.setId("new-entry");
    section.appendChild(entry);

    HTMLElement add = document.createElement("button");
    add.setTextContent("Add");
    add.addEventListener("click", event -> {
      String text = entry.getValue().trim();
      if (!text.isEmpty()) {
        HTMLElement item = document.createElement("li");
        item.setTextContent(text);
        entries.appendChild(item);
        entry.setValue("");
      }
    });
    section.appendChild(add);

    status = document.createElement("output");
    status.setTextContent("Not submitted");
    section.appendChild(status);

    HTMLElement submit = document.createElement("button");
    submit.setTextContent("Submit");
    submit.addEventListener("click", event -> {
      service.submit(month);
      status.setTextContent("Submitted");
    });
    section.appendChild(submit);

    return section;
  }
}
