import { useEffect, useState } from 'react';
import { CONTENT, type Language } from './config/content';
import { TechBuilderHero } from './components/TechBuilderHero';
import { ProjectsSection } from './components/ProjectsSection';
import { SiteHeader } from './components/SiteHeader';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { detectInitialLanguage, persistLanguage } from './utils/language';

const App = () => {
  const [language, setLanguage] = useState<Language>(() =>
    detectInitialLanguage(navigator.language),
  );
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = CONTENT[language].metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', CONTENT[language].metadata.description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'pt' ? 'pt_BR' : 'en_US');
  }, [language]);
  const onLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    persistLanguage(nextLanguage);
  };
  return (
    <>
      <SiteHeader language={language} onLanguageChange={onLanguageChange} />
      <main className="app-shell" id="main-content" tabIndex={-1}>
        <TechBuilderHero language={language} />
        <ProjectsSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
    </>
  );
};
export default App;
