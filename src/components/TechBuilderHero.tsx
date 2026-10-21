import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CONTENT, type Language } from '../config/content';
import { LampContainer } from './ui/LampEffect';
import { CardBody, CardContainer } from './ui/ThreeDCard';
import { TypewriterText } from './ui/TypewriterText';

export const TechBuilderHero = ({ language }: { language: Language }) => {
  const copy = CONTENT[language].hero;
  return (
    <LampContainer>
      <div className="hero-wrapper">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="accent-dot" aria-hidden="true" />
            {copy.role}
          </p>
          <h1>
            Cicero Lino<span className="name-period">.</span>
          </h1>
          <p className="hero-heading">
            <TypewriterText key={copy.heading} text={copy.heading} />
          </p>
          <p className="hero-subtitle">{copy.description}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#projects">
              {copy.projects}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              {copy.contact}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <CardContainer>
          <CardBody>
            <div className="card-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="eyebrow">{copy.cardLabel}</p>
            <h2>{copy.cardTitle}</h2>
            <dl className="capabilities">
              {copy.capabilities.map(item => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
            <p className="card-footnote">{copy.cardFootnote}</p>
          </CardBody>
        </CardContainer>
      </div>
    </LampContainer>
  );
};
