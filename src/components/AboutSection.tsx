import { CONTENT, type Language } from '../config/content';

export const AboutSection = ({ language }: { language: Language }) => {
  const copy = CONTENT[language].about;
  return (
    <section id="about" className="about-section section" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="about-title">{copy.title}</h2>
        <p className="about-introduction">{copy.introduction}</p>
        <p>{copy.description}</p>
      </div>
      <div className="about-principles">
        <h3>{copy.approachTitle}</h3>
        <dl>
          {copy.principles.map(principle => (
            <div key={principle.title}>
              <dt>{principle.title}</dt>
              <dd>{principle.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
