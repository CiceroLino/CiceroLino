import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('app shell renders hero directly without cinematic loader', () => {
  const appFile = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');

  assert.doesNotMatch(appFile, /CinematicLoader/);
  assert.match(appFile, /TechBuilderHero/);
  assert.match(appFile, /<main className="app-shell">/);
});
