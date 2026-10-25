package io.instanto.webapp.testkit.app;

import static org.junit.Assert.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

public class ApplicationFilesTest {
  @Rule public TemporaryFolder temporary = new TemporaryFolder();

  @Test
  public void refusesToReplaceAnAncestorOfTheSource() throws Exception {
    Path parent = temporary.newFolder("parent").toPath();
    Path app = Files.createDirectory(parent.resolve("app"));
    Path original = Files.writeString(app.resolve("keep.js"), "original");
    IOException failure =
        assertThrows(IOException.class, () -> ApplicationFiles.stage(app, parent));
    assertTrue(failure.getMessage().contains("must not contain"));
    assertEquals("original", Files.readString(original));
  }

  @Test
  public void refusesSymlinkDestinationsEvenWhenTheTargetWasStaged() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    Files.writeString(app.resolve("asset.js"), "keep");
    Path staged = temporary.getRoot().toPath().resolve("staged");
    ApplicationFiles.stage(app, staged);
    Path alias = temporary.getRoot().toPath().resolve("alias");
    Files.createSymbolicLink(alias, staged);
    assertThrows(IOException.class, () -> ApplicationFiles.stage(app, alias));
    assertTrue(Files.isSymbolicLink(alias));
    assertEquals("keep", Files.readString(staged.resolve("asset.js")));
  }

  @Test
  public void buildToolEntryPointValidatesArgumentsAndStagesHtmDocuments() throws Exception {
    assertThrows(IllegalArgumentException.class, () -> ApplicationFiles.main(new String[0]));
    Path app = temporary.newFolder("app").toPath();
    Files.writeString(app.resolve("index.htm"), "<html><head></head><body>Ready</body></html>");
    Path target = temporary.getRoot().toPath().resolve("staged");
    ApplicationFiles.main(new String[] {app.toString(), target.toString()});
    assertTrue(
        Files.readString(target.resolve("index.htm")).contains("data-webapp-testkit-diagnostics"));
    assertThrows(
        IOException.class, () -> ApplicationFiles.stage(target, app.resolveSibling("second")));
    assertTrue(Files.exists(target.resolve("index.htm")));
  }

  @Test
  public void refusesARegularFileAsTheSourceApplication() throws Exception {
    Path source = temporary.newFile("app.html").toPath();
    Path target = temporary.getRoot().toPath().resolve("staged");
    IOException failure =
        assertThrows(IOException.class, () -> ApplicationFiles.stage(source, target));
    assertTrue(failure.getMessage().contains("not a directory"));
    assertFalse(Files.exists(target));
  }

  @Test
  public void rejectsFilesystemRootAsDestination() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    IOException failure =
        assertThrows(
            IOException.class, () -> ApplicationFiles.stage(app, app.toAbsolutePath().getRoot()));
    assertTrue(failure.getMessage().contains("root"));
  }

  @Test
  public void preservesAssetTreeAndObservesErrorsBeforeApplicationStartup() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    Files.createDirectories(app.resolve("permutations"));
    String html =
        "<!doctype html><html><head><base href='./'><script src='permutations/app.js'></script></head><body></body></html>";
    Files.writeString(app.resolve("index.html"), html);
    byte[] asset = {0, 1, 2, (byte) 255};
    Files.write(app.resolve("permutations/app.js"), asset);
    Path target = temporary.getRoot().toPath().resolve("staged");
    ApplicationFiles.stage(app, target);
    String output = Files.readString(target.resolve("index.html"));
    assertTrue(output.indexOf("data-webapp-testkit-diagnostics") < output.indexOf("<base"));
    assertTrue(output.contains("src='permutations/app.js'"));
    assertArrayEquals(asset, Files.readAllBytes(target.resolve("permutations/app.js")));
    assertEquals(html, Files.readString(app.resolve("index.html")));
  }

  @Test
  public void doesNotOverwriteAnExistingDestination() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    Path target = temporary.newFolder("staged").toPath();
    Files.writeString(target.resolve("keep"), "existing");
    assertThrows(IOException.class, () -> ApplicationFiles.stage(app, target));
    assertEquals("existing", Files.readString(target.resolve("keep")));
  }

  @Test
  public void rejectsRecursiveCopiesAndMalformedDocuments() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    assertThrows(IOException.class, () -> ApplicationFiles.stage(app, app.resolve("copy")));
    Files.writeString(app.resolve("index.html"), "<body>No head</body>");
    Path target = temporary.getRoot().toPath().resolve("staged");
    assertThrows(IOException.class, () -> ApplicationFiles.stage(app, target));
    assertFalse(Files.exists(target));
  }

  @Test
  public void rejectsSymlinksWithoutCopyingExternalFiles() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    Path outside = temporary.newFile("outside").toPath();
    Files.createSymbolicLink(app.resolve("link"), outside);
    Path target = temporary.getRoot().toPath().resolve("staged");
    assertThrows(IOException.class, () -> ApplicationFiles.stage(app, target));
    assertTrue(Files.exists(outside));
    assertFalse(Files.exists(target));
  }

  @Test
  public void restagingRemovesStaleOutputs() throws Exception {
    Path app = temporary.newFolder("app").toPath();
    Files.writeString(app.resolve("old.js"), "old");
    Path target = temporary.getRoot().toPath().resolve("staged");
    ApplicationFiles.stage(app, target);
    Files.delete(app.resolve("old.js"));
    Files.writeString(app.resolve("new.js"), "new");
    ApplicationFiles.stage(app, target);
    assertFalse(Files.exists(target.resolve("old.js")));
    assertEquals("new", Files.readString(target.resolve("new.js")));
  }
}
