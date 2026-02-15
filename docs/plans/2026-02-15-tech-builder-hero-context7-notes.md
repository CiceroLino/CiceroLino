# Context7 Notes - Aceternity UI (2026-02-15)

## Source Resolution

- Library selected: `/websites/ui_aceternity_components`
- Reason: official Aceternity component docs source with highest relevance and broad snippet coverage.

## Verified References

- Encrypted Text: https://ui.aceternity.com/components/encrypted-text
- Multi Step Loader: https://ui.aceternity.com/components/multi-step-loader
- 3D Card Effect: https://ui.aceternity.com/components/3d-card-effect
- Lamp Effect: https://ui.aceternity.com/components/lamp-effect

## Context7 Extracted Usage Signals

- Encrypted Text:
  - Import pattern returned: `EncryptedText` from `@aceternity/encrypted-text`
  - Minimal usage: pass a `text` prop.
- 3D Card Effect:
  - Import pattern returned: `CardContainer`, `CardBody`, `CardItem` from `@aceternity/ui-3d-card`
  - Key props observed: `translateZ`, optional `rotateX`, `rotateZ`.
- Multi Step Loader:
  - Official install command returned: `npx shadcn@latest add @aceternity/multi-step-loader`
- Lamp Effect:
  - Official install command returned: `npx shadcn@latest add @aceternity/lamp`

## Implementation Decision

This project will implement local React versions aligned with the official free component patterns (same interaction semantics and visual intent), avoiding heavy setup and preserving a minimal Vite build.
