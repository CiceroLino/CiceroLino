import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '../types';
import { githubService } from '../services/github.service';

export const usePortfolio = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const portfolioProjects = await githubService.getPortfolioRepositories();
        setProjects(portfolioProjects);
        setError(null);
      } catch (err) {
        setError(t('portfolio.loadingError'));
        console.error('Error fetching portfolio:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [t]);

  return { projects, loading, error };
};
