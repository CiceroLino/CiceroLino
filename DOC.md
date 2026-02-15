# Documentacao do Projeto

## Escopo Atual

Landing page pessoal single-page com hero cinematográfico e narrativa `Tech builder`.

## Princípios

- Impactante
- Experimental
- Direto ao ponto
- Enxuto (sem peças desnecessárias)

## Componentes Utilizados

Baseado nos componentes oficiais gratuitos do Aceternity UI:

- Encrypted Text
- Multi Step Loader
- 3D Card
- Lamp Effect

## Conteudo

Os textos ficam centralizados em `src/config/content.ts` com suporte PT/EN.

## Idioma

- Automático por `navigator.language`
- Troca manual por botão PT/EN
- Preferência persistida em `localStorage`

## Verificacao

```bash
npm run test
npm run lint
npm run build
```
