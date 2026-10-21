import type { Language } from '../config/content';

export const LANGUAGE_STORAGE_KEY = 'cicerolino.language';

const isLanguage = (value: string | null): value is Language => {
  return value === 'pt' || value === 'en';
};

export const detectInitialLanguage = (browserLanguage?: string): Language => {
  try {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (isLanguage(stored)) {
        return stored;
      }
    }
  } catch {
    // Browser privacy settings may block access to storage.
  }

  const normalized = (browserLanguage ?? '').toLowerCase();
  return normalized.startsWith('pt') ? 'pt' : 'en';
};

export const persistLanguage = (language: Language) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // The selected language remains usable for the current session.
  }
};
