import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";

interface NavbarProps {
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfólio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contato" },
];

export const Navbar: React.FC<NavbarProps> = ({ onSectionClick }) => {
  const { theme, toggleTheme } = useTheme();
  const styles = getThemeStyles(theme);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: styles.colors.overlay,
        padding: "1rem 2rem",
        zIndex: 1000,
        fontWeight: "600",
        color: styles.colors.primary,
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${styles.colors.border}`,
        minHeight: "60px",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            style={{
              transition: styles.transitions.medium,
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${styles.colors.primary}20`;
              e.currentTarget.style.color = styles.colors.text;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = styles.colors.primary;
            }}
          >
            {section.label}
          </div>
        ))}
      </div>

      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          backgroundColor: styles.colors.primary,
          border: `2px solid ${styles.colors.primary}`,
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: styles.colors.background,
          fontSize: "1.5rem",
          transition: styles.transitions.medium,
          boxShadow: styles.shadows.small,
          zIndex: 1001,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = styles.shadows.medium;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = styles.shadows.small;
        }}
        title={`Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </motion.button>
    </nav>
  );
};
