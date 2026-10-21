import { ArrowUpRight, ChevronDown, Code2 } from 'lucide-react';
import projects from '../config/projects.json';
import { CONTENT, type Language } from '../config/content';

export const ProjectsSection = ({ language }: { language: Language }) => {
  const copy = CONTENT[language].projects;
  return (
    <section id="projects" className="projects-section section" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="projects-title">{copy.title}</h2>
        <p className="section-description">{copy.description}</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => {
          const localized = project[language];
          return (
            <article
              className="project-card"
              key={project.id}
              aria-labelledby={`${project.id}-title`}
            >
              <figure className={`project-visual project-visual-${project.id}`}>
                <img
                  src={project.image}
                  alt={localized.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="project-content">
                <p className="project-category">{localized.category}</p>
                <h3 id={`${project.id}-title`}>{project.title}</h3>
                <p className="project-description">{localized.description}</p>
                <ul className="project-topics" aria-label={copy.technologies}>
                  {project.topics.map(topic => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  {project.liveUrl ? (
                    <a
                      className="btn btn-solid"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.live}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                  <a
                    className="btn btn-ghost"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {copy.code}
                    <Code2 size={16} aria-hidden="true" />
                  </a>
                </div>
                <details className="project-details">
                  <summary>
                    {copy.details}
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <dl>
                    <div>
                      <dt>{copy.problem}</dt>
                      <dd>{localized.problem}</dd>
                    </div>
                    <div>
                      <dt>{copy.implementation}</dt>
                      <dd>{localized.implementation}</dd>
                    </div>
                    <div>
                      <dt>{copy.result}</dt>
                      <dd>{localized.result}</dd>
                    </div>
                  </dl>
                </details>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
