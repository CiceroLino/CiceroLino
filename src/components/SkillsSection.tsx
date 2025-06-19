import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles, commonStyles } from "../utils/styles";
import { useSkills } from "../hooks/useSkills";

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const { skills, loading, error } = useSkills();

  if (loading) {
    return (
      <section
        style={{
          ...commonStyles.section,
          backgroundColor: styles.colors.overlay,
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: styles.colors.secondary }}>
          Carregando Skills...
        </h2>
      </section>
    );
  }

  if (error) {
    return (
      <section
        style={{
          ...commonStyles.section,
          backgroundColor: styles.colors.overlay,
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: styles.colors.secondary }}>
          Erro ao carregar skills
        </h2>
        <p style={{ color: styles.colors.textSecondary }}>{error}</p>
      </section>
    );
  }

  return (
    <motion.section
      id="skills"
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
          color: styles.colors.secondary,
          marginBottom: "2rem",
        }}
      >
        Skills & Tecnologias
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: 1000,
          width: "100%",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
              backgroundColor: styles.colors.surface,
              padding: "1.5rem",
              borderRadius: "8px",
              border: `1px solid ${skill.color}20`,
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  color: skill.color,
                  fontWeight: "600",
                  fontSize: "1.1rem",
                }}
              >
                {skill.name}
              </span>
              <span style={{ color: styles.colors.textSecondary }}>
                {skill.level}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: styles.colors.border,
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.1, duration: 1 }}
                style={{
                  height: "100%",
                  backgroundColor: skill.color,
                  borderRadius: "4px",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
