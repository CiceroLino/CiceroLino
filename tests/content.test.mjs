import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { CONTENT, EXTERNAL_LINKS } from '../src/config/content.ts';

const shape = value =>
  Array.isArray(value)
    ? value.map(shape)
    : value && typeof value === 'object'
      ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, shape(item)]))
      : typeof value;

test('Portuguese and English provide the same complete content structure', () => {
  assert.deepEqual(shape(CONTENT.pt), shape(CONTENT.en));
  const verify = value => {
    if (typeof value === 'string') assert.ok(value.trim().length > 0);
    else for (const item of Object.values(value)) verify(item);
  };
  verify(CONTENT);
});

test('project entries have unique identities, localized case studies and real local assets', () => {
  const projects = JSON.parse(
    readFileSync(new URL('../src/config/projects.json', import.meta.url)),
  );
  assert.ok(projects.length > 0);
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  for (const project of projects) {
    assert.equal(new URL(project.githubUrl).hostname, 'github.com');
    if (project.liveUrl) assert.equal(new URL(project.liveUrl).protocol, 'https:');
    assert.match(project.image, /^\/images\/[a-z0-9-]+\.webp$/);
    assert.ok(existsSync(new URL(`../public${project.image}`, import.meta.url)));
    assert.ok(project.imageWidth > 0 && project.imageHeight > 0);
    assert.ok(project.topics.length > 0);
    for (const language of ['pt', 'en']) {
      for (const field of [
        'category',
        'description',
        'imageAlt',
        'problem',
        'implementation',
        'result',
      ])
        assert.ok(project[language][field]?.trim());
    }
    assert.notEqual(project.pt.description, project.en.description);
  }
});

test('contact destinations use the established public profiles', () => {
  assert.equal(new URL(EXTERNAL_LINKS.github).hostname, 'github.com');
  assert.equal(new URL(EXTERNAL_LINKS.contact).hostname, 'www.linkedin.com');
});
