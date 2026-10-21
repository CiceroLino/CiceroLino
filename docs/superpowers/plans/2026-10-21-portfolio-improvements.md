# Portfolio Improvements Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task by task.

**Goal:** Deliver the approved portfolio improvements and resolve known dependency advisories.

**Architecture:** Retain the existing SPA. Centralize bilingual content and project
metadata, compose small semantic sections, and use CSS for restrained visual effects.

**Tech Stack:** React 19, TypeScript, Vite 7, Tailwind 4, Node 24, npm and Playwright.

**Spec:** `docs/superpowers/specs/2026-10-21-portfolio-improvements.md`

## Global Constraints

- Use verified project facts; no invented professional history or contact data.
- Preserve the current visual identity and package manager.
- Work on `feat/portfolio-improvements`; keep changes reviewable and local.
- Finalize the approved scope in one local English Conventional Commit after
  verification. Do not push, merge or deploy.

## Review Focus

- 320px/768px viewports and long English content must fit.
- Storage exceptions must not prevent rendering or language switching.
- Every keyboard focus target must be visible and actionable.
- Reduced motion must cover JavaScript, CSS and pointer interactions.
- Project assets and both live/code links must match their real destinations.

### Task 1: Behavioral regression coverage

**Files:** `playwright.config.ts`, `tests/e2e/portfolio.spec.ts`, `tests/language.test.mjs`, `package.json`.
**Interfaces:** Browser tests consume the production preview; language tests consume
`detectInitialLanguage(browserLanguage?: string)` and `persistLanguage(language)`.

- [x] Add browser coverage for viewport overflow, keyboard targets, bilingual
      persistence, blocked storage, reduced motion, project links and metadata.
- [x] Run against the original UI and observe failures for the diagnosed behavior.

### Task 2: Dependency remediation

**Files:** `package.json`, `package-lock.json`, `src/index.css`, optional local vendor CSS.
**Interfaces:** Keep Vite build and existing npm scripts compatible.

- [x] Record npm/OSV baseline and trace vulnerable dependency chains.
- [x] Remove unused CLI/runtime dependencies, update compatible dependency versions,
      and add narrowly scoped overrides only for remaining advisories.
- [x] Run clean installation, npm audit and OSV against `package-lock.json`.

### Task 3: Portfolio content and interface

**Files:** `src/config/*`, `src/components/*`, `src/App.tsx`, `src/index.css`,
`src/utils/language.ts`, `public/*`, `index.html`.
**Interfaces:** Shared `Language` type, typed localized project metadata and verified URLs.

- [x] Implement identity/navigation, project case summaries, about and contact.
- [x] Add real project visuals with fixed dimensions and localized alternative text.
- [x] Fix storage, document language, keyboard, layout and reduced motion behavior.
- [x] Add favicon, social metadata/image and sitemap.
- [x] Pass behavior tests and inspect desktop/mobile screenshots.

### Task 4: Delivery checks and documentation

**Files:** `.github/workflows/lint.yml`, `README.md`, `DOC.md`, `.gitignore`.

- [x] Align Node 24 and add tests/build/audit/browser checks to CI.
- [x] Document setup, content maintenance, image provenance and validation.
- [x] Run clean install, tests, lint, format, build, browser tests, npm audit and OSV.
- [x] Review the full diff and report local results and any concrete limits.

## Verification record

- Initial regressions: 7 failing browser checks and a failing storage unit test.
- Clean installation, lint, formatting, 6 unit tests and production build passed.
- 30 browser tests passed across desktop and mobile, including expanded English
  case studies, keyboard activation, blocked storage, reduced motion and the
  restored typewriter effect.
- npm audit and OSV both returned no vulnerabilities for the delivered lockfile.
- Independent read-only review found no Critical or Important issues. Its image
  description observation was corrected to match the visible LifeRPG profile.
- The user authorized one local Conventional Commit. No remote CI run, push or
  deployment occurred.
