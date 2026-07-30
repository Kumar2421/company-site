# MLForge Studio — Marketing Site

The public marketing site for MLForge Studio, a software and AI delivery studio.

Built with Next.js 16 (App Router, React 19), Tailwind CSS v4 and TypeScript in
strict mode. Deployed on Netlify.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run check` | lint + typecheck + build |

## Routes

- `/` — landing page
- `/company` — about and history
- `/support` — contact and locations
- `/category/all` — resources index

## Deployment

Netlify reads `netlify.toml` automatically: it runs `npm run build` and uses
`@netlify/plugin-nextjs` for the App Router runtime. Connect the repository in
Netlify and no further configuration is needed.

## Before launch

Several sections carry deliberate placeholders rather than invented content.
Search the codebase for `PLACEHOLDER` and replace:

- **Testimonials** (`src/components/sections/testimonials.tsx`) — real, cleared
  client quotes with name and role
- **Founding story** (`src/components/sections/company-history.tsx`)
- **Support metrics** (`src/components/sections/support-numbers.tsx`)
- **Office addresses** (`src/components/sections/support-locations.tsx`) — real
  registered entities, or remove the section
- **Client logos** (`src/components/sections/logo-marquee.tsx`) — the current
  marks are placeholder brands, not real clients

## Licence

MIT — see [LICENSE](LICENSE).
