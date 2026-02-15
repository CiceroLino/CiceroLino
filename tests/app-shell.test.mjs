import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('app shell composes cinematic flow', () => {
  const appFile = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');

  assert.match(appFile, /CinematicLoader/);
  assert.match(appFile, /TechBuilderHero/);
  assert.match(appFile, /<main className="app-shell">/);
});
