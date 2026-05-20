import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('projects JSON includes Chronodex deploy metadata', () => {
  const projectsFile = readFileSync(
    new URL('../src/config/projects.json', import.meta.url),
    'utf8',
  );
  const projects = JSON.parse(projectsFile);

  assert.equal(projects.length, 1);
  assert.equal(projects[0].title, 'chronodex');
  assert.equal(
    projects[0].description,
    'A minimal radial time planner inspired by analog Chronodex diagrams and bullet journals.',
  );
  assert.equal(projects[0].githubUrl, 'https://github.com/CiceroLino/chronodex');
  assert.equal(projects[0].liveUrl, 'https://chronodex-planner.vercel.app/');
  assert.deepEqual(projects[0].topics, ['react', 'vercel-deployment', 'vitejs']);
});
