import test from 'node:test';
import assert from 'node:assert/strict';
import { detectInitialLanguage, persistLanguage } from '../src/utils/language.ts';

test('language detection handles browser locale and invalid stored values', () => {
  globalThis.window = { localStorage: { getItem: () => 'invalid' } };
  assert.equal(detectInitialLanguage('pt-PT'), 'pt');
  assert.equal(detectInitialLanguage('en-US'), 'en');
  assert.equal(detectInitialLanguage('ja-JP'), 'en');
  delete globalThis.window;
});

test('a valid stored language takes precedence', () => {
  globalThis.window = { localStorage: { getItem: () => 'en' } };
  assert.equal(detectInitialLanguage('pt-BR'), 'en');
  delete globalThis.window;
});

test('storage exceptions fall back to locale without preventing updates', () => {
  globalThis.window = {
    localStorage: {
      getItem: () => {
        throw new Error('storage blocked');
      },
      setItem: () => {
        throw new Error('storage full');
      },
    },
  };
  assert.equal(detectInitialLanguage('pt-BR'), 'pt');
  assert.doesNotThrow(() => persistLanguage('en'));
  delete globalThis.window;
});
