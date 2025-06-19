import { useState, useEffect } from "react";
import { Project } from "../types";
import { githubService } from "../services/github.service";

export const usePortfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const portfolioProjects =
          await githubService.getPortfolioRepositories();
        setProjects(portfolioProjects);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar projetos do portfólio");
        console.error("Error fetching portfolio:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
