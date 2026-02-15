# Cicero Lino - Tech Builder Hero

Página pessoal em React + Vite + TypeScript com hero cinematográfico bilíngue (PT/EN), posicionada como meio termo entre portfólio e cartão de apresentação.

## Stack

- React 19
- Node 24 (runtime atual do ambiente)
- TypeScript
- Vite

## Experiência

- `Multi Step Loader` (entrada curta em etapas)
- `Lamp Effect` (ambiente visual principal)
- `Encrypted Text` (headline com reveal)
- `3D Card` (cartão de perfil com CTAs)
- Idioma `auto + manual` (detecção do navegador e toggle persistido)

## Scripts

```bash
npm install
npm run dev
npm run test
npm run lint
npm run build
npm run preview
```

## Estrutura Atual

- `src/App.tsx`: orquestra fluxo de loading para hero
- `src/components/CinematicLoader.tsx`: loader em múltiplas etapas
- `src/components/TechBuilderHero.tsx`: hero principal com efeitos
- `src/config/content.ts`: conteúdo bilíngue e CTAs
- `src/utils/language.ts`: detecção e persistência de idioma
- `src/index.css`: layout global e estilo visual
