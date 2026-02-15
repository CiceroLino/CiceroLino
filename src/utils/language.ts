import type { Language } from '../config/content';

export const LANGUAGE_STORAGE_KEY = 'cicerolino.language';

const isLanguage = (value: string | null): value is Language => {
  return value === 'pt' || value === 'en';
};

export const detectInitialLanguage = (browserLanguage?: string): Language => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLanguage(stored)) {
      return stored;
    }
  }

  const normalized = (browserLanguage ?? '').toLowerCase();
  return normalized.startsWith('pt') ? 'pt' : 'en';
};

export const persistLanguage = (language: Language) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
};
