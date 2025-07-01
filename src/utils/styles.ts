import { type Theme } from '../types';

export const getThemeStyles = (theme: Theme) => ({
  colors: {
    primary: theme === 'dark' ? '#00bfff' : '#007acc',
    secondary: theme === 'dark' ? '#00ff99' : '#00a86b',
    background: theme === 'dark' ? '#000000' : '#ffffff',
    surface: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.95)',
    text: theme === 'dark' ? '#f5f5f5' : '#1a1a1a',
    textSecondary: theme === 'dark' ? '#ccc' : '#ccc',
    border: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)',
    overlay: theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.98)',
  },

  gradients: {
    primary:
      theme === 'dark'
        ? 'linear-gradient(45deg, #00bfff, #00ff99)'
        : 'linear-gradient(45deg, #007acc, #00a86b)',
    surface:
      theme === 'dark'
        ? 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))'
        : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
  },

  shadows: {
    small:
      theme === 'dark' ? '0 2px 8px rgba(0, 191, 255, 0.2)' : '0 2px 8px rgba(0, 122, 204, 0.15)',
    medium:
      theme === 'dark' ? '0 8px 32px rgba(0, 191, 255, 0.3)' : '0 8px 32px rgba(0, 122, 204, 0.2)',
    large:
      theme === 'dark'
        ? '0 16px 64px rgba(0, 191, 255, 0.4)'
        : '0 16px 64px rgba(0, 122, 204, 0.25)',
  },

  transitions: {
    fast: 'all 0.2s ease',
    medium: 'all 0.3s ease',
    slow: 'all 0.5s ease',
  },
});

export const commonStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  },

  section: {
    minHeight: '80vh',
    padding: '4rem 1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },

  button: {
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    fontSize: '1.1rem',
  },

  card: {
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
};
