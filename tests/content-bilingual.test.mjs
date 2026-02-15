import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('content includes pt and en dictionaries', () => {
  const contentFile = readFileSync(new URL('../src/config/content.ts', import.meta.url), 'utf8');

  assert.match(contentFile, /pt:\s*\{/);
  assert.match(contentFile, /en:\s*\{/);
  assert.match(contentFile, /loaderSteps/);
  assert.match(contentFile, /ctaCode/);
  assert.match(contentFile, /ctaContact/);
});
