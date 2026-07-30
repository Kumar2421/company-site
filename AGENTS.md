<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MLForge Studio — Marketing Site

## What This Is

The public marketing site for MLForge Studio, a software and AI delivery studio.
Next.js App Router, deployed on Netlify.

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4, design tokens in `src/app/globals.css`
- **UI:** shadcn/ui primitives (Base UI), `cn()` utility
- **Icons:** local SVGs in `src/components/icons.tsx`; `@ant-design/icons` in the hero console
- **Deployment:** Netlify (`netlify.toml`, `@netlify/plugin-nextjs`)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run check` — lint + typecheck + build

## Code Style

- TypeScript strict, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles except dynamic animation delays
- 2-space indentation, mobile-first responsive

## Design System

Tokens live in `@theme inline` in `src/app/globals.css` — colours, the type scale,
radii and container widths. Use the token classes (`text-h2`, `bg-surface`,
`text-ink-60`, `rounded-card`) rather than raw values.

Content widths are `--container-column` (872px of content) and
`--container-bleed` (1320px). `padding-inline` sits inside the border box, so the
max-widths carry an extra 48px.

## Motion

- `transform` / `opacity` only — never animate `width`, `height`, `top` or `left`
- Micro-interactions 150–300ms; complex transitions ≤400ms
- Every animation must respect `prefers-reduced-motion` and leave content legible
  when motion is off
- Scroll reveals use `<Reveal>` (`src/components/reveal.tsx`), which is
  IntersectionObserver-based with `<noscript>` and reduced-motion fallbacks
- The hero console animates on one 20s CSS loop via the `.nova-a-*` classes.
  Those classes carry the full `animation` shorthand on purpose — a shared parent
  rule only reaches direct children, and nested elements would otherwise end up
  with an animation name and no duration, never animating at all.

## Content Rules

- **Never invent testimonials, client names, logos, metrics or addresses.** Use
  the clearly marked `PLACEHOLDER` blocks until real, cleared material arrives.
- Don't put third-party brand names or logos into sample data.
- Decorative illustrations must be `aria-hidden` so screen readers don't announce
  sample figures as real data.

## Project Structure

```
src/
  app/              # routes: /, /company, /support, /category/all
  components/
    sections/       # page sections
    ui/             # shared primitives
    icons.tsx       # local SVG icons
    hero-dashboard.tsx
    reveal.tsx
  lib/              # nav, posts, utils
  hooks/
public/
  images/  fonts/  videos/  seo/
```
