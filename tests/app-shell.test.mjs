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
  const cssFile = readFileSync(new URL('../src/index.css', import.meta.url), 'utf8');
  const heroWrapperRule = cssFile.match(/\.hero-wrapper\s*\{[^}]*\}/)?.[0] ?? '';

  assert.doesNotMatch(appFile, /CinematicLoader/);
  assert.match(appFile, /TechBuilderHero/);
  assert.match(appFile, /ProjectsSection/);
  assert.match(appFile, /<main className="app-shell">/);
  assert.match(heroFile, /hero-scroll-cue/);
  assert.match(cssFile, /\.lamp-container\s*\{[\s\S]*position:\s*relative/);
  assert.doesNotMatch(heroWrapperRule, /position:\s*relative/);
  assert.match(cssFile, /\.hero-scroll-cue\s*\{[\s\S]*position:\s*absolute/);
  assert.match(cssFile, /\.hero-scroll-cue\s*\{[\s\S]*left:\s*50%/);
  assert.match(cssFile, /\.hero-scroll-cue\s*\{[\s\S]*bottom:\s*24px/);
  assert.match(cssFile, /scroll-behavior:\s*smooth/);
  assert.match(projectsFile, /PinContainer/);
  assert.match(projectsFile, /href=\{project\.liveUrl \?\? project\.githubUrl\}/);
  assert.match(projectsFile, /title=\{project\.liveUrl \?\? project\.githubUrl\}/);
  assert.doesNotMatch(projectsFile, /project-pin-link/);
  assert.doesNotMatch(projectsFile, /Para adicionar outro projeto/);
  assert.match(cssFile, /\.project-pin-surface/);
  assert.match(cssFile, /backdrop-filter:\s*blur\(10px\)/);
});
