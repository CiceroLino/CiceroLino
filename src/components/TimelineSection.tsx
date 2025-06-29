import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { getThemeStyles } from "../utils/styles";

export const TimelineSection: React.FC = () => {
  const { theme } = useTheme();
  const styles = getThemeStyles(theme);

  const timelineEvents = [
    {
      year: "2024",
      month: "Jan - Presente",
      title: "Full Stack Developer Senior",
      company: "TechCorp Solutions",
      description:
        "Liderando desenvolvimento de aplicações web escaláveis com React, Node.js e AWS. Implementando arquiteturas microserviços e otimizando performance.",
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "TypeScript",
        "PostgreSQL",
        "Docker",
      ],
      type: "work",
      icon: "fas fa-briefcase",
      achievements: [
        "Redução de 40% no tempo de carregamento",
        "Implementação de CI/CD",
        "Mentoria de 3 desenvolvedores júnior",
      ],
    },
    {
      year: "2023",
      month: "Mar - Dez",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description:
        "Desenvolvimento de MVP e aplicações web com foco em performance e UX. Trabalhando em equipe ágil com sprints de 2 semanas.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "Redis",
      ],
      type: "work",
      icon: "fas fa-rocket",
      achievements: [
        "MVP lançado em 3 meses",
        "1000+ usuários ativos",
        "Integração com APIs de pagamento",
      ],
    },
    {
      year: "2023",
      month: "Jan - Fev",
      title: "Contribuições Open Source",
      company: "Comunidade GitHub",
      description:
        "Início das contribuições para projetos React, Node.js e TypeScript. Participação ativa na comunidade open source.",
      technologies: ["React", "Node.js", "TypeScript", "Git", "GitHub Actions"],
      type: "opensource",
      icon: "fab fa-github",
      achievements: [
        "41 contribuições",
        "4 projetos principais",
        "Top 10% HackerRank",
      ],
    },
    {
      year: "2022",
      month: "Jun - Dez",
      title: "Frontend Developer",
      company: "WebAgency Digital",
      description:
        "Desenvolvimento de interfaces responsivas e otimização de performance. Trabalhando com múltiplos clientes e projetos simultâneos.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Webpack", "Sass"],
      type: "work",
      icon: "fas fa-code",
      achievements: [
        "15+ projetos entregues",
        "Score 95+ no Lighthouse",
        "Clientes 100% satisfeitos",
      ],
    },
    {
      year: "2022",
      month: "Mar - Mai",
      title: "Início dos Estudos",
      company: "Universidade Federal",
      description:
        "Início da graduação em Ciência da Computação com foco em desenvolvimento de software e algoritmos.",
      technologies: [
        "Algoritmos",
        "Estruturas de Dados",
        "Lógica de Programação",
        "C++",
        "Python",
      ],
      type: "education",
      icon: "fas fa-graduation-cap",
      achievements: [
        "CR 8.5",
        "Monitor de Programação",
        "Participação em maratonas",
      ],
    },
    {
      year: "2021",
      month: "Set - Dez",
      title: "Primeiro Projeto Freelance",
      company: "Freelancer",
      description:
        "Primeiro projeto freelance - landing page responsiva para uma startup local. Aprendizado prático de desenvolvimento web.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma"],
      type: "project",
      icon: "fas fa-laptop-code",
      achievements: [
        "Projeto entregue no prazo",
        "Cliente muito satisfeito",
        "Primeira renda como dev",
      ],
    },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "work":
        return styles.colors.primary;
      case "education":
        return styles.colors.secondary;
      case "opensource":
        return "#6f42c1";
      case "project":
        return "#fd7e14";
      default:
        return styles.colors.primary;
    }
  };

  return (
    <section
      id="timeline"
      style={{
        background: theme === "dark" ? "#181818" : "#f8f9fa",
        padding: "4rem 1rem",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 11,
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2.5rem",
          textAlign: "center",
          fontWeight: "bold",
          color: styles.colors.primary,
          textShadow: `0 0 10px ${styles.colors.primary}22`,
        }}
      >
        Minha Jornada
      </h2>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        {/* Linha vertical */}
        <div
          style={{
            position: "absolute",
            left: "32px",
            top: 0,
            bottom: 0,
            width: "4px",
            background: styles.colors.border,
            borderRadius: "2px",
            zIndex: 1,
          }}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {timelineEvents.map(
            (
              event
              // idx
            ) => {
              const eventColor = getEventColor(event.type);
              return (
                <div
                  key={event.title + event.year}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Ícone circular */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: eventColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: styles.shadows.small,
                      color: styles.colors.background,
                      fontSize: "2rem",
                      marginRight: "1.5rem",
                      flexShrink: 0,
                      border: `4px solid ${styles.colors.background}`,
                    }}
                  >
                    <i className={event.icon} />
                  </div>
                  {/* Card */}
                  <div
                    style={{
                      background: styles.colors.background,
                      border: `1px solid ${styles.colors.border}`,
                      borderRadius: "14px",
                      boxShadow: styles.shadows.small,
                      padding: "1.5rem 1.5rem 1.5rem 1rem",
                      minWidth: 0,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: eventColor }}>
                        {event.year}
                      </span>
                      <span
                        style={{
                          fontSize: "0.95rem",
                          color: styles.colors.textSecondary,
                          background: `${eventColor}18`,
                          padding: "0.2rem 0.7rem",
                          borderRadius: "8px",
                        }}
                      >
                        {event.month}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        color: styles.colors.text,
                        fontWeight: 600,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {event.title}
                    </h3>
                    <div
                      style={{
                        fontSize: "1rem",
                        color: styles.colors.secondary,
                        fontWeight: 500,
                        marginBottom: "0.7rem",
                      }}
                    >
                      {event.company}
                    </div>
                    <p
                      style={{
                        fontSize: "0.98rem",
                        color: styles.colors.textSecondary,
                        marginBottom: "0.8rem",
                      }}
                    >
                      {event.description}
                    </p>
                    {event.achievements && (
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          marginBottom: "0.7rem",
                        }}
                      >
                        {event.achievements.map((ach, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              color: eventColor,
                              fontSize: "0.93rem",
                            }}
                          >
                            <i
                              className="fas fa-check-circle"
                              style={{ fontSize: "0.9rem" }}
                            />
                            <span
                              style={{ color: styles.colors.textSecondary }}
                            >
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {event.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            background: `${eventColor}18`,
                            color: eventColor,
                            padding: "0.2rem 0.7rem",
                            borderRadius: "8px",
                            fontSize: "0.85rem",
                            fontWeight: 500,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* Call to Action */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h3
          style={{
            fontSize: "1.4rem",
            color: styles.colors.text,
            marginBottom: "0.7rem",
            fontWeight: 600,
          }}
        >
          Próximo Capítulo
        </h3>
        <p
          style={{
            fontSize: "1.05rem",
            color: styles.colors.textSecondary,
            marginBottom: "1.5rem",
            maxWidth: "500px",
            marginInline: "auto",
            lineHeight: "1.6",
          }}
        >
          Estou sempre em busca de novos desafios e oportunidades para crescer.
          Vamos escrever o próximo capítulo juntos?
        </p>
        <button
          style={{
            background: styles.colors.primary,
            border: "none",
            borderRadius: "8px",
            padding: "1rem 2rem",
            color: styles.colors.background,
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1.1rem",
            boxShadow: styles.shadows.small,
            transition: styles.transitions.medium,
          }}
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Vamos Conversar!
        </button>
      </div>
    </section>
  );
};
