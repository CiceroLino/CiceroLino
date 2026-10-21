import { CONTENT, type Language } from '../config/content';

type SiteHeaderProps = { language: Language; onLanguageChange: (language: Language) => void };

export const SiteHeader = ({ language, onLanguageChange }: SiteHeaderProps) => {
  const copy = CONTENT[language].nav;
  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>
      <div className="header-inner">
        <a className="wordmark" href="#top" aria-label={`cl — ${copy.home}`}>
          cl<span aria-hidden="true">.</span>
        </a>
        <nav aria-label={copy.label}>
          <a href="#projects">{copy.projects}</a>
          <a href="#about">{copy.about}</a>
          <a href="#contact">{copy.contact}</a>
        </nav>
        <button
          type="button"
          className="lang-toggle"
          aria-label={`PT EN — ${copy.language}`}
          onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
        >
          <span className={language === 'pt' ? 'current-language' : undefined}>PT</span>
          <span aria-hidden="true">/</span>
          <span className={language === 'en' ? 'current-language' : undefined}>EN</span>
        </button>
      </div>
    </header>
  );
};
