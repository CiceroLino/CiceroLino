import { useState, useEffect } from "react";
import { GitHubStats } from "../types";
import { githubService } from "../services/github.service";

export const useGitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const userStats = await githubService.getUserStats();
        setStats(userStats);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar estatísticas do GitHub");
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading, error };
};
