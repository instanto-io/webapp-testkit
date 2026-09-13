# Vendored Angular application

Build output of a minimal Angular 22 application, checked in rather than built here
because nothing in this repository runs npm. Angular is Copyright Google LLC under
the MIT licence; the application itself is part of this project.

```
index.html
main-*.js          the compiled application
styles-*.css
favicon.ico
```

**Nothing was edited after the build.** It was produced with:

```sh
ng build --base-href ./
```

That flag is the point of the example. Angular's default `index.html` carries
`<base href="/">`, which resolves every asset against the origin root and breaks the
moment the application is served from a subdirectory — which is exactly what staging
does, at `/resources/applications/angular/`. Building with `--base-href ./` is the
ordinary fix for any subdirectory deployment, and `ApplicationFiles` stages the
result unchanged.
