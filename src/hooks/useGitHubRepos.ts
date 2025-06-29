import { useState, useEffect } from 'react';
import { type Repository } from '../types';
import { githubService } from '../services/github.service';

export const useGitHubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const repositories = await githubService.getRepositories();
        setRepos(repositories);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar repositórios do GitHub');
        console.error('Error fetching repos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
};
