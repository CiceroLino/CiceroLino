import { useMemo, useState } from 'react';
import type { Language } from './config/content';
import { TechBuilderHero } from './components/TechBuilderHero';
import { ProjectsSection } from './components/ProjectsSection';
import { detectInitialLanguage, persistLanguage } from './utils/language';

const App = () => {
  const initialLanguage = useMemo(() => detectInitialLanguage(navigator.language), []);
  const [language, setLanguage] = useState<Language>(initialLanguage);

  const onLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    persistLanguage(nextLanguage);
  };

  return (
    <main className="app-shell">
      <TechBuilderHero language={language} onLanguageChange={onLanguageChange} />
      <ProjectsSection language={language} />
    </main>
  );
};

export default App;
