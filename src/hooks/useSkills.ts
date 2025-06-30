import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Skill } from '../types';
import { githubService } from '../services/github.service';
import { appConfig } from '../config/app.config';

export const useSkills = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState<Skill[]>(appConfig.skills);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateSkillsFromGitHub = async () => {
    try {
      setLoading(true);
      const languageStats = await githubService.getSkillsFromRepositories();

      // Atualiza skills existentes com dados do GitHub
      const updatedSkills = appConfig.skills.map(skill => {
        const githubCount = languageStats[skill.name] || 0;
        // Calcula nível baseado no número de repositórios + nível base
        const newLevel = Math.min(100, skill.level + githubCount * 5);

        return {
          ...skill,
          level: newLevel,
        };
      });

      setSkills(updatedSkills);
      setError(null);
    } catch (err) {
      setError(t('skills.updateError'));
      console.error('Error updating skills:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Atualiza skills do GitHub na inicialização
    updateSkillsFromGitHub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return {
    skills,
    loading,
    error,
    updateSkillsFromGitHub,
  };
};
