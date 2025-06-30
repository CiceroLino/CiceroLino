import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../utils/styles';
import { useGitHubRepos } from '../hooks/useGitHubRepos';

export const PortfolioSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);
  const { repos, loading, error } = useGitHubRepos();

  if (loading) {
    return (
      <motion.section
        id="portfolio"
        style={{
          ...commonStyles.section,
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
          position: 'relative',
          zIndex: 11,
        }}
      >
        <motion.h2
          style={{
            fontSize: '3rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            transition: styles.transitions.medium,
            display: 'inline-block',
            lineHeight: '1.2',
            color: styles.colors.primary,
            textShadow: `0 0 20px ${styles.colors.primary}40`,
          }}
        >
          {t('portfolio.title')}
        </motion.h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            color: styles.colors.textSecondary,
          }}
        >
          <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem' }} />
          <span style={{ marginLeft: '1rem' }}>{t('portfolio.loading')}</span>
        </div>
      </motion.section>
    );
  }

  if (error) {
    return (
      <motion.section
        id="portfolio"
        style={{
          ...commonStyles.section,
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
          position: 'relative',
          zIndex: 11,
        }}
      >
        <motion.h2
          style={{
            fontSize: '3rem',
            marginBottom: '3rem',
            textAlign: 'center',
            fontWeight: 'bold',
            transition: styles.transitions.medium,
            display: 'inline-block',
            lineHeight: '1.2',
            color: styles.colors.primary,
            textShadow: `0 0 20px ${styles.colors.primary}40`,
          }}
        >
          {t('portfolio.title')}
        </motion.h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            color: styles.colors.textSecondary,
            textAlign: 'center',
          }}
        >
          <div>
            <i
              className="fas fa-exclamation-triangle"
              style={{ fontSize: '2rem', marginBottom: '1rem' }}
            />
            <p>{t('portfolio.error')}</p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      style={{
        ...commonStyles.section,
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        position: 'relative',
        zIndex: 11,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          textAlign: 'center',
          fontWeight: 'bold',
          transition: styles.transitions.medium,
          display: 'inline-block',
          lineHeight: '1.2',
          color: styles.colors.primary,
          textShadow: `0 0 20px ${styles.colors.primary}40`,
        }}
      >
        {t('portfolio.title')}
      </motion.h2>

      {repos.length === 0 ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px',
            color: styles.colors.textSecondary,
            textAlign: 'center',
          }}
        >
          <div>
            <i className="fas fa-folder-open" style={{ fontSize: '2rem', marginBottom: '1rem' }} />
            <p>{t('portfolio.noProjects')}</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                ...commonStyles.card,
                backgroundColor: styles.colors.background,
                padding: '1.5rem',
                boxShadow: styles.shadows.medium,
                border: `1px solid ${styles.colors.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    color: styles.colors.primary,
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                  }}
                >
                  {repo.name}
                </h3>
                <p
                  style={{
                    color: styles.colors.textSecondary,
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem',
                  }}
                >
                  {repo.description || t('portfolio.noDescription')}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                {repo.topics?.slice(0, 3).map(topic => (
                  <span
                    key={topic}
                    style={{
                      backgroundColor: styles.colors.surface,
                      color: styles.colors.textSecondary,
                      padding: '0.25rem 0.5rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      border: `1px solid ${styles.colors.border}`,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    color: styles.colors.textSecondary,
                    fontSize: '0.9rem',
                  }}
                >
                  <span>
                    <i className="fas fa-star" style={{ marginRight: '0.25rem' }} />
                    {repo.stargazers_count}
                  </span>
                  <span>
                    <i className="fas fa-code-branch" style={{ marginRight: '0.25rem' }} />
                    {repo.forks_count}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: styles.colors.primary,
                      color: styles.colors.background,
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: styles.transitions.medium,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = styles.shadows.small;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {t('portfolio.buttons.github')}
                  </motion.a>
                  {repo.homepage && (
                    <motion.a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor: 'transparent',
                        color: styles.colors.secondary,
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        border: `1px solid ${styles.colors.secondary}`,
                        transition: styles.transitions.medium,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = `${styles.colors.secondary}10`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {t('portfolio.buttons.demo')}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

const commonStyles = {
  section: {
    minHeight: '80vh',
    padding: '4rem 1rem',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  card: {
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
};
