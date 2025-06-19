import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles, commonStyles } from "../utils/styles";
import { usePortfolio } from "../hooks/usePortfolio";

export const PortfolioSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);
  const { projects, loading, error } = usePortfolio();

  if (loading) {
    return (
      <section
        style={{
          ...commonStyles.section,
          backgroundColor: styles.colors.overlay,
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: styles.colors.primary }}>
          Carregando Portfólio...
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
        <h2 style={{ fontSize: "2.5rem", color: styles.colors.primary }}>
          Erro ao carregar portfólio
        </h2>
        <p style={{ color: styles.colors.textSecondary }}>{error}</p>
      </section>
    );
  }

  return (
    <motion.section
      id="portfolio"
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
          marginBottom: "2rem",
        }}
      >
        Portfólio
      </h2>

      {projects.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: styles.colors.surface,
            borderRadius: "12px",
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <p style={{ color: styles.colors.textSecondary, fontSize: "1.1rem" }}>
            Nenhum projeto encontrado. Verifique a configuração do GitHub.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            maxWidth: 1200,
            width: "100%",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{
                backgroundColor: styles.colors.surface,
                borderRadius: "12px",
                overflow: "hidden",
                border: `1px solid ${styles.colors.border}`,
                transition: styles.transitions.medium,
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = styles.shadows.medium;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: styles.colors.primary,
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: styles.colors.textSecondary,
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        backgroundColor: `${styles.colors.primary}20`,
                        color: styles.colors.primary,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#333",
                      color: "#fff",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: styles.transitions.medium,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        styles.colors.primary;
                      e.currentTarget.style.color = styles.colors.background;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#333";
                      e.currentTarget.style.color = "#fff";
                    }}
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: styles.colors.secondary,
                        color: styles.colors.background,
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        transition: styles.transitions.medium,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};
