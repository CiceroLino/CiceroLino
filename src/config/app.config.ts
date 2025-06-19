import { AppConfig } from "../types";

export const appConfig: AppConfig = {
  personalInfo: {
    name: "Cicero Lino",
    title: "Full Stack Developer",
    description:
      "Desenvolvedor apaixonado por criar soluções inovadoras com React, Node.js e AWS. Especializado em aplicações web escaláveis e experiências de usuário excepcionais.",
    experience:
      "2+ anos de experiência desenvolvendo aplicações web escaláveis",
    education:
      "Ciência da Computação - Em formação, com foco em desenvolvimento de software",
    availability: ["CLT", "PJ", "Cooperado", "Freelancer"],
    methodologies: [
      "Desenvolvimento ágil",
      "Código limpo",
      "Arquitetura escalável",
    ],
  },

  contactInfo: {
    email: "cicero.lino@example.com",
    whatsapp: "5511999999999",
    linkedin: "https://linkedin.com/in/cicero-lino",
    github: "https://github.com/cicero-lino",
  },

  githubUsername: "cicero-lino",

  portfolioRepos: [
    "ecommerce-platform",
    "task-management-api",
    "portfolio-website",
    "blog-api",
    "dashboard-app",
  ],

  skills: [
    { name: "React", level: 90, color: "#61DAFB", category: "frontend" },
    { name: "TypeScript", level: 80, color: "#3178C6", category: "frontend" },
    { name: "Node.js", level: 85, color: "#339933", category: "backend" },
    { name: "NestJS", level: 80, color: "#E0234E", category: "backend" },
    { name: "PostgreSQL", level: 85, color: "#336791", category: "database" },
    { name: "AWS", level: 75, color: "#FF9900", category: "devops" },
    { name: "Docker", level: 70, color: "#2496ED", category: "devops" },
    { name: "Git", level: 90, color: "#F05032", category: "tools" },
    { name: "Next.js", level: 75, color: "#000000", category: "frontend" },
    { name: "MongoDB", level: 70, color: "#47A248", category: "database" },
    { name: "Redis", level: 65, color: "#DC382D", category: "database" },
    { name: "Jest", level: 80, color: "#C21325", category: "tools" },
  ],
};
