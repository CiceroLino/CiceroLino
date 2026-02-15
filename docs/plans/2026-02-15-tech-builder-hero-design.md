# Tech Builder Hero Design

## Objetivo

Refazer a landing atual para uma página pessoal híbrida (meio portfólio, meio cartão de apresentação), com identidade visual impactante/experimental e narrativa "Tech builder".

## Direção Criativa

- Estilo: impactante e experimental
- Narrativa principal: Tech builder
- Idioma: bilíngue (PT/EN)
- Estratégia de idioma: auto + manual (detecção de `navigator.language` com troca manual persistida)

## Escopo

- Single-page com hero único full-screen
- Uso de componentes oficiais gratuitos do Aceternity UI:
  - Encrypted Text
  - Multi Step Loader
  - 3D Card
  - Lamp Effect
- Conteúdo direto para apresentação pessoal com CTAs de contato e código

## Não Escopo

- Seções longas de portfólio tradicional
- Blog ou feed dinâmico
- Integrações externas em runtime
- Estruturas antigas de variantes visuais e feature flags atuais

## Arquitetura

- Stack mantida: Vite + React + TypeScript
- Composição mínima: `App.tsx` como orquestrador de loading + hero
- Conteúdo centralizado em um arquivo de dados bilíngue
- CSS enxuto com foco em layout e integração com os componentes do Aceternity

## Componentes

- `MultiStepLoader`: introdução curta em 2-3 etapas (boot narrativo)
- `LampEffect`: ambiente visual principal do hero
- `EncryptedText`: headline/subheadline com reveal no idioma ativo
- `3DCard`: cartão central com identidade, stack e CTAs

## Fluxo de UX

1. Exibir `MultiStepLoader` por poucos segundos.
2. Transicionar para hero full-screen com `LampEffect`.
3. Mostrar conteúdo principal com `EncryptedText` e `3DCard`.
4. Permitir alternância PT/EN com persistência local.

## Conteúdo

- Posicionamento profissional em tom de construção/entrega técnica
- Highlights técnicos curtos (3 pontos)
- CTAs principais:
  - Falar comigo
  - Ver código

## Responsividade e Acessibilidade

- Layout adaptado para mobile e desktop
- Contraste e leitura priorizados
- Respeito a `prefers-reduced-motion` para animações
- Botões com rótulos claros e foco visível

## Verificação

- `npm run lint`
- `npm run build`
- Validação manual de:
  - idioma automático
  - toggle manual
  - persistência de idioma
  - renderização dos 4 componentes do Aceternity
