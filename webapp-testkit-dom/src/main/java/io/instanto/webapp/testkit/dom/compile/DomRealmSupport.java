/*
 * Copyright 2026 Carl Stainton
 *
 * SPDX-License-Identifier: Apache-2.0
 */
package io.instanto.webapp.testkit.dom.compile;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;

/** Shared DOM realm check used by the JavaScript injector and the Wasm JSO bridge. */
public final class DomRealmSupport {
  static final String CHECK =
      "if (value == null) return !!nullable;if (value instanceof type) return true;var name ="
          + " type.name;if (typeof window === 'undefined' || window[name] !== type ||"
          + " !(/^(HTML.*Element|HTMLElement|HTMLDocument|Document|Element|Node|Text|Comment)$/.test(name)))"
          + " return false;var doc = value.nodeType === 9 ? value : value.ownerDocument;var view ="
          + " doc && doc.defaultView;return !!(view && typeof view[name] === 'function' && value"
          + " instanceof view[name]);";

  private DomRealmSupport() {}

  @JSBody(
      params = {"value", "type", "nullable"},
      script = CHECK)
  public static native boolean check(JSObject value, JSObject type, int nullable);
}
