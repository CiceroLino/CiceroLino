# Tech Builder Hero Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the current landing into a single cinematic hero page (portfolio + presentation card) using official free Aceternity UI components with bilingual auto+manual language switching.

**Architecture:** Keep a lean Vite + React + TypeScript app with one top-level `App` orchestration layer, a compact content/config module, and small UI wrappers for Aceternity components. Replace legacy visual-variant code with one direct hero flow: loader -> hero scene. Keep logic local (no global stores) and prefer static data + deterministic transitions.

**Tech Stack:** React 19, Node current LTS runtime from `.nvmrc`, TypeScript, Vite, Vitest, Testing Library, Aceternity UI component patterns (official/free), Context7 docs lookup.

---

### Task 1: Baseline + Official References

**Files:**

- Modify: `DOC.md`
- Modify: `README.md`
- Create: `docs/plans/2026-02-15-tech-builder-hero-context7-notes.md`

**Step 1: Record runtime/tooling baseline**
Run: `node -v && npm -v`
Expected: versions printed and compatible with project setup.

**Step 2: Fetch official component guidance via Context7**
Run Context7 lookups for Aceternity docs covering:

- Encrypted Text
- Multi Step Loader
- 3D Card
- Lamp Effect
  Expected: source-backed implementation notes saved in `docs/plans/2026-02-15-tech-builder-hero-context7-notes.md`.

**Step 3: Update project docs scope**
Describe new one-page cinematic hero direction and removed legacy sections in `DOC.md` and `README.md`.

**Step 4: Commit**

```bash
git add docs/plans/2026-02-15-tech-builder-hero-context7-notes.md DOC.md README.md
git commit -m "docs: align scope and capture aceternity references"
```

### Task 2: Test Harness (TDD Foundation)

**Files:**

- Modify: `package.json`
- Modify: `tsconfig.app.json`
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/test/renderApp.test.tsx`

**Step 1: Write the failing app-render test**

```tsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders main hero container', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**
Run: `npm run test -- src/test/renderApp.test.tsx`
Expected: FAIL because test tooling is not configured.

**Step 3: Add minimal testing dependencies + config**
Add `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, plus `test` script and setup files.

**Step 4: Run test to verify it passes**
Run: `npm run test -- src/test/renderApp.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add package.json package-lock.json tsconfig.app.json vitest.config.ts src/test/setup.ts src/test/renderApp.test.tsx
git commit -m "test: add vitest and baseline render test"
```

### Task 3: Language Resolution (Auto + Manual)

**Files:**

- Create: `src/config/content.ts`
- Create: `src/utils/language.ts`
- Create: `src/utils/language.test.ts`

**Step 1: Write failing tests for language rules**

```ts
import { detectInitialLanguage, LANGUAGE_STORAGE_KEY } from './language';

test('uses stored language when available', () => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en');
  expect(detectInitialLanguage('pt-BR')).toBe('en');
});

test('falls back to pt for pt locales', () => {
  localStorage.clear();
  expect(detectInitialLanguage('pt-BR')).toBe('pt');
});

test('falls back to en for non-pt locales', () => {
  localStorage.clear();
  expect(detectInitialLanguage('en-US')).toBe('en');
});
```

**Step 2: Run test to verify it fails**
Run: `npm run test -- src/utils/language.test.ts`
Expected: FAIL because module does not exist yet.

**Step 3: Write minimal implementation**
Implement `Language = 'pt' | 'en'`, storage key constant, and deterministic resolver.

**Step 4: Run test to verify it passes**
Run: `npm run test -- src/utils/language.test.ts`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/config/content.ts src/utils/language.ts src/utils/language.test.ts
git commit -m "feat: add bilingual content model and language resolver"
```

### Task 4: Loader Flow Orchestration

**Files:**

- Create: `src/components/CinematicLoader.tsx`
- Create: `src/components/CinematicLoader.test.tsx`
- Modify: `src/App.tsx`

**Step 1: Write failing test for loader transition**

```tsx
test('shows loader first and then hero content', async () => {
  render(<App />);
  expect(screen.getByText(/initializing/i)).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: /tech builder/i })).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**
Run: `npm run test -- src/components/CinematicLoader.test.tsx`
Expected: FAIL because loader and transition are not implemented.

**Step 3: Implement minimal loader orchestration**
Use `Multi Step Loader` pattern in a wrapper component and expose deterministic completion behavior for tests.

**Step 4: Run test to verify it passes**
Run: `npm run test -- src/components/CinematicLoader.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/App.tsx src/components/CinematicLoader.tsx src/components/CinematicLoader.test.tsx
git commit -m "feat: add multi-step cinematic loader flow"
```

### Task 5: Hero Scene with Lamp + Encrypted Text + 3D Card

**Files:**

- Create: `src/components/TechBuilderHero.tsx`
- Create: `src/components/TechBuilderHero.test.tsx`
- Modify: `src/index.css`

**Step 1: Write failing hero test**

```tsx
test('renders lamp scene, encrypted heading and profile 3d card actions', () => {
  render(<TechBuilderHero language="pt" onLanguageChange={() => {}} />);
  expect(screen.getByRole('button', { name: /pt\/en/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ver codigo/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /falar comigo/i })).toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**
Run: `npm run test -- src/components/TechBuilderHero.test.tsx`
Expected: FAIL because component does not exist.

**Step 3: Implement minimal hero component**
Compose official free component patterns:

- `Lamp Effect` as ambient background wrapper
- `Encrypted Text` for title/subtitle reveal
- `3D Card` for profile card with CTAs and highlights
  Include PT/EN toggle button and reduced-motion friendly behavior.

**Step 4: Run test to verify it passes**
Run: `npm run test -- src/components/TechBuilderHero.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/components/TechBuilderHero.tsx src/components/TechBuilderHero.test.tsx src/index.css
git commit -m "feat: compose tech builder hero with aceternity components"
```

### Task 6: Remove Legacy Visual Variant Surface

**Files:**

- Delete: `src/components/VisualCard.tsx`
- Delete: `src/config/featureFlags.ts`
- Modify: `src/main.tsx`

**Step 1: Write failing integration test for final app shell**

```tsx
test('final app does not expose legacy visual variant controls', () => {
  render(<App />);
  expect(screen.queryByLabelText(/seletor de variacao visual/i)).not.toBeInTheDocument();
});
```

**Step 2: Run test to verify it fails**
Run: `npm run test -- src/test/renderApp.test.tsx`
Expected: FAIL while legacy UI is still present.

**Step 3: Remove legacy files and wire final app shell**
Delete old variant system and ensure `App` renders only cinematic loader + hero flow.

**Step 4: Run tests to verify it passes**
Run: `npm run test -- src/test/renderApp.test.tsx`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/App.tsx src/main.tsx src/test/renderApp.test.tsx
git rm src/components/VisualCard.tsx src/config/featureFlags.ts
git commit -m "refactor: remove legacy visual variant system"
```

### Task 7: Full Verification Before Completion

**Files:**

- Modify: `DOC.md`

**Step 1: Run full automated checks**
Run: `npm run test`
Expected: all tests PASS.

**Step 2: Run lint and build**
Run: `npm run lint && npm run build`
Expected: lint clean and production build succeeds.

**Step 3: Update verification section in docs**
Ensure `DOC.md` reflects actual validation commands and language behavior.

**Step 4: Commit**

```bash
git add DOC.md
git commit -m "docs: finalize verification and runtime behavior"
```
