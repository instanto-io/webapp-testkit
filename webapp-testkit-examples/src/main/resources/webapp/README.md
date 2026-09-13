# Plain JavaScript sample application

This small single-page application uses HTML, CSS, and JavaScript without
TeaVM. Mockatcha stages it on TeaVM's test resource server, opens it in a
same-origin frame, and tests it from Java with Mockatcha DOM.

The application includes a text field, select control, toggle button,
asynchronous readiness signal, and responsive style. Together they exercise
DOM queries, cross-window events, focus, application state, and viewport-based
CSS.

The tests live beside it in this module, which stages this application just as a
downstream project stages the one it has built.
[`ApplicationRuleExampleTeaVmTest`](../../../test/java/io/instanto/webapp/testkit/examples/ApplicationRuleExampleTeaVmTest.java)
shows the ordinary case, where the test handles no frame at all, and
[`FramedApplicationIntegrationTest`](../../../test/java/io/instanto/webapp/testkit/examples/FramedApplicationIntegrationTest.java)
covers the explicit API, including two instances running at once.
