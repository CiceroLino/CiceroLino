import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('app shell renders hero directly without cinematic loader', () => {
  const appFile = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  const heroFile = readFileSync(
    new URL('../src/components/TechBuilderHero.tsx', import.meta.url),
    'utf8',
  );
  const projectsFile = readFileSync(
    new URL('../src/components/ProjectsSection.tsx', import.meta.url),
    'utf8',
  );

  assert.doesNotMatch(appFile, /CinematicLoader/);
  assert.match(appFile, /TechBuilderHero/);
  assert.match(appFile, /ProjectsSection/);
  assert.match(appFile, /<main className="app-shell">/);
  assert.match(heroFile, /hero-scroll-cue/);
  assert.doesNotMatch(projectsFile, /Para adicionar outro projeto/);
});
