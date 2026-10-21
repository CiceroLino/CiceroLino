import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.clock.install({ time: new Date('2026-10-21T12:00:00Z') });
  await page.clock.pauseAt(new Date('2026-10-21T12:00:01Z'));
});

test('hero types progressively while reserving space for the complete phrase', async ({ page }) => {
  await page.goto('/');
  const typing = page.locator('.typewriter');
  const visible = typing.locator('.typewriter-visual');
  await expect(typing).toHaveAttribute('data-typing', 'true');
  await expect(visible).toHaveText('');
  await expect(typing.locator('.sr-only')).toHaveText('Da ideia ao software.');
  const subtitleBefore = await page.locator('.hero-subtitle').boundingBox();

  await page.clock.runFor(110);
  await expect(visible).toHaveText('Da');
  await page.clock.runFor(2000);
  await expect(visible).toHaveText('Da ideia ao software.');
  await expect(typing).toHaveAttribute('data-typing', 'false');
  const subtitleAfter = await page.locator('.hero-subtitle').boundingBox();
  expect(subtitleAfter!.y).toBeCloseTo(subtitleBefore!.y, 1);
});

test('language changes restart typing and cancel the previous animation', async ({ page }) => {
  await page.goto('/');
  await page.clock.runFor(110);
  await page.locator('.lang-toggle').click();
  await expect(page.locator('.typewriter-visual')).toHaveText('');
  await page.clock.runFor(55);
  await expect(page.locator('.typewriter-visual')).toHaveText('F');
  await page.locator('.lang-toggle').click();
  await page.locator('.lang-toggle').click();
  await page.clock.runFor(2000);
  await expect(page.locator('.typewriter-visual')).toHaveText('From idea to software.');
  await expect(page.locator('.typewriter .sr-only')).toHaveText('From idea to software.');
  await expect(page.locator('.typewriter')).toHaveAttribute('data-typing', 'false');
});

test('reduced motion shows the complete phrase immediately, including preference changes', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('.typewriter-visual')).toHaveText('Da ideia ao software.');
  await expect(page.locator('.typewriter')).toHaveAttribute('data-typing', 'false');
  await expect(page.locator('.typewriter-cursor')).toHaveCSS('display', 'none');

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('.typewriter')).toHaveAttribute('data-typing', 'true');
  await page.clock.runFor(110);
  await expect(page.locator('.typewriter-visual')).toHaveText('Da');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.typewriter-visual')).toHaveText('Da ideia ao software.');
  await expect(page.locator('.typewriter')).toHaveAttribute('data-typing', 'false');
  await expect(page.locator('.typewriter-cursor')).toHaveCSS('display', 'none');
});
