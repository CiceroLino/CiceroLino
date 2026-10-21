import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  const svg = await readFile(new URL('../public/social-card.svg', import.meta.url), 'utf8');
  await page.setContent(`<style>body{margin:0}</style>${svg}`);
  await page.screenshot({ path: new URL('../public/social-card.png', import.meta.url).pathname });
} finally {
  await browser.close();
}
