/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom;

import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.junit.SkipJVM;
import org.teavm.junit.TeaVMTestRunner;

/** A press has to carry a code and a key code, not just a name. */
@RunWith(TeaVMTestRunner.class)
@SkipJVM
public class KeysTeaVmTest {

  @Rule public DomRule dom = new DomRule();

  private HTMLElement recordingField() {
    Dom.render("<input id='field'><output id='seen'></output>");
    Browser.recordKeyDetail(Dom.find("#field"), Dom.find("#seen"));
    return Dom.find("#field");
  }

  @Test
  public void aConstantCarriesTheCodeAndTheLegacyKeyCode() {
    HTMLElement field = recordingField();

    Dom.press(field, Keys.ENTER);

    assertEquals("Enter|Enter|13", Dom.find("#seen").getTextContent());
  }

  @Test
  public void aPrintableCharacterDerivesItsPosition() {
    HTMLElement field = recordingField();

    Dom.press(field, "a");

    assertEquals("a|KeyA|65", Dom.find("#seen").getTextContent());
  }

  @Test
  public void aNameTheTableDoesNotKnowIsRejected() {
    HTMLElement field = recordingField();

    // "Return" is not a DOM key name; it would have been sent with no code at all.
    IllegalArgumentException failure =
        assertThrows(IllegalArgumentException.class, () -> Dom.press(field, "Return"));

    assertTrue(failure.getMessage(), failure.getMessage().contains("Unknown key \"Return\""));
    assertTrue("points at the constants: " + failure.getMessage(),
        failure.getMessage().contains("Keys"));
  }

  @Test
  public void theWrongCaseIsRejectedRatherThanSentInert() {
    HTMLElement field = recordingField();

    assertThrows(IllegalArgumentException.class, () -> Dom.press(field, "enter"));
    assertThrows(IllegalArgumentException.class, () -> Dom.press(field, "ESC"));
  }

  @Test
  public void valuesTheDomItselfProducesAreNotMistakes() {
    HTMLElement field = recordingField();

    // One code point, two Java chars; and the value the DOM reports for a key it cannot name.
    Dom.press(field, "\uD83D\uDE00");
    Dom.press(field, "Unidentified");

    assertEquals("Unidentified||0", Dom.find("#seen").getTextContent());
  }
}
