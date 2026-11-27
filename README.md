# Joyce Martins Odontologia - Referral Landing Page (`@vitoria-rodrigues/landingpage-odonto`)

A responsive referral and loyalty landing page for Joyce Martins Odontologia, built with React, TypeScript, and fluid CSS design principles.

---

## Technology Stack

- **Runtime and Framework**: React 19.3
- **Language**: TypeScript 6.0
- **Build Tool**: Vite 8.3
- **Styling Architecture**: Plain CSS, CSS Modules, and fluid `clamp()` utilities
- **Icons**: React Icons 5.7
- **Linter**: ESLint 10
- **Package Management**: pnpm 10 with `catalogMode: strict`

---

## Architecture and Component Hierarchy

The application follows a component-driven structure with dedicated modular styles and fluid layout scaling.

```mermaid
flowchart TD
  direction TD

  subgraph Shell["Application Shell (App.tsx)"]
    direction TD
    Header["Header (.header)"]
    Main["Main Content (.main)"]
    Footer["Footer (.footer)"]
  end

  subgraph HeaderScope["Header Elements"]
    direction TD
    Logo["Clinic Logo"]
    HeaderBtn["Header Button (.header-btn)"]
  end

  subgraph MainScope["Main Content Sections"]
    direction TD
    Principal["Principal Section (.principal)"]
    Cards["Benefits Section (.cards)"]
  end

  subgraph PrincipalScope["Principal Section Components"]
    direction TD
    HeroText["Hero Copy (.left-side)"]
    ReferralForm["Referral Form (.right-side)"]
  end

  subgraph BenefitsScope["Benefits Grid"]
    direction TD
    Card1["Card: Guaranteed Rewards"]
    Card2["Card: Rewarded Referee"]
    Card3["Card: Unlimited Referrals"]
  end

  Header --> Logo
  Header --> HeaderBtn
  Main --> Principal
  Main --> Cards
  Principal --> HeroText
  Principal --> ReferralForm
  Cards --> Card1
  Cards --> Card2
  Cards --> Card3
```

---

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- pnpm (version 10 or higher)

### Installation

1. Clone the repository to your local environment.
2. Install project dependencies:

```bash
pnpm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
pnpm dev
```

The application runs locally at `http://localhost:5173`.

### Production Build

Compile TypeScript and build the optimized production assets:

```bash
pnpm build
```

Compiled bundles are placed in the `./dist` directory.

### Preview Build

Locally preview the generated production build:

```bash
pnpm preview
```

---

## Key Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Vite development server with HMR. |
| `pnpm build` | Compiles TypeScript declarations and builds production bundles. |
| `pnpm lint` | Runs ESLint to check for code quality and syntax issues. |
| `pnpm preview` | Serves the production bundle locally for validation. |

---

## Fluid Responsiveness and Layout Strategy

The application relies on continuous fluid scaling using CSS `clamp()` functions to minimize jarring layout shifts between breakpoints:

- **Typography**: Fluid font sizes scale dynamically between mobile viewports (320px) and large displays (1440px) using calibrated `rem` and `vw` combinations.
- **Spacing**: Padding, margins, and grid gaps adjust smoothly, reducing reliance on dense media queries.
- **Touch Targets**: Interactive controls maintain minimum touch heights compliant with WCAG accessibility standards.
- **Structural Breakpoints**:
  - `64rem` (1024px): Layout padding and vertical flow adjustments for medium laptops and tablets in landscape mode.
  - `48rem` (768px): Collapses two-column forms and hero content into single-column vertical stacks.
  - `30rem` (480px): Streamlines internal card padding and switches footer layout to vertical orientation.

---

## Project Structure

```text
landingpage-odonto/
├── .agents/
│   └── plugins.json              # Antigravity plugin registry (@vitoria-rodrigues/agent-mesh)
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── logo-joyce-martins.png
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── Card/
│   │       ├── Card.tsx
│   │       └── Card.module.css
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── AGENTS.md                     # Sovereign root context router (Layer 1)
├── eslint.config.js
├── index.html
├── package.json                  # Scoped manifest (@vitoria-rodrigues/landingpage-odonto)
├── pnpm-lock.yaml
├── pnpm-workspace.yaml           # Centralized pnpm dependency catalogs
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## AI Agent Mesh Integration

This repository consumes organizational AI agent skills, rules, and MCP configurations via `@vitoria-rodrigues/agent-mesh` declared in `catalog:plugins-stack` ([pnpm-workspace.yaml](./pnpm-workspace.yaml)) and mounted through [.agents/plugins.json](./.agents/plugins.json).

---

## Governance Standards

1. **Conventional Commits**: All commits must follow `<type>(<scope>): <description>` (v1.0.0).
2. **Cryptographic Signing**: Sign commits with SSH (`git commit -S -m "..."`) when a signing key is configured.
3. **Zero-Emoji Invariant**: Emojis are strictly prohibited in code, documentation, and commit messages.
4. **Language Policy**: Technical documentation, code, and commit messages are written strictly in en-US.
