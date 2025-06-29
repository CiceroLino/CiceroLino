import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getThemeStyles } from '../utils/styles';

interface NavbarProps {
  // eslint-disable-next-line no-unused-vars
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'opensource', labelKey: 'nav.opensource' },
  { id: 'timeline', labelKey: 'nav.timeline' },
  { id: 'portfolio', labelKey: 'nav.portfolio' },
  { id: 'blog', labelKey: 'nav.blog' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onSectionClick }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: styles.colors.overlay,
        padding: '1rem 2rem',
        zIndex: 1000,
        fontWeight: '600',
        color: styles.colors.primary,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${styles.colors.border}`,
        minHeight: '60px',
      }}
    >
      {/* Logo/Nome */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: styles.colors.primary,
          cursor: 'pointer',
        }}
        onClick={() => handleSectionClick('hero')}
      >
        CL
      </div>

      {/* Menu Desktop */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}
        className="desktop-menu"
      >
        {sections.map(section => (
          <div
            key={section.id}
            onClick={() => handleSectionClick(section.id)}
            style={{
              transition: styles.transitions.medium,
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = `${styles.colors.primary}20`;
              e.currentTarget.style.color = styles.colors.text;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = styles.colors.primary;
            }}
          >
            {t(section.labelKey)}
          </div>
        ))}
      </div>

      {/* Botões de Controle */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {/* Botão de idioma */}
        <motion.button
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: styles.colors.primary,
            border: `2px solid ${styles.colors.primary}`,
            borderRadius: '8px',
            padding: '0.75rem 1.25rem',
            cursor: 'pointer',
            color: styles.colors.background,
            fontSize: '1rem',
            fontWeight: '700',
            transition: styles.transitions.medium,
            boxShadow: styles.shadows.small,
            minWidth: '80px',
            textAlign: 'center' as const,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = styles.colors.secondary;
            e.currentTarget.style.borderColor = styles.colors.secondary;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = styles.colors.primary;
            e.currentTarget.style.borderColor = styles.colors.primary;
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title={`Mudar para ${language === 'pt' ? 'inglês' : 'português'}`}
        >
          {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </motion.button>

        {/* Botão de tema */}
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            backgroundColor: styles.colors.secondary,
            border: `3px solid ${styles.colors.secondary}`,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: styles.colors.background,
            fontSize: '1.8rem',
            transition: styles.transitions.medium,
            boxShadow: styles.shadows.medium,
            zIndex: 1001,
            position: 'relative' as const,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = styles.shadows.large;
            e.currentTarget.style.backgroundColor = styles.colors.primary;
            e.currentTarget.style.borderColor = styles.colors.primary;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = styles.shadows.medium;
            e.currentTarget.style.backgroundColor = styles.colors.secondary;
            e.currentTarget.style.borderColor = styles.colors.secondary;
          }}
          title={`Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </motion.button>

        {/* Botão Hambúrguer */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column' as const,
            gap: '4px',
            padding: '8px',
            borderRadius: '4px',
          }}
          className="hamburger-menu"
        >
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: styles.colors.primary,
              transition: styles.transitions.medium,
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: styles.colors.primary,
              transition: styles.transitions.medium,
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: styles.colors.primary,
              transition: styles.transitions.medium,
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
            }}
          />
        </motion.button>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: styles.colors.overlay,
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${styles.colors.border}`,
          overflow: 'hidden',
          zIndex: 999,
        }}
        className="mobile-menu"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            padding: '1rem',
            gap: '0.5rem',
          }}
        >
          {sections.map(section => (
            <div
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              style={{
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: styles.transitions.medium,
                color: styles.colors.primary,
                fontSize: '1.1rem',
                fontWeight: '500',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = `${styles.colors.primary}20`;
                e.currentTarget.style.color = styles.colors.text;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = styles.colors.primary;
              }}
            >
              {t(section.labelKey)}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
