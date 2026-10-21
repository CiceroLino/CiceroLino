import { ArrowUp, ArrowUpRight, Code2, MessageSquare } from 'lucide-react';
import { CONTENT, EXTERNAL_LINKS, type Language } from '../config/content';

export const ContactSection = ({ language }: { language: Language }) => {
  const copy = CONTENT[language].contact;
  return (
    <>
      <section id="contact" className="contact-section section" aria-labelledby="contact-title">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="contact-title">{copy.title}</h2>
        <p>{copy.description}</p>
        <div className="contact-actions">
          <a
            className="btn btn-solid"
            href={EXTERNAL_LINKS.contact}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare size={18} aria-hidden="true" />
            {copy.linkedin}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className="btn btn-ghost"
            href={EXTERNAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={18} aria-hidden="true" />
            {copy.github}
          </a>
        </div>
      </section>
      <footer className="site-footer section">
        <p>
          © {new Date().getFullYear()} · {copy.footer}
        </p>
        <a href="#top">
          {copy.back}
          <ArrowUp size={15} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
};
