# Hageotechic Limited — Agent Instructions

## Commands
- `npm run dev` — dev server on `0.0.0.0:3000`
- `npm run build` — production build to `dist/`
- `npm run lint` — TypeScript type-check only (`tsc --noEmit`); no ESLint/Prettier
- `npm run clean` — removes `dist/` and `server.js`
- No test framework is configured.

## Key Configuration
- `@` path alias maps to project **root**, not `src/` (e.g. `import x from '@/src/...'`)
- Tailwind v4: theme variables defined in `src/index.css` via `@theme`, not in `tailwind.config.js`
- TypeScript `noEmit: true` — Vite handles bundling
- Set `DISABLE_HMR=true` to disable HMR and file watching (used in AI Studio environments)
- `.env*` files are gitignored; use `.env.example` as template

## Architecture
- **Single-page app** (React 19 + Vite 6), deployed as static `dist/` folder on cPanel
- **Routes** are code-split via `React.lazy()` in `src/App.tsx`
  - `/`, `/about`, `/services`, `/services/:slug`, `/clients`, `/why-choose-us`, `/contact`
  - `*` fallback redirects to Home
- **SPA routing**: `.htaccess` in `public/` rewrites all non-file requests to `index.html`
- **Data-driven pages**: service details live in `src/data/services.ts` — add entries there, not new components
- **Component layout**: `layout/` (Navbar, Footer, PageHero), `sections/` (home page blocks), `ui/` (reusable atoms), `forms/` (QuoteForm)

## Conventions
- CSS: 18px base body font, 16px inside card elements (enforced via `!important` overrides in `index.css`)
- Use `exclude-size-overrides` class to opt out of size overrides
- Use `motion/react` (not `framer-motion`) for animations
- Brand colors: `#0B2545` (navy), `#1B4F8A` (mid-blue), `#00AEEF` (accent), `#060F1E` (surface)
- Font: Poppins is forced sitewide via `* { font-family: 'Poppins', sans-serif !important; }`

## Environment Variables
| Variable | Purpose |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Formspree REST endpoint for quote submissions |
| `GEMINI_API_KEY` | Gemini AI API key (injected by AI Studio) |
| `APP_URL` | Host URL (injected by AI Studio) |

## Additional Agent Guidance
- `src/skills/AGENT_SKILLS.md` — deployment & performance directives
- `src/skills/UI_PRO.md` — UI/component conventions
- `src/skills/SUPERPOWERS.md` — optimization toolkit notes
