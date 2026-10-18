package io.instanto.webapp.testkit.dom.compile;

import org.teavm.backend.javascript.TeaVMJavaScriptHost;
import org.teavm.backend.javascript.spi.Injector;
import org.teavm.backend.javascript.spi.InjectorContext;
import org.teavm.backend.wasm.TeaVMWasmGCHost;
import org.teavm.interop.Import;
import org.teavm.model.ElementModifier;
import org.teavm.model.MethodDescriptor;
import org.teavm.model.MethodReference;
import org.teavm.model.ValueType;
import org.teavm.model.emit.ProgramEmitter;
import org.teavm.vm.spi.TeaVMHost;
import org.teavm.vm.spi.TeaVMPlugin;

/** Preserves checked JSO casts while accepting DOM nodes from their own window. */
public final class DomRealmPlugin implements TeaVMPlugin {
  @Override
  public void install(TeaVMHost host) {
    ValueType object = ValueType.object("org.teavm.jso.JSObject");
    installJavaScript(host, object);
    installWasm(host, object);
  }

  private void installJavaScript(TeaVMHost host, ValueType object) {
    TeaVMJavaScriptHost javascript = host.getExtension(TeaVMJavaScriptHost.class);
    if (javascript == null) {
      return;
    }
    for (String name : new String[] {"instanceOf", "instanceOfOrNull"}) {
      javascript.add(
          new MethodReference("org.teavm.jso.impl.JS", name, object, object, ValueType.BOOLEAN),
          new DomInstanceOf(name.endsWith("OrNull")));
    }
  }

  private void installWasm(TeaVMHost host, ValueType object) {
    if (host.getExtension(TeaVMWasmGCHost.class) == null) {
      return;
    }
    // Wasm imports its JSO checks; JavaScript injectors cannot change those imports.
    host.add(
        (cls, context) -> {
          if (!cls.getName().equals("org.teavm.jso.impl.JS")) return;
          for (String name : new String[] {"instanceOf", "instanceOfOrNull"}) {
            var method =
                cls.getMethod(new MethodDescriptor(name, object, object, ValueType.BOOLEAN));
            if (method == null || !method.getModifiers().contains(ElementModifier.NATIVE)) {
              throw new IllegalStateException("Unsupported TeaVM DOM cast implementation: " + name);
            }
            method.getModifiers().remove(ElementModifier.NATIVE);
            method.getAnnotations().remove(Import.class.getName());
            var emitter = ProgramEmitter.create(method, context.getHierarchy());
            emitter
                .invoke(
                    DomRealmSupport.class,
                    "check",
                    boolean.class,
                    emitter.var(1, object),
                    emitter.var(2, object),
                    emitter.constant(name.endsWith("OrNull") ? 1 : 0))
                .returnValue();
          }
        });
  }

  private record DomInstanceOf(boolean nullable) implements Injector {
    @Override
    public void generate(InjectorContext context, MethodReference method) {
      var writer = context.getWriter();
      writer.append("(function(value, type) {");
      writer.append("var nullable = " + nullable + ";");
      writer.append(DomRealmSupport.CHECK);
      writer.append("})(");
      context.writeExpr(context.getArgument(0));
      writer.append(",");
      context.writeExpr(context.getArgument(1));
      writer.append(")");
    }
  }
}
