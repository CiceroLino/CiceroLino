import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles, commonStyles } from "../utils/styles";
import { appConfig } from "../config/app.config";

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const { personalInfo } = appConfig;

  return (
    <motion.section
      id="about"
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
          color: styles.colors.primary,
          marginBottom: "1rem",
        }}
      >
        Sobre Mim
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              color: styles.colors.secondary,
              marginBottom: "1rem",
            }}
          >
            Experiência Profissional
          </h3>
          <div
            style={{ lineHeight: "1.8", color: styles.colors.textSecondary }}
          >
            <p>
              <strong style={{ color: styles.colors.text }}>
                Full Stack Developer
              </strong>{" "}
              - {personalInfo.experience}
            </p>
            <p>
              <strong style={{ color: styles.colors.text }}>
                Especializações:
              </strong>{" "}
              React, Node.js, TypeScript, AWS, NestJS, PostgreSQL
            </p>
            <p>
              <strong style={{ color: styles.colors.text }}>
                Disponível para:
              </strong>{" "}
              {personalInfo.availability.join(", ")}
            </p>
          </div>
        </div>

        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              color: styles.colors.secondary,
              marginBottom: "1rem",
            }}
          >
            Formação & Objetivos
          </h3>
          <div
            style={{ lineHeight: "1.8", color: styles.colors.textSecondary }}
          >
            <p>
              <strong style={{ color: styles.colors.text }}>Formação:</strong>{" "}
              {personalInfo.education}
            </p>
            <p>
              <strong style={{ color: styles.colors.text }}>Objetivo:</strong>{" "}
              Contribuir para projetos desafiadores que impactem positivamente a
              sociedade.
            </p>
            <p>
              <strong style={{ color: styles.colors.text }}>
                Metodologia:
              </strong>{" "}
              {personalInfo.methodologies.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
