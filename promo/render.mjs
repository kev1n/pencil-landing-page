// Screenshots each promo page to promo/out/<name>.png. Store images are
// exact size; the launch boards are laid out at 1600x900 and rendered at 2x.
//   node promo/render.mjs            all pages
//   node promo/render.mjs launch     only pages whose name starts with "launch"
// Needs Playwright. Set PLAYWRIGHT to its index.mjs if it isn't resolvable
// from here (default: /tmp/pl-shots/node_modules/playwright/index.mjs), and
// CHROMIUM to a browser binary if Playwright has none installed.
// Real UI pictures live in promo/assets/ (rendered from the extension's own
// components at 3x by the gallery harness; see README note in report).
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const { chromium } = await import(process.env.PLAYWRIGHT ?? '/tmp/pl-shots/node_modules/playwright/index.mjs');

const PAGES = [
  ['launch-3200x1800', 'launch.html', 1600, 900, 2],
  ['launch-1200x630', 'launch-og.html', 1200, 630],
  ['launch-alt-3200x1800', 'launch-alt.html', 1600, 900, 2],
  ['store-1-overview-1280x800', 'launch.html?store', 1280, 800],
  ['store-2-ctec-1280x800', 'store-2.html', 1280, 800],
  ['store-3-schedules-1280x800', 'store-3.html', 1280, 800],
  ['store-4-search-1280x800', 'store-4.html', 1280, 800],
  ['store-5-prereqs-1280x800', 'store-5.html', 1280, 800],
  ['promo-small-440x280', 'promo-small.html', 440, 280],
  ['promo-marquee-1400x560', 'promo-marquee.html', 1400, 560],
];

const only = process.argv.slice(2);
const out = join(here, 'out');
mkdirSync(out, { recursive: true });
const exe = process.env.CHROMIUM ?? join(process.env.HOME, 'Library/Caches/ms-playwright/chromium_headless_shell-1254/chrome-headless-shell-mac-arm64/chrome-headless-shell');
const browser = await chromium.launch({ executablePath: exe });
for (const [name, file, width, height, scale = 1] of PAGES) {
  if (only.length && !only.some((o) => name.startsWith(o))) continue;
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: scale });
  page.on('pageerror', (e) => console.log('PAGEERROR', name, e.message));
  page.on('requestfailed', (r) => console.log('MISSING', name, r.url()));
  await page.goto(pathToFileURL(join(here, file.split('?')[0])).href + (file.includes('?') ? '?' + file.split('?')[1] : ''), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  await page.screenshot({ path: join(out, name + '.png'), clip: { x: 0, y: 0, width, height } });
  await page.close();
  console.log('ok', name, `${width}x${height}`);
}
await browser.close();
