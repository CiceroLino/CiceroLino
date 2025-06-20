import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);

  return (
    <motion.section
      id="about"
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
        {t("about.title")}
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            ...commonStyles.card,
            backgroundColor: styles.colors.background,
            padding: "2rem",
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: styles.colors.primary,
              fontWeight: "600",
            }}
          >
            {t("about.experience.title")}
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: styles.colors.text,
              fontWeight: "500",
            }}
          >
            {t("about.experience.role")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
            }}
          >
            {t("about.experience.experience")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
            }}
          >
            {t("about.experience.specializations")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: styles.colors.secondary,
              fontWeight: "500",
            }}
          >
            {t("about.experience.availability")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            ...commonStyles.card,
            backgroundColor: styles.colors.background,
            padding: "2rem",
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: styles.colors.primary,
              fontWeight: "600",
            }}
          >
            {t("about.education.title")}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
            }}
          >
            {t("about.education.degree")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
            }}
          >
            {t("about.education.objective")}
          </p>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: styles.colors.secondary,
              fontWeight: "500",
            }}
          >
            {t("about.education.methodology")}
          </p>
        </motion.div>
      </div>
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
