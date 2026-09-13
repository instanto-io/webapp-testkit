# Vendored teavm-react application

This is the build output of the `teavm-react-demo` "kitchen sink" application from
[teavm-react](https://github.com/webliteca/teavm-react), by Weblite, under the MIT
licence. It is a React application whose components are written in Java and compiled
to JavaScript by TeaVM.

Two files are checked in as built:

```
index.html
js/classes.js
```

**One change was made to `index.html`.** The demo loads React from unpkg:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
```

A staged test application must not depend on a CDN, so those two tags now reference
`react.development.js` and `react-dom.development.js` beside the page. Those files are
not checked in: the build unpacks them from the `org.webjars.npm` React 18.3.1
artifacts, which is where `teavm-react-testkit` takes its own copies from. Nothing else
in the page or the compiled application is altered.

This is a fair thing for a downstream project to do, and is the reason the example
exists: an application built somewhere else usually needs its deployment adjusted for
the host serving it, and `ApplicationFiles` stages whatever tree it is given.
