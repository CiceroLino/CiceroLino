export type Language = 'pt' | 'en';

export const EXTERNAL_LINKS = {
  github: 'https://github.com/CiceroLino',
  contact: 'https://www.linkedin.com/in/cicerolinoeneto/',
} as const;

export const CONTENT = {
  pt: {
    metadata: {
      title: 'Cicero Lino | Engenheiro de software',
      description:
        'Portfólio de Cicero Lino: aplicações web, arquitetura full stack e projetos em React, TypeScript e Flutter. Conheça Chronodex e LifeRPG.',
    },
    nav: {
      projects: 'Projetos',
      about: 'Sobre',
      contact: 'Contato',
      label: 'Navegação principal',
      skip: 'Pular para o conteúdo',
      language: 'Mudar para inglês',
      home: 'Cicero Lino — início',
    },
    hero: {
      role: 'Engenheiro de software',
      heading: 'Da ideia ao software.',
      description:
        'Desenvolvo aplicações web e experiências digitais, conectando interface, arquitetura e produto.',
      projects: 'Explorar projetos',
      contact: 'Falar comigo',
      cardLabel: 'Como eu construo',
      cardTitle: 'Da interface à arquitetura.',
      capabilities: [
        { title: 'Web', description: 'React, TypeScript e interfaces que fazem sentido.' },
        { title: 'Full stack', description: 'Node.js, arquitetura e organização da aplicação.' },
        {
          title: 'Multiplataforma',
          description: 'Dart e Flutter para explorar outras experiências.',
        },
      ],
      cardFootnote: 'Aprendizado aplicado em projetos pessoais.',
    },
    projects: {
      eyebrow: 'Trabalho em prática',
      title: 'Projetos selecionados',
      description:
        'Ferramentas que nascem de interesses reais. Aqui estão as ideias, as decisões e o que já é possível usar.',
      live: 'Ver aplicação',
      code: 'Ver código',
      details: 'Por dentro do projeto',
      problem: 'O problema',
      implementation: 'A construção',
      result: 'O resultado',
      technologies: 'Tecnologias',
    },
    about: {
      eyebrow: 'Por trás do código',
      title: 'Sobre',
      introduction:
        'Sou Cicero Lino, engenheiro de software. Gosto de transformar problemas em aplicações que as pessoas conseguem entender e usar.',
      description:
        'Meu trabalho conecta desenvolvimento de interfaces, arquitetura full stack e atenção ao produto. Nos projetos pessoais, exploro maneiras diferentes de organizar o tempo e tornar o cotidiano mais interessante.',
      approachTitle: 'O que guia meu trabalho',
      principles: [
        {
          title: 'Clareza para quem usa',
          description: 'Uma interface deve ajudar a entender o que fazer e o que acontece depois.',
        },
        {
          title: 'Código para continuar',
          description: 'Organização e manutenção fazem parte da entrega desde o começo.',
        },
        {
          title: 'Aprender construindo',
          description: 'Projetos pessoais são meu espaço para experimentar e refinar decisões.',
        },
      ],
    },
    contact: {
      eyebrow: 'Próxima conversa',
      title: 'Vamos conversar?',
      description:
        'Tem uma oportunidade, uma ideia de projeto ou quer trocar experiências sobre desenvolvimento?',
      linkedin: 'Conversar no LinkedIn',
      github: 'Explorar GitHub',
      footer: 'Feito por Cicero Lino.',
      back: 'Voltar ao início',
    },
  },
  en: {
    metadata: {
      title: 'Cicero Lino | Software Engineer',
      description:
        'Cicero Lino’s portfolio: web applications, full-stack architecture and projects in React, TypeScript and Flutter. Explore Chronodex and LifeRPG.',
    },
    nav: {
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      label: 'Main navigation',
      skip: 'Skip to content',
      language: 'Switch to Portuguese',
      home: 'Cicero Lino — home',
    },
    hero: {
      role: 'Software Engineer',
      heading: 'From idea to software.',
      description:
        'I build web applications and digital experiences, connecting interfaces, architecture and product thinking.',
      projects: 'Explore projects',
      contact: 'Get in touch',
      cardLabel: 'How I build',
      cardTitle: 'From interface to architecture.',
      capabilities: [
        { title: 'Web', description: 'React, TypeScript and interfaces that make sense.' },
        { title: 'Full stack', description: 'Node.js, architecture and application structure.' },
        { title: 'Cross-platform', description: 'Dart and Flutter to explore other experiences.' },
      ],
      cardFootnote: 'Learning through personal projects.',
    },
    projects: {
      eyebrow: 'Ideas put to work',
      title: 'Selected projects',
      description:
        'Tools that grow from real interests. The ideas, the decisions and what you can already use.',
      live: 'View application',
      code: 'View code',
      details: 'Inside the project',
      problem: 'The problem',
      implementation: 'The implementation',
      result: 'The result',
      technologies: 'Technologies',
    },
    about: {
      eyebrow: 'Behind the code',
      title: 'About',
      introduction:
        'I’m Cicero Lino, a software engineer. I enjoy turning problems into applications people can understand and use.',
      description:
        'My work connects interface development, full-stack architecture and attention to the product. In my personal projects, I explore different ways to organize time and make everyday life more interesting.',
      approachTitle: 'What guides my work',
      principles: [
        {
          title: 'Clarity for people',
          description:
            'An interface should help people understand what to do and what happens next.',
        },
        {
          title: 'Code that can evolve',
          description: 'Structure and maintainability belong in the work from the start.',
        },
        {
          title: 'Learning by building',
          description: 'Personal projects are my space to experiment and refine decisions.',
        },
      ],
    },
    contact: {
      eyebrow: 'Start a conversation',
      title: 'Let’s talk?',
      description:
        'Have an opportunity, a project idea or want to exchange experiences about software development?',
      linkedin: 'Connect on LinkedIn',
      github: 'Explore GitHub',
      footer: 'Made by Cicero Lino.',
      back: 'Back to top',
    },
  },
} as const;
