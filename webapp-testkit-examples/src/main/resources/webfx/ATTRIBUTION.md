# Vendored WebFX application

This directory holds the **unmodified build output** of the WebFX "Colorful Circles"
demo, served from <https://colorfulcircles.webfx.dev> and built 2025-10-27.

WebFX is Copyright the WebFX project, licensed under the Apache License 2.0:
<https://github.com/webfx-project/webfx>.

It is checked in rather than built here on purpose. The webapp testkit exists to test
an application **someone else built**, so the demo is more honest with a real artifact
produced by a toolchain this repository does not run. Nothing in the Mockatcha build
compiles JavaFX, GWT or J2CL.

Four files, as deployed:

```
index.html
webfx_demo_colorfulcircles_application_gwt.nocache.js
60B3075416407D7DB0C2BD094D2FDDBC.cache.js
dev/webfx/kit/css/main.css
```

`ApplicationFiles` stages the tree unchanged and injects only its diagnostics script,
so the GWT bootstrap resolves its relative paths exactly as it does in production.
