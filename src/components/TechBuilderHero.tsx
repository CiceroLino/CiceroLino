import { CONTENT, EXTERNAL_LINKS, type Language } from '../config/content';
import { EncryptedText } from './ui/EncryptedText';
import { LampContainer } from './ui/LampEffect';
import { CardBody, CardContainer, CardItem } from './ui/ThreeDCard';

type TechBuilderHeroProps = {
  language: Language;
  onLanguageChange: (nextLanguage: Language) => void;
};

export const TechBuilderHero = ({ language, onLanguageChange }: TechBuilderHeroProps) => {
  const content = CONTENT[language];

  return (
    <LampContainer>
      <div className="hero-wrapper">
        <header className="hero-header">
          <button
            type="button"
            className="lang-toggle"
            aria-label="PT/EN"
            onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
          >
            {language.toUpperCase()} / {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="hero-badge">{content.badge}</p>
            <h1>
              <EncryptedText text={content.heading} className="hero-title" />
            </h1>
            <p className="hero-subtitle">{content.subtitle}</p>
          </div>

          <CardContainer>
            <CardBody>
              <CardItem as="h2" className="profile-name" translateZ="42px">
                {content.cardTitle}
              </CardItem>

              <CardItem as="p" className="profile-description" translateZ="58px" rotateX={-4}>
                {content.cardDescription}
              </CardItem>

              <CardItem as="ul" className="profile-highlights" translateZ="66px">
                {content.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </CardItem>

              <CardItem className="profile-actions" translateZ="76px">
                <a
                  href={EXTERNAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  {content.ctaCode}
                </a>
                <a href={EXTERNAL_LINKS.contact} className="btn btn-solid">
                  {content.ctaContact}
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </LampContainer>
  );
};
