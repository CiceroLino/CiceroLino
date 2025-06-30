import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { type GitHubStats } from '../types';
import { githubService } from '../services/github.service';

export const useGitHubStats = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const githubStats = await githubService.getUserStats();
        setStats(githubStats);
        setError(null);
      } catch (err) {
        setError(t('skills.loadingError'));
        console.error('Error fetching GitHub stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [t]);

  return { stats, loading, error };
};
