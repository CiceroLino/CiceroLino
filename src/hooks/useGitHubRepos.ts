import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { type Repository } from '../types';
import { githubService } from '../services/github.service';

export const useGitHubRepos = () => {
  const { t } = useTranslation();
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
        setError(t('portfolio.loadingError'));
        console.error('Error fetching repositories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [t]);

  return { repos, loading, error };
};
