import React from 'react';
import { motion } from 'framer-motion';
// import { useTranslation } from "react-i18next";
import { useTheme } from '../contexts/ThemeContext';
import { getThemeStyles } from '../utils/styles';

export const DownloadCV: React.FC = () => {
  const { theme } = useTheme();
  // const { t } = useTranslation();
  const styles = getThemeStyles(theme);

  const handleDownloadCV = () => {
    // URL do CV (você pode hospedar o PDF no seu repositório ou em um serviço como Google Drive)
    const cvUrl = '/cv-cicero-lino.pdf'; // Substitua pela URL real do seu CV

    // Criar link temporário para download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Cicero-Lino-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
      }}
    >
      <motion.button
        onClick={handleDownloadCV}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: styles.colors.secondary,
          border: 'none',
          borderRadius: '50px',
          padding: '1rem 1.5rem',
          color: styles.colors.background,
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '1rem',
          boxShadow: styles.shadows.large,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: styles.transitions.medium,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = styles.shadows.large;
          e.currentTarget.style.backgroundColor = styles.colors.primary;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = styles.shadows.large;
          e.currentTarget.style.backgroundColor = styles.colors.secondary;
        }}
        title="Baixar CV em PDF"
      >
        <i className="fas fa-download" style={{ fontSize: '1.2rem' }} />
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          CV
          <i className="fas fa-file-pdf" style={{ fontSize: '0.9rem' }} />
        </span>
      </motion.button>
    </motion.div>
  );
};
