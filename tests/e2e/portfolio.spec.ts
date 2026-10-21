import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('identity, localized case studies and separate project actions', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cicero Lino');
  const chronodex = page
    .getByRole('article')
    .filter({ has: page.getByRole('heading', { name: 'Chronodex', exact: true }) });
  await expect(chronodex.getByRole('link', { name: /Ver aplicação/ })).toHaveAttribute(
    'href',
    'https://chronodex-planner.vercel.app/',
  );
  await expect(chronodex.getByRole('link', { name: /Ver código/ })).toHaveAttribute(
    'href',
    'https://github.com/CiceroLino/chronodex',
  );
  await expect(page.getByRole('region', { name: /Sobre/ })).toBeVisible();
  await expect(page.getByRole('region', { name: /Vamos conversar/ })).toBeVisible();
  const images = page.locator('.project-visual img');
  await expect(images).toHaveCount(2);
  await images.last().scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      images.evaluateAll(nodes => nodes.every(node => (node as HTMLImageElement).naturalWidth > 0)),
    )
    .toBe(true);
});

test('language preference updates the whole page and survives reload', async ({ page }) => {
  await page.goto('/');
  await page.locator('.lang-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.project-description').first()).toContainText('radial');
  await expect(page.getByRole('heading', { name: 'About', exact: true })).toBeVisible();
  await expect(page).toHaveTitle(/Software Engineer/);
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.locator('.lang-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('.project-description').first()).toContainText('radial');
  await expect(page.locator('.project-description').first()).not.toContainText('A minimal');
});

test('storage failure does not blank the page or prevent language changes', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new DOMException('Blocked', 'SecurityError');
    };
    Storage.prototype.setItem = () => {
      throw new DOMException('Full', 'QuotaExceededError');
    };
  });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cicero Lino');
  await page.locator('.lang-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  expect(errors).toEqual([]);
});

test('all keyboard targets are visible and links are not nested', async ({ page }) => {
  await page.goto('/');
  expect(await page.locator('a a').count()).toBe(0);
  const targets = await page.locator('a[href], button, summary').count();
  for (let index = 0; index < targets; index++) {
    await page.keyboard.press('Tab');
    const target = page.locator(':focus');
    await expect(target).toBeVisible();
    expect(
      await target.evaluate(element => {
        let opacity = 1;
        for (let parent: Element | null = element; parent; parent = parent.parentElement)
          opacity *= Number(getComputedStyle(parent).opacity);
        return opacity;
      }),
    ).toBeGreaterThan(0);
    expect(await target.evaluate(element => getComputedStyle(element).outlineStyle)).not.toBe(
      'none',
    );
  }
});

for (const width of [320, 390, 768, 1440]) {
  test(`content fits a ${width}px viewport in both languages`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    for (const language of ['pt', 'en']) {
      if (language === 'en') await page.locator('.lang-toggle').click();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        ),
      ).toBeLessThanOrEqual(1);
      for (const summary of await page.locator('summary').all()) {
        const details = summary.locator('..');
        if (!(await details.evaluate(element => (element as HTMLDetailsElement).open))) {
          await summary.click();
        }
      }
      expect(
        await page
          .locator('.project-content')
          .evaluateAll(elements =>
            elements.every(element => element.scrollWidth <= element.clientWidth + 1),
          ),
      ).toBe(true);
    }
  });
}

test('reduced motion disables decorative animations and pointer tilt', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const heading = await page.getByRole('heading', { level: 1 }).innerText();
  await page.waitForTimeout(150);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe(
    'auto',
  );
  const card = page.locator('.card-container');
  const bounds = await card.boundingBox();
  await page.mouse.move(bounds!.x + 8, bounds!.y + 8);
  await expect(page.locator('.card-body')).toHaveCSS('transform', 'none');
  expect(
    await page.evaluate(
      () =>
        document
          .getAnimations()
          .filter(
            animation =>
              animation.playState === 'running' &&
              animation.effect?.getTiming().iterations === Infinity,
          ).length,
    ),
  ).toBe(0);
});

test('skip link and case summaries can be activated by keyboard', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.locator('.lang-toggle').click();
  for (const summary of await page.locator('summary').all()) {
    await summary.focus();
    await page.keyboard.press('Enter');
    const details = summary.locator('..');
    await expect(details.locator('dt').first()).toHaveText('The problem');
    await expect(details.locator('dd').first()).toBeVisible();
    await page.keyboard.press('Enter');
    await expect(details.locator('dd').first()).toBeHidden();
  }
});

test('static metadata and sitemap describe the portfolio', async ({ page, request }) => {
  await page.goto('/');
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    'content',
    /^https:\/\/.+\.png$/,
  );
  await expect(page.locator('link[rel="icon"]')).not.toHaveAttribute('href', '/vite.svg');
  const response = await request.get('/sitemap.xml');
  expect(response.headers()['content-type']).toContain('xml');
  expect(await response.text()).toContain('https://cicero-lino.vercel.app/');
});

test('page has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter(item => ['serious', 'critical'].includes(item.impact ?? '')),
  ).toEqual([]);
});
