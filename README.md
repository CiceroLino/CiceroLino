# Cicero Lino · Portfolio

Portfólio pessoal em React e TypeScript, com conteúdo em português e inglês.

[Site](https://cicero-lino.vercel.app) · [GitHub](https://github.com/CiceroLino) · [LinkedIn](https://www.linkedin.com/in/cicerolinoeneto/)

## Desenvolvimento

Use Node.js 24, conforme `.nvmrc`, e npm. O lockfile deve permanecer versionado.

```bash
npm ci
npm run dev
```

O servidor local usa a porta 3000. Para verificar a versão de produção:

```bash
npm run build
npm run preview
```

## Verificação

```bash
npm run lint
npm run format:check
npm test
npm run build
npm run audit
npx playwright install chromium
npm run test:e2e
```

Os testes de navegador usam o build existente e iniciam um preview isolado na porta 4178. Execute `npm run build` antes deles. O CI executa todas essas verificações,
incluindo instalação do Chromium e auditoria de dependências.

Os testes cobrem tradução e persistência de idioma, armazenamento indisponível,
layout de 320px a 1440px, navegação por teclado, movimento reduzido, links,
metadados e verificações automatizadas de acessibilidade com axe.

Para uma segunda auditoria local, se o OSV Scanner estiver instalado:

```bash
osv-scanner scan source --lockfile package-lock.json
```

## Conteúdo e identidade

- `src/config/content.ts`: navegação, apresentação, sobre, contato e metadados PT/EN.
- `src/config/projects.json`: projetos, links, imagens e estudos de caso PT/EN.
- `public/images/`: capturas reais; veja [origem dos assets](docs/assets.md).
- `src/index.css`: identidade visual e layout responsivo.
- `index.html`: metadados estáticos para busca e compartilhamento.
- `public/social-card.svg`: fonte editável da imagem de compartilhamento.

Para renderizar novamente a imagem de compartilhamento após editar o SVG:

```bash
node scripts/generate-social-card.mjs
```

O projeto usa o LinkedIn existente como canal de contato. Adicione currículo,
experiência profissional ou outros contatos somente com informações confirmadas.
Ao trocar o domínio público, atualize canonical, metadados sociais, `sitemap.xml`
e a referência em `robots.txt`.
