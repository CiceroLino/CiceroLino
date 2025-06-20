import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";
import { useGitHubStats } from "../hooks/useGitHubStats";

export const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const styles = getThemeStyles(theme);
  const { stats, loading, error } = useGitHubStats();

  const skills = [
    { name: "React", level: 90, icon: "fab fa-react" },
    { name: "TypeScript", level: 85, icon: "fab fa-js" },
    { name: "Node.js", level: 80, icon: "fab fa-node-js" },
    { name: "AWS", level: 75, icon: "fab fa-aws" },
    { name: "PostgreSQL", level: 80, icon: "fas fa-database" },
    { name: "NestJS", level: 75, icon: "fas fa-server" },
    { name: "Git", level: 85, icon: "fab fa-git-alt" },
    { name: "Docker", level: 70, icon: "fab fa-docker" },
  ];

  const codingPlatforms = [
    {
      name: "HackerRank",
      icon: "fas fa-code",
      color: "#00EA64",
      stats: {
        problemsSolved: 150,
        stars: 4,
        rank: "Top 10%",
      },
    },
    {
      name: "LeetCode",
      icon: "fas fa-brain",
      color: "#FFA116",
      stats: {
        problemsSolved: 200,
        rating: 1800,
        rank: "Top 15%",
      },
    },
  ];

  return (
    <motion.section
      id="skills"
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
        {t("skills.title")}
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            ...commonStyles.card,
            backgroundColor: styles.colors.surface,
            padding: "2rem",
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              color: styles.colors.primary,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Tecnologias Principais
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <i
                      className={skill.icon}
                      style={{
                        color: styles.colors.secondary,
                        fontSize: "1.2rem",
                        width: "20px",
                      }}
                    />
                    <span
                      style={{
                        color: styles.colors.text,
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  <span
                    style={{
                      color: styles.colors.textSecondary,
                      fontSize: "0.9rem",
                    }}
                  >
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
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      height: "100%",
                      background: styles.gradients.primary,
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            ...commonStyles.card,
            backgroundColor: styles.colors.surface,
            padding: "2rem",
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              color: styles.colors.primary,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Estatísticas GitHub
          </h3>
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                color: styles.colors.textSecondary,
              }}
            >
              <i
                className="fas fa-spinner fa-spin"
                style={{ fontSize: "2rem" }}
              />
            </div>
          )}
          {error && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                color: styles.colors.textSecondary,
                textAlign: "center",
              }}
            >
              <div>
                <i
                  className="fas fa-exclamation-triangle"
                  style={{ fontSize: "2rem", marginBottom: "1rem" }}
                />
                <p>Erro ao carregar estatísticas</p>
              </div>
            </div>
          )}
          {stats && !loading && !error && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: styles.colors.background,
                  borderRadius: "8px",
                  border: `1px solid ${styles.colors.border}`,
                }}
              >
                <span style={{ color: styles.colors.text, fontWeight: "500" }}>
                  Repositórios Públicos
                </span>
                <span
                  style={{
                    color: styles.colors.primary,
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  {stats.public_repos}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: styles.colors.background,
                  borderRadius: "8px",
                  border: `1px solid ${styles.colors.border}`,
                }}
              >
                <span style={{ color: styles.colors.text, fontWeight: "500" }}>
                  Seguidores
                </span>
                <span
                  style={{
                    color: styles.colors.primary,
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  {stats.followers}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: styles.colors.background,
                  borderRadius: "8px",
                  border: `1px solid ${styles.colors.border}`,
                }}
              >
                <span style={{ color: styles.colors.text, fontWeight: "500" }}>
                  Seguindo
                </span>
                <span
                  style={{
                    color: styles.colors.primary,
                    fontWeight: "600",
                    fontSize: "1.2rem",
                  }}
                >
                  {stats.following}
                </span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Coding Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            ...commonStyles.card,
            backgroundColor: styles.colors.surface,
            padding: "2rem",
            boxShadow: styles.shadows.medium,
            border: `1px solid ${styles.colors.border}`,
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              color: styles.colors.primary,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Plataformas de Coding
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{
                  backgroundColor: styles.colors.background,
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: `1px solid ${styles.colors.border}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <i
                    className={platform.icon}
                    style={{
                      color: platform.color,
                      fontSize: "1.5rem",
                    }}
                  />
                  <h4
                    style={{
                      color: styles.colors.text,
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      margin: 0,
                    }}
                  >
                    {platform.name}
                  </h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {platform.name === "HackerRank" ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Problemas Resolvidos
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.problemsSolved}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Estrelas
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.stars} ⭐
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Ranking
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.rank}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Problemas Resolvidos
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.problemsSolved}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Rating
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.rating}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: styles.colors.textSecondary }}>
                          Ranking
                        </span>
                        <span
                          style={{
                            color: platform.color,
                            fontWeight: "600",
                          }}
                        >
                          {platform.stats.rank}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
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
