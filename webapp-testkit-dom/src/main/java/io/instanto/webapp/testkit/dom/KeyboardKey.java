package io.instanto.webapp.testkit.dom;

/** Key-only helpers use the standard US position for printable ASCII keys. */
record KeyboardKey(String key, String code, int legacyCode) {
  private static final String ESCAPE = "Escape";
  private static final String ARROW_LEFT = "ArrowLeft";
  private static final String ARROW_UP = "ArrowUp";
  private static final String ARROW_RIGHT = "ArrowRight";
  private static final String ARROW_DOWN = "ArrowDown";
  private static final String DELETE = "Delete";

  static KeyboardKey of(String key) {
    return switch (key) {
      case "Esc", ESCAPE -> new KeyboardKey(ESCAPE, ESCAPE, 27);
      case "Left", ARROW_LEFT -> new KeyboardKey(ARROW_LEFT, ARROW_LEFT, 37);
      case "Up", ARROW_UP -> new KeyboardKey(ARROW_UP, ARROW_UP, 38);
      case "Right", ARROW_RIGHT -> new KeyboardKey(ARROW_RIGHT, ARROW_RIGHT, 39);
      case "Down", ARROW_DOWN -> new KeyboardKey(ARROW_DOWN, ARROW_DOWN, 40);
      case "Spacebar", "Space", " " -> new KeyboardKey(" ", "Space", 32);
      case "Enter" -> new KeyboardKey(key, key, 13);
      case "Tab" -> new KeyboardKey(key, key, 9);
      case "Backspace" -> new KeyboardKey(key, key, 8);
      case DELETE, "Del" -> new KeyboardKey(DELETE, DELETE, 46);
      case "Insert" -> new KeyboardKey(key, key, 45);
      case "Home" -> new KeyboardKey(key, key, 36);
      case "End" -> new KeyboardKey(key, key, 35);
      case "PageUp" -> new KeyboardKey(key, key, 33);
      case "PageDown" -> new KeyboardKey(key, key, 34);
      default -> printableOrFunction(key);
    };
  }

  private static KeyboardKey printableOrFunction(String key) {
    if (key.length() == 1) {
      KeyboardKey single = singleCharKey(key, key.charAt(0));
      if (single != null) {
        return single;
      }
    }
    if (key.matches("F([1-9]|1\\d|2[0-4])")) {
      return new KeyboardKey(key, key, 111 + Integer.parseInt(key.substring(1)));
    }
    // One code point, not one char: an emoji is a surrogate pair. "Unidentified" is what the
    // DOM itself reports for a key it cannot name, so it is a value, not a mistake.
    if (key.equals("Unidentified") || key.codePointCount(0, key.length()) == 1) {
      return new KeyboardKey(key, "", 0);
    }
    throw new IllegalArgumentException(
        "Unknown key \""
            + key
            + "\". Use a constant from Keys, "
            + "a single character, or a function key such as \"F5\". A name that is not recognised "
            + "would be sent with no code and a zero key code, which some handlers ignore.");
  }

  private static KeyboardKey singleCharKey(String key, char c) {
    if (c >= 'a' && c <= 'z') return new KeyboardKey(key, "Key" + (char) (c - 32), c - 32);
    if (c >= 'A' && c <= 'Z') return new KeyboardKey(key, "Key" + c, c);
    if (c >= '0' && c <= '9') return new KeyboardKey(key, "Digit" + c, c);
    String plain = "-=[]\\;',./`";
    String shifted = "_+{}|:\"<>?~";
    String[] codes = {
      "Minus",
      "Equal",
      "BracketLeft",
      "BracketRight",
      "Backslash",
      "Semicolon",
      "Quote",
      "Comma",
      "Period",
      "Slash",
      "Backquote"
    };
    int[] numbers = {189, 187, 219, 221, 220, 186, 222, 188, 190, 191, 192};
    int index = plain.indexOf(c);
    if (index < 0) index = shifted.indexOf(c);
    if (index >= 0) return new KeyboardKey(key, codes[index], numbers[index]);
    index = ")!@#$%^&*(".indexOf(c);
    if (index >= 0) return new KeyboardKey(key, "Digit" + index, 48 + index);
    return null;
  }
}
