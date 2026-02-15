import { useMemo, useState } from 'react';
import { CONTENT, type Language } from './config/content';
import { CinematicLoader } from './components/CinematicLoader';
import { TechBuilderHero } from './components/TechBuilderHero';
import { detectInitialLanguage, persistLanguage } from './utils/language';

const App = () => {
  const initialLanguage = useMemo(() => detectInitialLanguage(navigator.language), []);
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [loading, setLoading] = useState(true);

  const onLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    persistLanguage(nextLanguage);
  };

  return (
    <main className="app-shell">
      {loading ? (
        <CinematicLoader
          loadingStates={CONTENT[language].loaderSteps}
          loading={loading}
          onComplete={() => setLoading(false)}
        />
      ) : null}

      <TechBuilderHero language={language} onLanguageChange={onLanguageChange} />
    </main>
  );
};

export default App;
