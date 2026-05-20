import projects from '../config/projects.json';
import type { Language } from '../config/content';
import { PinContainer } from './ui/3d-pin';

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
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

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="section-heading">
          <p className="section-eyebrow">{copy.eyebrow}</p>
          <h2 id="projects-title">{copy.title}</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <PinContainer
              key={project.githubUrl}
              href={project.liveUrl ?? project.githubUrl}
              title={project.liveUrl ?? project.githubUrl}
              containerClassName="project-pin-container"
              className="project-pin-content"
            >
              <article className="project-card">
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
                  <span className="btn btn-solid">
                    {project.liveUrl ? copy.liveLabel : copy.codeLabel}
                  </span>
                </div>
              </article>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};
