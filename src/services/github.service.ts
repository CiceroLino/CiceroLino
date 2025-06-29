import { type Project, type Repository, type GitHubStats } from '../types';
import { appConfig } from '../config/app.config';

class GitHubService {
  private baseUrl = 'https://api.github.com';
  private username = appConfig.githubUsername;

  async getRepositories(): Promise<Repository[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=100`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  }

  async getUserStats(): Promise<GitHubStats> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${this.username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user stats');
      }
      const userData = await response.json();

      return {
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        created_at: userData.created_at,
        updated_at: userData.updated_at,
      };
    } catch (error) {
      console.error('Error fetching user stats:', error);
      return {
        public_repos: 0,
        followers: 0,
        following: 0,
        created_at: '',
        updated_at: '',
      };
    }
  }

  async getPortfolioRepositories(): Promise<Project[]> {
    try {
      const allRepos = await this.getRepositories();
      const portfolioRepos = allRepos.filter(
        repo => appConfig.portfolioRepos.includes(repo.name) || repo.topics.includes('portfolio'),
      );

      return portfolioRepos.map(repo => ({
        id: repo.name,
        title: this.formatRepoName(repo.name),
        description: repo.description || 'Projeto desenvolvido com tecnologias modernas',
        technologies: this.extractTechnologies(repo),
        image: `https://via.placeholder.com/300x200/1a1a1a/00bfff?text=${encodeURIComponent(
          repo.name,
        )}`,
        github: repo.html_url,
        live: repo.homepage || undefined,
        featured: repo.stargazers_count > 0,
        githubData: {
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics,
        },
      }));
    } catch (error) {
      console.error('Error fetching portfolio repositories:', error);
      return [];
    }
  }

  async getSkillsFromRepositories(): Promise<{ [key: string]: number }> {
    try {
      const repos = await this.getRepositories();
      const languageStats: { [key: string]: number } = {};

      repos.forEach(repo => {
        if (repo.language) {
          languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
        }
      });

      return languageStats;
    } catch (error) {
      console.error('Error calculating skills from repositories:', error);
      return {};
    }
  }

  private formatRepoName(name: string): string {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private extractTechnologies(repo: Repository): string[] {
    const technologies: string[] = [];

    // Adiciona linguagem principal
    if (repo.language) {
      technologies.push(repo.language);
    }

    // Adiciona tecnologias baseadas nos topics
    const techMapping: { [key: string]: string } = {
      react: 'React',
      typescript: 'TypeScript',
      nodejs: 'Node.js',
      nestjs: 'NestJS',
      postgresql: 'PostgreSQL',
      mongodb: 'MongoDB',
      docker: 'Docker',
      aws: 'AWS',
      nextjs: 'Next.js',
      jest: 'Jest',
      redis: 'Redis',
    };

    repo.topics.forEach(topic => {
      if (techMapping[topic.toLowerCase()]) {
        technologies.push(techMapping[topic.toLowerCase()]);
      }
    });

    return Array.from(new Set(technologies)); // Remove duplicatas
  }
}

export const githubService = new GitHubService();
