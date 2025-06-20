import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";

export const BlogSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);

  return (
    <motion.section
      id="blog"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      style={{
        ...commonStyles.section,
        backgroundColor:
          theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.9)",
        position: "relative",
        zIndex: 11,
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "3rem",
          marginBottom: "3rem",
          textAlign: "center",
          fontWeight: "bold",
          transition: styles.transitions.medium,
          display: "inline-block",
          lineHeight: "1.2",
          color: styles.colors.primary,
          textShadow: `0 0 20px ${styles.colors.primary}40`,
        }}
      >
        {t("blog.title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          ...commonStyles.card,
          backgroundColor: styles.colors.surface,
          padding: "4rem 2rem",
          boxShadow: styles.shadows.large,
          border: `1px solid ${styles.colors.border}`,
          textAlign: "center",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          style={{
            fontSize: "4rem",
            marginBottom: "2rem",
            color: styles.colors.secondary,
          }}
        >
          {t("blog.construction")}
        </motion.div>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: styles.colors.textSecondary,
            marginBottom: "2rem",
          }}
        >
          {t("blog.description")}
        </p>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              backgroundColor: styles.colors.primary,
              color: styles.colors.background,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            React
          </span>
          <span
            style={{
              backgroundColor: styles.colors.secondary,
              color: styles.colors.background,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            Node.js
          </span>
          <span
            style={{
              backgroundColor: styles.colors.primary,
              color: styles.colors.background,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            TypeScript
          </span>
          <span
            style={{
              backgroundColor: styles.colors.secondary,
              color: styles.colors.background,
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            AWS
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

const commonStyles = {
  section: {
    minHeight: "80vh",
    padding: "4rem 1rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2rem",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
};
