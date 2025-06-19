import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";
import { appConfig } from "../config/app.config";

interface HeroSectionProps {
  onSectionClick: (section: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSectionClick }) => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const { personalInfo, contactInfo } = appConfig;

  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 1rem",
        color: styles.colors.text,
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
            background: styles.gradients.primary,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          {personalInfo.name}
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "1rem",
            color: styles.colors.secondary,
            fontWeight: "300",
          }}
        >
          {personalInfo.title}
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: 700,
            marginBottom: "2rem",
            lineHeight: "1.6",
            color: styles.colors.textSecondary,
          }}
        >
          {personalInfo.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            backgroundColor: styles.colors.primary,
            border: "none",
            borderRadius: "8px",
            padding: "1rem 2rem",
            color: styles.colors.background,
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "1.1rem",
            transition: styles.transitions.medium,
            boxShadow: styles.shadows.small,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.shadows.medium;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = styles.shadows.small;
          }}
          onClick={() => onSectionClick("portfolio")}
        >
          Ver Portfólio
        </motion.button>

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            backgroundColor: "transparent",
            border: `2px solid ${styles.colors.secondary}`,
            borderRadius: "8px",
            padding: "1rem 2rem",
            color: styles.colors.secondary,
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "1.1rem",
            transition: styles.transitions.medium,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${styles.colors.secondary}10`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
          onClick={() => onSectionClick("contact")}
        >
          Contratar
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <motion.a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{
            color: styles.colors.primary,
            fontSize: "1.5rem",
            transition: styles.transitions.medium,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = styles.colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = styles.colors.primary;
          }}
        >
          <i className="fab fa-github"></i>
        </motion.a>

        <motion.a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          style={{
            color: styles.colors.primary,
            fontSize: "1.5rem",
            transition: styles.transitions.medium,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = styles.colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = styles.colors.primary;
          }}
        >
          <i className="fab fa-linkedin"></i>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
