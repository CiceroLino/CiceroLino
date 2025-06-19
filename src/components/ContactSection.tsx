import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles, commonStyles } from "../utils/styles";
import { appConfig } from "../config/app.config";

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const { contactInfo, personalInfo } = appConfig;

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      style={{
        ...commonStyles.section,
        backgroundColor: styles.colors.overlay,
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: styles.colors.primary,
        }}
      >
        Vamos Trabalhar Juntos?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: 800,
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            backgroundColor: `${styles.colors.primary}10`,
            borderRadius: "8px",
            border: `1px solid ${styles.colors.primary}30`,
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ color: styles.colors.primary, marginBottom: "1rem" }}>
            Disponibilidade
          </h3>
          <p style={{ color: styles.colors.textSecondary }}>
            Disponível para projetos freelance e oportunidades de contratação
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            backgroundColor: `${styles.colors.secondary}10`,
            borderRadius: "8px",
            border: `1px solid ${styles.colors.secondary}30`,
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 style={{ color: styles.colors.secondary, marginBottom: "1rem" }}>
            Modalidades
          </h3>
          <p style={{ color: styles.colors.textSecondary }}>
            {personalInfo.availability.join(", ")}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <motion.a
          href={`mailto:${contactInfo.email}`}
          whileHover={{ y: -2 }}
          style={{
            backgroundColor: styles.colors.primary,
            color: styles.colors.background,
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: styles.transitions.medium,
            boxShadow: styles.shadows.small,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = styles.shadows.medium;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = styles.shadows.small;
          }}
        >
          <i className="fas fa-envelope"></i>
          Email
        </motion.a>

        <motion.a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          style={{
            backgroundColor: "#25D366",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: styles.transitions.medium,
            boxShadow: "0 2px 8px rgba(37, 211, 102, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 10px 20px rgba(37, 211, 102, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 2px 8px rgba(37, 211, 102, 0.3)";
          }}
        >
          <i className="fab fa-whatsapp"></i>
          WhatsApp
        </motion.a>

        <motion.a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          style={{
            backgroundColor: "#0077B5",
            color: "#fff",
            padding: "1rem 2rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: styles.transitions.medium,
            boxShadow: "0 2px 8px rgba(0, 119, 181, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 10px 20px rgba(0, 119, 181, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 2px 8px rgba(0, 119, 181, 0.3)";
          }}
        >
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </motion.a>
      </div>

      <p
        style={{
          textAlign: "center",
          color: styles.colors.textSecondary,
          maxWidth: 500,
          lineHeight: "1.6",
        }}
      >
        Estou sempre aberto a novas oportunidades e colaborações interessantes.
        Vamos conversar sobre como posso ajudar no seu próximo projeto!
      </p>
    </motion.section>
  );
};
