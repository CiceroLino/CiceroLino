import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";
import { appConfig } from "../config/app.config";

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);
  const { contactInfo } = appConfig;

  const handleEmailClick = () => {
    window.open(
      `mailto:${contactInfo.email}?subject=Proposta de Trabalho`,
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade de trabalho."
    );
    window.open(
      `https://wa.me/${contactInfo.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <motion.section
      id="contact"
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
        {t("contact.title")}
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
        {/* Informações de Disponibilidade */}
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
            {t("contact.availability.title")}
          </h3>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
              marginBottom: "1.5rem",
            }}
          >
            {t("contact.availability.description")}
          </p>
          <h4
            style={{
              fontSize: "1.2rem",
              marginBottom: "1rem",
              color: styles.colors.secondary,
              fontWeight: "600",
            }}
          >
            {t("contact.modalities.title")}
          </h4>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
            }}
          >
            {t("contact.modalities.description")}
          </p>
        </motion.div>

        {/* Botões de Contato */}
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
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
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
            Entre em Contato
          </h3>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: styles.colors.textSecondary,
              marginBottom: "1.5rem",
            }}
          >
            {t("contact.message")}
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <motion.button
              onClick={handleEmailClick}
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.medium;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.small;
              }}
            >
              <i className="fas fa-envelope" />
              {t("contact.buttons.email")}
            </motion.button>

            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: "#25D366",
                border: "none",
                borderRadius: "8px",
                padding: "1rem 2rem",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1.1rem",
                transition: styles.transitions.medium,
                boxShadow: styles.shadows.small,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.medium;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.small;
              }}
            >
              <i className="fab fa-whatsapp" />
              {t("contact.buttons.whatsapp")}
            </motion.button>

            <motion.a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: "#0077B5",
                border: "none",
                borderRadius: "8px",
                padding: "1rem 2rem",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1.1rem",
                transition: styles.transitions.medium,
                boxShadow: styles.shadows.small,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.medium;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.shadows.small;
              }}
            >
              <i className="fab fa-linkedin" />
              {t("contact.buttons.linkedin")}
            </motion.a>
          </div>
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
