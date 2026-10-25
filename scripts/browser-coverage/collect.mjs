import { chromium } from 'playwright';
import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { mergeCoverage, coverageXml } from './coverage.mjs';

const repo = fileURLToPath(new URL('../../', import.meta.url));
const root = path.resolve(repo);

async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await files(file));
    else result.push(file);
  }
  return result;
}

async function ownedSources() {
  const sources = new Map();
  for (const module of await readdir(repo, { withFileTypes: true })) {
    if (!module.isDirectory()) continue;
    const sourceRoot = path.join(repo, module.name, 'src/main/java');
    try {
      for (const file of await files(sourceRoot)) {
        if (!file.endsWith('.java')) continue;
        const source = path.relative(sourceRoot, file);
        if (sources.has(source)) throw new Error(`Ambiguous Java source: ${source}`);
        // Absolute paths also resolve when Maven runs the import sensor per module.
        sources.set(source, file);
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return sources;
}

let resources;
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const base = pathname.startsWith('/resources/') ? resources : root;
    const relative = pathname.startsWith('/resources/') ? pathname.slice('/resources'.length) : pathname;
    const file = path.resolve(base, '.' + relative);
    if (!file.startsWith(base + path.sep)) {
      response.writeHead(403).end();
      return;
    }
    const types = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
      '.svg': 'image/svg+xml', '.json': 'application/json', '.wasm': 'application/wasm' };
    response.setHeader('Content-Type', types[path.extname(file)] ?? 'application/octet-stream');
    response.end(await readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});

async function collectTest(browser, file, origin, hits, sources) {
  const module = path.relative(repo, file).split(path.sep)[0];
  resources = path.join(repo, module, 'target/test-classes');
  const page = await browser.newPage();
  page.on('pageerror', error => console.error(path.relative(repo, file) + ': ' + error.message));
  try {
    await page.coverage.startJSCoverage({ resetOnNavigation: false });
    await page.goto(origin + '/' + path.relative(root, file));
    await page.locator('pre').waitFor({ state: 'attached', timeout: 30000 });
    const result = await page.locator('pre').innerText();
    if (result !== 'OK') throw new Error(`${file}\n${result}`);
    for (const entry of await page.coverage.stopJSCoverage()) {
      if (!entry.url.endsWith('/classTest.js')) continue;
      const script = path.join(root, new URL(entry.url).pathname);
      const sourceMap = JSON.parse(await readFile(script + '.map', 'utf8'));
      mergeCoverage(hits, entry, sourceMap, sources);
    }
  } catch (error) {
    throw new Error('Coverage test failed: ' + path.relative(repo, file), { cause: error });
  } finally {
    await page.close();
  }
}

const sources = await ownedSources();
const tests = [];
for (const module of await readdir(repo, { withFileTypes: true })) {
  if (!module.isDirectory()) continue;
  try {
    const generated = path.join(repo, module.name, 'target/js-tests/js');
    tests.push(...(await files(generated)).filter(file => file.endsWith('/test.html')));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}
tests.sort();
if (tests.length === 0) throw new Error('Compile and run the TeaVM JUnit suite before collecting coverage');
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await chromium.launch({ headless: true });
  const origin = 'http://127.0.0.1:' + server.address().port;
  const hits = new Map();
  for (const file of tests) {
    await collectTest(browser, file, origin, hits, sources);
    console.log('Covered ' + path.relative(root, file));
  }
  if (hits.size === 0) throw new Error('No owned Java source locations were mapped from browser coverage');
  await mkdir(path.join(repo, 'target'), { recursive: true });
  await writeFile(path.join(repo, 'target/browser-coverage.xml'), coverageXml(hits));
  console.log(`Collected ${tests.length} passing browser tests across ${hits.size} Java source files`);
} finally {
  await browser?.close();
  server.close();
}
