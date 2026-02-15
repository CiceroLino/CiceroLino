export type Language = 'pt' | 'en';

export type LocalizedContent = {
  badge: string;
  heading: string;
  subtitle: string;
  cardTitle: string;
  cardDescription: string;
  highlights: string[];
  ctaCode: string;
  ctaContact: string;
};

export const CONTENT: Record<Language, LocalizedContent> = {
  pt: {
    badge: 'Tech Builder',
    heading: 'Engenheiro focado em construir produto real.',
    subtitle:
      'Eu desenho arquitetura, implemento com velocidade e entrego interfaces que conectam tecnologia com objetivo de negócio.',
    cardTitle: 'Cicero Lino',
    cardDescription:
      'Software Engineer | React, Node, arquitetura full stack e entrega orientada a produto.',
    highlights: [
      'Arquitetura escalavel com foco em manutencao',
      'Do conceito ao deploy com ownership tecnico',
      'Experiencias web performaticas e impactantes',
    ],
    ctaCode: 'Ver codigo',
    ctaContact: 'Falar comigo',
  },
  en: {
    badge: 'Tech Builder',
    heading: 'Engineer focused on building real products.',
    subtitle:
      'I design architecture, implement fast, and ship interfaces that connect technology to business outcomes.',
    cardTitle: 'Cicero Lino',
    cardDescription:
      'Software Engineer | React, Node, full-stack architecture, and product-driven delivery.',
    highlights: [
      'Scalable architecture with maintainability first',
      'From concept to deployment with technical ownership',
      'Performant and high-impact web experiences',
    ],
    ctaCode: 'View code',
    ctaContact: 'Contact me',
  },
};

export const EXTERNAL_LINKS = {
  github: 'https://github.com/CiceroLino',
  contact: 'https://www.linkedin.com/in/cicerolinoeneto/',
} as const;
