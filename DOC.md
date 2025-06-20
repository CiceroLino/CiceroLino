# Cicero Lino - Portfolio Website

Landing page pessoal desenvolvida com React, TypeScript e Framer Motion, focada em apresentar habilidades profissionais e portfólio de projetos.

## 🚀 Características

- **Design Responsivo**: Adaptável a todos os dispositivos
- **Tema Dinâmico**: Suporte a modo dark/light com persistência
- **Animações Suaves**: Transições elegantes com Framer Motion
- **Integração GitHub**: Dados dinâmicos dos repositórios
- **Arquitetura Modular**: Componentes reutilizáveis e bem organizados
- **TypeScript**: Tipagem forte para melhor manutenibilidade

## 🏗️ Arquitetura

```
src/
├── components/          # Componentes React
│   ├── Navbar.tsx      # Navegação com toggle de tema
│   ├── HeroSection.tsx # Seção principal
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── PortfolioSection.tsx
│   ├── BlogSection.tsx
│   └── ContactSection.tsx
├── contexts/           # Context API
│   └── ThemeContext.tsx
├── hooks/             # Hooks customizados
│   ├── usePortfolio.ts
│   └── useSkills.ts
├── services/          # Serviços externos
│   └── github.service.ts
├── types/             # Definições TypeScript
│   └── index.ts
├── config/            # Configurações
│   └── app.config.ts
├── utils/             # Utilitários
│   └── styles.ts
└── App.tsx           # Componente principal
```

## 🛠️ Tecnologias

- **React 19** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Framer Motion** - Animações
- **GitHub API** - Dados dinâmicos
- **Font Awesome** - Ícones

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/cicero-lino/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install

# Execute em desenvolvimento
npm start
```

## ⚙️ Configuração

### 1. Dados Pessoais

Edite `src/config/app.config.ts` para personalizar:

```typescript
export const appConfig: AppConfig = {
  personalInfo: {
    name: "Seu Nome",
    title: "Sua Profissão",
    // ... outras informações
  },
  contactInfo: {
    email: "seu@email.com",
    whatsapp: "5511999999999",
    linkedin: "https://linkedin.com/in/seu-perfil",
    github: "https://github.com/seu-usuario",
  },
  githubUsername: "seu-usuario",
  portfolioRepos: [
    "repo-1",
    "repo-2",
    // ... repositórios para incluir no portfólio
  ],
};
```

### 2. Skills

As skills são configuradas em `app.config.ts` e podem ser atualizadas dinamicamente com base nos repositórios do GitHub:

```typescript
skills: [
  { name: "React", level: 90, color: "#61DAFB", category: "frontend" },
  { name: "Node.js", level: 85, color: "#339933", category: "backend" },
  // ... outras skills
];
```

### 3. Integração GitHub

O sistema automaticamente:

- Busca repositórios do usuário configurado
- Filtra repositórios marcados como portfólio
- Extrai tecnologias dos topics dos repositórios
- Calcula estatísticas de uso das linguagens

## 🎨 Temas

O sistema suporta dois temas:

### Dark Theme (Padrão)

- Cores escuras com destaque em azul ciano
- Vídeo de fundo com overlay escuro
- Efeitos de blur e transparência

### Light Theme

- Cores claras com destaque em azul
- Fundo branco com sombras suaves
- Contraste otimizado para leitura

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Grid Adaptativo**: Layout que se adapta ao tamanho da tela
- **Touch Friendly**: Elementos otimizados para toque

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
# Faça upload da pasta build para o Vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta build para o Netlify
```

### GitHub Pages

```bash
npm run build
# Configure o GitHub Actions para deploy automático
```

## 🔧 Desenvolvimento

### Estrutura de Componentes

Cada componente segue o padrão:

- Props tipadas com TypeScript
- Hooks para lógica de negócio
- Estilos baseados no tema atual
- Animações com Framer Motion

### Adicionando Novas Seções

1. Crie o componente em `src/components/`
2. Adicione os tipos necessários em `src/types/`
3. Configure no `app.config.ts` se necessário
4. Importe no `App.tsx`

### Seção Jornada (Timeline)

A seção **Jornada** apresenta de forma visual e cronológica sua trajetória profissional, acadêmica e principais conquistas. Ela utiliza um layout vertical simples, com cards empilhados, ícones temáticos e uma linha do tempo à esquerda, garantindo ótima visualização em qualquer tema e dispositivo.

**Principais características:**

- Layout vertical, responsivo e centralizado
- Cards com informações de cargo, empresa, período, descrição, conquistas e tecnologias
- Ícones circulares à esquerda de cada evento, com cor temática
- Linha vertical conectando os eventos
- Chamada para ação ao final, incentivando contato

**Como personalizar:**

- Os eventos da timeline estão definidos no componente `src/components/TimelineSection.tsx` no array `timelineEvents`.
- Cada evento possui os campos: `year`, `month`, `title`, `company`, `description`, `technologies`, `type`, `icon`, `achievements`.
- Para adicionar, remover ou editar eventos, basta modificar esse array.
- Os ícones utilizam classes do Font Awesome (ex: `fas fa-briefcase`).
- As cores dos eventos são definidas pela função `getEventColor` de acordo com o tipo (`work`, `education`, `opensource`, `project`).

**Exemplo de evento:**

```js
{
  year: "2024",
  month: "Jan - Presente",
  title: "Full Stack Developer Senior",
  company: "TechCorp Solutions",
  description: "Liderando desenvolvimento de aplicações web escaláveis...",
  technologies: ["React", "Node.js", "AWS"],
  type: "work",
  icon: "fas fa-briefcase",
  achievements: ["Redução de 40% no tempo de carregamento"]
}
```

A seção é totalmente customizável e pode ser expandida para incluir outros tipos de eventos ou estilos conforme sua necessidade.

### Customizando Estilos

Edite `src/utils/styles.ts` para:

- Modificar paleta de cores
- Ajustar transições
- Personalizar sombras e efeitos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

- **Email**: cicero.lino@example.com
- **LinkedIn**: [Cicero Lino](https://linkedin.com/in/cicero-lino)
- **GitHub**: [@cicero-lino](https://github.com/cicero-lino)

---

Desenvolvido com ❤️ por Cicero Lino

```typescript
import {
  getCoffee,
  turnOnComputer,
  getConnection,
  getBackToWork,
} from "./shared/utils/environment";

interface SoftwareDeveloper {
  readonly age: number;
  readonly languages: readonly string[];
  readonly knowledge: readonly string[];
  readonly hobbies: readonly string[];
  readonly whoami: readonly string[];
}

type WorkingStatus = "productive" | "distracted" | "offline";

const cicero: Readonly<SoftwareDeveloper> = {
  age: 24,
  languages: ["Portuguese", "English", "Japanese"] as const, // Still trying to learn Japanese
  knowledge: [
    "Mostly Backend",
    "Mostly SQL Database",
    "Serverless & Cloud Formation",
    "Message Broker",
    "A bit of frontend",
  ] as const,
  hobbies: [
    "Update my knowledge about tech and science",
    "Upgrade my English and Japanese",
    "Watch Anime",
    "Listen to music",
    "Read manga and comics",
  ] as const,
  whoami: [
    "Geek",
    "Computer Science Student",
    "Software Engineer",
    "Linux User",
  ] as const,
};

export async function getWorkingStatus(
  programmer: SoftwareDeveloper
): Promise<WorkingStatus> {
  try {
    const [coffee, computer, wifi] = await Promise.all([
      getCoffee(),
      turnOnComputer(),
      getConnection(),
    ]);

    return await getBackToWork(programmer, coffee, computer, wifi);
  } catch (error) {
    console.error("Error getting working status:", error);
    return "offline";
  }
}

// This code works on all machines, not just mine! 😎🚀
```

<img align="right" src="https://pa1.aminoapps.com/7514/9dc211dbf4b9bcc1a1348c975bd642ad45ddaeffr1-480-270_hq.gif" alt="Lofi vibe" />
