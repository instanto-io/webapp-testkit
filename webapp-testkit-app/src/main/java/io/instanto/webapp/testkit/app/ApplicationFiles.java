package io.instanto.webapp.testkit.app;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/** Stages a built application under the test classpath for TeaVMTestRunner's resource server. */
public final class ApplicationFiles {
  private static final Pattern HEAD = Pattern.compile("(?is)<head(?:\\s[^>]*)?>");
  private static final String MARKER = "data-webapp-testkit-diagnostics";
  private static final String STAGED = ".webapp-testkit-staged-app";
  private static final String DIAGNOSTICS =
      """
      <script data-webapp-testkit-diagnostics>
      (function () {
        if (window.__webappTestkitDiagnostics) return;
        var state = window.__webappTestkitDiagnostics = { errors: [] };
        window.addEventListener('error', function (event) {
          if (event.target && event.target !== window) {
            state.errors.push('Resource failed: ' + (event.target.src || event.target.href || event.target.tagName));
          } else {
            state.errors.push(String(event.message) + ' at ' + event.filename + ':' + event.lineno);
          }
        }, true);
        window.addEventListener('unhandledrejection', function (event) {
          state.errors.push('Unhandled rejection: ' + String(event.reason));
        });
      })();
      </script>
      """;

  private ApplicationFiles() {}

  /**
   * Copies a complete UTF-8 application tree and adds error observation before its scripts run.
   * Replaces only destinations previously created by this tool. The source is never modified.
   */
  public static void stage(Path source, Path destination) throws IOException {
    Path root = source.toRealPath();
    if (!Files.isDirectory(root)) throw new IOException("Application is not a directory: " + root);
    final Path outputRoot = validateAndPrepareDestination(root, destination);
    try {
      Files.walkFileTree(
          root,
          new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult preVisitDirectory(Path directory, BasicFileAttributes attributes)
                throws IOException {
              Files.createDirectories(outputRoot.resolve(root.relativize(directory)));
              return FileVisitResult.CONTINUE;
            }

            @Override
            public FileVisitResult visitFile(Path file, BasicFileAttributes attributes)
                throws IOException {
              if (attributes.isSymbolicLink())
                throw new IOException("Application contains a symbolic link: " + file);
              Path output = outputRoot.resolve(root.relativize(file));
              if (file.toString().endsWith(".html") || file.toString().endsWith(".htm")) {
                Files.writeString(
                    output,
                    instrument(Files.readString(file, StandardCharsets.UTF_8)),
                    StandardCharsets.UTF_8);
              } else {
                Files.copy(file, output, StandardCopyOption.COPY_ATTRIBUTES);
              }
              return FileVisitResult.CONTINUE;
            }
          });
      Files.writeString(outputRoot.resolve(STAGED), "Staged browser application\n");
    } catch (IOException failure) {
      try {
        deleteTree(outputRoot);
      } catch (IOException cleanup) {
        failure.addSuppressed(cleanup);
      }
      throw failure;
    }
  }

  private static void deleteTree(Path root) throws IOException {
    if (!Files.exists(root)) return;
    Files.walkFileTree(
        root,
        new SimpleFileVisitor<Path>() {
          @Override
          public FileVisitResult visitFile(Path file, BasicFileAttributes attributes)
              throws IOException {
            Files.delete(file);
            return FileVisitResult.CONTINUE;
          }

          @Override
          public FileVisitResult postVisitDirectory(Path directory, IOException failure)
              throws IOException {
            if (failure != null) throw failure;
            Files.delete(directory);
            return FileVisitResult.CONTINUE;
          }
        });
  }

  static String instrument(String html) throws IOException {
    if (html.contains(MARKER)) throw new IOException("Application has already been instrumented");
    Matcher head = HEAD.matcher(html);
    if (!head.find()) throw new IOException("Application HTML requires an explicit head element");
    return html.substring(0, head.end()) + "\n" + DIAGNOSTICS + html.substring(head.end());
  }

  /** Build-tool entry point: source directory followed by a new test-classpath directory. */
  public static void main(String[] args) throws IOException {
    if (args.length != 2)
      throw new IllegalArgumentException(
          "Usage: ApplicationFiles <built-app> <test-classpath-app>");
    stage(Path.of(args[0]), Path.of(args[1]));
  }

  private static Path validateAndPrepareDestination(Path root, Path destination)
      throws IOException {
    Path target = destination.toAbsolutePath().normalize();
    Path parent = target.getParent();
    if (parent == null) throw new IOException("Destination must not be a filesystem root");
    Files.createDirectories(parent);
    target = parent.toRealPath().resolve(target.getFileName());
    if (target.startsWith(root)) {
      throw new IOException("Destination must be outside the source application");
    }
    if (root.startsWith(target)) {
      throw new IOException("Destination must not contain the source application");
    }
    if (Files.exists(target)) {
      if (Files.isSymbolicLink(target) || !Files.isRegularFile(target.resolve(STAGED))) {
        throw new IOException("Application destination already exists: " + target);
      }
      deleteTree(target);
    }
    return target;
  }
}
