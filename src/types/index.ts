export interface Skill {
  name: string;
  level: number;
  color: string;
  category: "frontend" | "backend" | "devops" | "database" | "tools";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live?: string;
  featured: boolean;
  githubData?: GitHubRepoData;
}

export interface GitHubRepoData {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  experience: string;
  education: string;
  availability: string[];
  methodologies: string[];
}

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface AppConfig {
  personalInfo: PersonalInfo;
  contactInfo: ContactInfo;
  skills: Skill[];
  portfolioRepos: string[]; // Lista de nomes de repositórios para incluir no portfólio
  githubUsername: string;
}
