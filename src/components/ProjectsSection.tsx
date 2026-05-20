import type { MouseEvent } from 'react';
import projects from '../config/projects.json';
import type { Language } from '../config/content';

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  topics?: string[];
};

const PROJECTS = projects as Project[];

const SECTION_COPY = {
  pt: {
    eyebrow: 'Portfólio',
    title: 'Projetos no ar',
    liveLabel: 'Abrir projeto',
    codeLabel: 'Ver código',
  },
  en: {
    eyebrow: 'Portfolio',
    title: 'Live projects',
    liveLabel: 'Open project',
    codeLabel: 'View code',
  },
} satisfies Record<Language, Record<string, string>>;

type ProjectsSectionProps = {
  language: Language;
};

export const ProjectsSection = ({ language }: ProjectsSectionProps) => {
  const copy = SECTION_COPY[language];

  const updatePointer = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="section-heading">
          <p className="section-eyebrow">{copy.eyebrow}</p>
          <h2 id="projects-title">{copy.title}</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <article className="project-card" key={project.githubUrl} onMouseMove={updatePointer}>
              <div className="project-card-content">
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>

                {project.topics?.length ? (
                  <ul className="project-topics" aria-label={`${project.title} topics`}>
                    {project.topics.map(topic => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-solid"
                  >
                    {copy.liveLabel}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    {copy.codeLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
