# Landing Page Odonto Agents Context

This document serves as the sovereign root context router (Layer 1) for AI agents operating in the `Vitoria-Rodrigues/landingpage-odonto` repository.

## Navigation

- [README.md](./README.md): Primary developer documentation, component hierarchy, and fluid responsiveness guide.
- [.agents/plugins.json](./.agents/plugins.json): Antigravity plugin registry importing domain plugins from `@vitoria-rodrigues/agent-mesh`.
- [pnpm-workspace.yaml](./pnpm-workspace.yaml): Centralized dependency catalogs (`catalogMode: strict`) and `@vitoria-rodrigues/agent-mesh` registration.
- [package.json](./package.json): Scoped package manifest (`@vitoria-rodrigues/landingpage-odonto`) and TypeScript/Vite scripts.

## Architecture

The application is a referral and loyalty landing page for Joyce Martins Odontologia built with React 19.3, TypeScript 6.0, Vite 8.3, and CSS Modules:

- **`src/App.tsx`**: Root shell assembling the clinic header, hero referral section, benefits cards grid, and footer.
- **`src/components/`**: Scoped UI components (`Button/Button.tsx`, `Card/Card.tsx`) paired with CSS Modules (`*.module.css`).
- **Fluid Layout Strategy**: Continuous viewport scaling via CSS `clamp()` utilities across `64rem`, `48rem`, and `30rem` breakpoints.
- **TypeScript Configuration**: Solution-style `tsconfig.json` referencing `tsconfig.app.json` and `tsconfig.node.json` (`tsc -b && vite build`).

## Scoped Guardrails

- MUST maintain a strict senior, objective, and technical tone across all communications, documentation, and code.
- MUST conduct conversational chat responses in Brazilian Portuguese (pt-BR) while keeping all code, configuration files, commit messages, and technical documentation in English (en-US).
- MUST NOT use emojis anywhere in code, markdown headers, body text, commit messages, or chat responses (Zero-Emoji Invariant).
- MUST use `pnpm` exclusively and consume all dependencies via `catalog:` entries in `pnpm-workspace.yaml` (never raw semver strings in `package.json`).
- MUST consume `@vitoria-rodrigues/agent-mesh` solely via `catalog:plugins-stack` and `.agents/plugins.json` without duplicating local skills or rules inside `.agents/`.
- MUST preserve CSS Modules scoping and fluid `clamp()` design tokens when modifying components.
- MUST use Conventional Commits v1.0.0 (`<type>(<scope>): <description>`) and sign commits with SSH (`git commit -S -m "..."`) when `user.signingkey` is configured.
- MUST use relative paths for all Markdown links inside repository files.

## Required Skills

When operating in this repository, agents MUST activate the relevant `@vitoria-rodrigues/agent-mesh` skill:

- **`router-architect`**: Active when authoring or auditing `AGENTS.md` context routers.
- **`readme-architect`**: Active when updating or auditing `README.md` documentation.
- **`monorepo-architect`**: Active when auditing `pnpm-workspace.yaml` catalogs or `package.json` manifests.
- **`github-flow-operator`**: Active when creating branches, commits, or pull requests.
- **`browser-auditor`**: Active when inspecting responsive breakpoints or form behavior in a browser.
