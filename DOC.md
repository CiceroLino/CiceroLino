# Documentação do projeto

## Estrutura

A página mantém quatro áreas: apresentação, projetos selecionados, sobre e contato.
`SiteHeader` oferece navegação por âncoras, troca de idioma e link para pular ao conteúdo.
`App` mantém o idioma e sincroniza o título, a descrição e o idioma do documento.

O conteúdo de interface fica em `src/config/content.ts`. Os projetos e seus estudos
de caso ficam em `src/config/projects.json`, com textos completos em PT/EN.

## Interação e acessibilidade

- Links de aplicação e repositório são independentes e usam nomes visíveis.
- Estudos de caso usam `details`/`summary`, acessíveis por teclado.
- A preferência de idioma usa `localStorage`, com fallback se o navegador bloquear
  o armazenamento ou atingir a cota.
- O único efeito de inclinação usa um frame de animação por atualização, funciona
  apenas com ponteiro preciso e respeita movimento reduzido.
- O nome permanece visível desde a primeira renderização. A frase abaixo dele tem
  digitação progressiva e reinicia ao trocar o idioma. O espaço completo é reservado
  para evitar deslocamentos; leitores de tela recebem a frase inteira. Com movimento
  reduzido, o texto aparece completo imediatamente, sem cursor animado.
- Imagens têm dimensões reservadas, texto alternativo traduzido e carregamento tardio.

## Dependências

O npm e `package-lock.json` são a fonte da instalação reproduzível. O CLI do
shadcn não é uma dependência da aplicação: o projeto não utiliza suas variantes
CSS auxiliares. `components.json` permanece disponível para uso futuro do gerador.
Motion e componentes antigos de pin/texto embaralhado foram removidos em favor
de HTML semântico e CSS. O lint-staged 17 elimina a antiga cadeia de micromatch/braces.

Na auditoria de 21/10/2026, o estado inicial apresentou 27 dependências afetadas
no npm audit e 72 avisos únicos em 23 pacotes no OSV. Depois da atualização,
ambos os scanners retornaram sem vulnerabilidades no lockfile entregue.
Esses resultados são uma fotografia daquela verificação; `npm run audit` consulta
os avisos atuais e também é executado no CI.

## Validação

Consulte os comandos no [README](README.md). Testes de dados verificam os contratos
de conteúdo e idioma; testes Playwright verificam o comportamento renderizado em
Chromium desktop e mobile, inclusive as regressões encontradas na revisão inicial.
As verificações de acessibilidade automatizadas complementam a inspeção manual.
