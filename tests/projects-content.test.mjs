import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';

test('projects JSON includes Chronodex deploy metadata', () => {
  const projectsFile = readFileSync(
    new URL('../src/config/projects.json', import.meta.url),
    'utf8',
  );
  const projects = JSON.parse(projectsFile);
  const chronodex = projects.find(project => project.title === 'chronodex');
  const lifeRpg = projects.find(project => project.title === 'LifeRPG');

  assert.equal(projects.length, 2);
  assert.equal(
    chronodex.description,
    'A minimal radial time planner inspired by analog Chronodex diagrams and bullet journals.',
  );
  assert.equal(chronodex.githubUrl, 'https://github.com/CiceroLino/chronodex');
  assert.equal(chronodex.liveUrl, 'https://chronodex-planner.vercel.app/');
  assert.deepEqual(chronodex.topics, ['react', 'vercel-deployment', 'vitejs']);
  assert.equal(lifeRpg.description, 'LifeRPG but more like game menu but in real life!');
  assert.equal(lifeRpg.githubUrl, 'https://github.com/CiceroLino/LifeRPG');
  assert.deepEqual(lifeRpg.topics, ['dart', 'flutter', 'liferpg', 'multiplatform']);
});
