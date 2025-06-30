import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../utils/styles';

export const OpenSourceSection: React.FC = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const styles = getThemeStyles(theme);

  const openSourceProjects = [
    {
      name: 'React',
      descriptionEn: 'Contributions to performance improvements and bug fixes',
      descriptionPt: 'Contribuições para melhorias de performance e correções de bugs',
      contributions: 15,
      stars: 200000,
      language: 'JavaScript',
      icon: 'fab fa-react',
      color: '#61DAFB',
      link: 'https://github.com/facebook/react',
      type: 'Framework',
    },
    {
      name: 'Node.js',
      descriptionEn: 'Contributions to security modules and optimizations',
      descriptionPt: 'Contribuições para módulos de segurança e otimizações',
      contributions: 8,
      stars: 95000,
      language: 'JavaScript',
      icon: 'fab fa-node-js',
      color: '#339933',
      link: 'https://github.com/nodejs/node',
      type: 'Runtime',
    },
    {
      name: 'TypeScript',
      descriptionEn: 'Improvements in typing and documentation',
      descriptionPt: 'Melhorias na tipagem e documentação',
      contributions: 12,
      stars: 95000,
      language: 'TypeScript',
      icon: 'fab fa-js',
      color: '#3178C6',
      link: 'https://github.com/microsoft/TypeScript',
      type: 'Language',
    },
    {
      name: 'VS Code',
      descriptionEn: 'Contributions to extensions and UX improvements',
      descriptionPt: 'Contribuições para extensões e melhorias de UX',
      contributions: 6,
      stars: 140000,
      language: 'TypeScript',
      icon: 'fas fa-code',
      color: '#007ACC',
      link: 'https://github.com/microsoft/vscode',
      type: 'Editor',
    },
  ];

  const stats = {
    totalContributions: openSourceProjects.reduce((sum, project) => sum + project.contributions, 0),
    totalStars: openSourceProjects.reduce((sum, project) => sum + project.stars, 0),
    projectsContributed: openSourceProjects.length,
    yearsActive: 3,
  };

  return (
    <motion.section
      id="opensource"
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
        {t('opensource.title')}
      </motion.h2>

      {/* Estatísticas Gerais */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          width: '100%',
          marginBottom: '4rem',
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: styles.colors.surface,
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              color: styles.colors.primary,
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            {stats.totalContributions}
          </div>
          <div style={{ color: styles.colors.textSecondary, fontSize: '1rem' }}>
            {t('opensource.stats.contributions')}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: styles.colors.surface,
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              color: styles.colors.secondary,
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            {stats.projectsContributed}
          </div>
          <div style={{ color: styles.colors.textSecondary, fontSize: '1rem' }}>
            {t('opensource.stats.projects')}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: styles.colors.surface,
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <div
            style={{
              fontSize: '2.5rem',
              color: styles.colors.primary,
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            {stats.yearsActive}
          </div>
          <div style={{ color: styles.colors.textSecondary, fontSize: '1rem' }}>
            {t('opensource.stats.yearsActive')}
          </div>
        </motion.div>
      </motion.div>

      {/* Projetos */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {openSourceProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            style={{
              ...commonStyles.card,
              backgroundColor: styles.colors.background,
              padding: '2rem',
              boxShadow: styles.shadows.medium,
              border: `1px solid ${styles.colors.border}`,
              cursor: 'pointer',
              transition: styles.transitions.medium,
            }}
            onClick={() => window.open(project.link, '_blank')}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  backgroundColor: `${project.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${project.color}`,
                }}
              >
                <i
                  className={project.icon}
                  style={{
                    color: project.color,
                    fontSize: '2rem',
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: styles.colors.text,
                    fontWeight: '600',
                    margin: 0,
                    marginBottom: '0.25rem',
                  }}
                >
                  {project.name}
                </h3>
                <span
                  style={{
                    color: project.color,
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    backgroundColor: `${project.color}20`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                  }}
                >
                  {t(`opensource.types.${project.type.toLowerCase()}`, project.type)}
                </span>
              </div>
            </div>

            <p
              style={{
                color: styles.colors.textSecondary,
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              {i18n.language === 'pt' ? project.descriptionPt : project.descriptionEn}
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <i
                  className="fas fa-code"
                  style={{
                    color: styles.colors.secondary,
                    fontSize: '1rem',
                  }}
                />
                <span
                  style={{
                    color: styles.colors.textSecondary,
                    fontSize: '0.9rem',
                  }}
                >
                  {project.language}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <i
                  className="fas fa-star"
                  style={{
                    color: '#FFD700',
                    fontSize: '1rem',
                  }}
                />
                <span
                  style={{
                    color: styles.colors.textSecondary,
                    fontSize: '0.9rem',
                  }}
                >
                  {(project.stars / 1000).toFixed(0)}k
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: styles.colors.surface,
                borderRadius: '8px',
                border: `1px solid ${styles.colors.border}`,
              }}
            >
              <span style={{ color: styles.colors.text, fontWeight: '500' }}>
                {t('opensource.stats.contributions')}
              </span>
              <span
                style={{
                  color: project.color,
                  fontWeight: '600',
                  fontSize: '1.2rem',
                }}
              >
                {project.contributions}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                color: styles.colors.primary,
                fontSize: '0.9rem',
                fontWeight: '500',
              }}
            >
              <i className="fas fa-external-link-alt" />
              {t('opensource.viewOnGitHub')}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          textAlign: 'center',
          marginTop: '4rem',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            color: styles.colors.text,
            marginBottom: '1rem',
            fontWeight: '600',
          }}
        >
          {t('opensource.collaborate.title')}
        </h3>
        <p
          style={{
            fontSize: '1.1rem',
            color: styles.colors.textSecondary,
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            lineHeight: '1.6',
          }}
        >
          {t('opensource.collaborate.description')}
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            backgroundColor: styles.colors.primary,
            border: 'none',
            borderRadius: '8px',
            padding: '1rem 2rem',
            color: styles.colors.background,
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: styles.transitions.medium,
            boxShadow: styles.shadows.small,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = styles.shadows.medium;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = styles.shadows.small;
          }}
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t('opensource.collaborate.button')}
        </motion.button>
      </motion.div>
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
