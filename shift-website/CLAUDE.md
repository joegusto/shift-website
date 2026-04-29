# SHIFT is IT — Website Project Plan

> **Primary reference for Claude Code and all AI agents working on this codebase.**
> Read this file completely before touching any code. The rules in the compliance section
> below are not suggestions — they caused real production failures and must be followed exactly.

---

## ⚠️ VERCEL COMPLIANCE — READ FIRST, BREAK NOTHING

These are the exact issues that broke production builds during the initial launch.
Every rule here was learned from a real failure. Do not rationalize exceptions.

### Rule 1 — NEVER use `next/font` or `next/font/google`

**What happened:** Claude Code added `import { Plus_Jakarta_Sans } from "next/font/google"` to `layout.tsx`. This caused the Vercel build to attempt fetching Google Fonts at build time. The build failed with a font-fetch network error.

**The fix that was applied:** Removed all `next/font` imports entirely. Fonts are loaded via plain `<link>` tags in `layout.tsx` `<head>`.

**Current correct state in `layout.tsx`:**
```tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
</head>
```

**Rule:** If you need to add a font, add another `<link>` tag. NEVER import from `next/font` or `next/font/google`.

---

### Rule 2 — NEVER remove `optimizeFonts: false` from `next.config.mjs`

**What happened:** Without this flag, Next.js attempts to inline/optimize Google Fonts at build time on Vercel. This fails in Vercel's build environment.

**Current correct state of `next.config.mjs`:**
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
};
export default nextConfig;
```

**Rule:** This flag must always be present. Do not remove it, do not set it to `true`, do not add font optimization of any kind.

---

### Rule 3 — NEVER add external HTTP fetches to build-time code

**What happened (pattern to avoid):** Any code that runs at build time (inside `generateStaticParams`, top-level `async` in Server Components, etc.) that makes external network requests will fail on Vercel's isolated build environment.

**Rule:** All external data fetching must happen at runtime (client-side or on-demand server-side), not during the build. If you need static data, hardcode it as a constant in the file.

---

### Rule 4 — Vercel project settings (do not change without Joe's approval)

These settings in the Vercel dashboard are what make deployments work. They were wrong during initial setup and caused multiple failed deploys:

| Setting | Correct Value | What went wrong |
|---|---|---|
| Root Directory | `shift-website` | Was set to `shift-website-cc` (old project) |
| Framework Preset | `Next.js` | Was set to `Other` — caused 404 on all pages |
| Node Version | `18.x` | Correct, do not change |

**Note:** These are dashboard settings, not code settings. Claude Code cannot change them, but if a deployment behaves unexpectedly (404s, missing pages), verify these before debugging the code.

---

### Rule 5 — Always push with `git push origin master:main`

**What happened:** Local branch is named `master`. GitHub repo's default branch is `main`. Running `git push origin main` fails because there is no local `main` branch.

**Correct push command:**
```bash
git push origin master:main
```

**Rule:** Always use this exact command. Do not rename the local branch. Do not try to create a local `main` branch.

---

### Rule 6 — `"use client"` directive on interactive components

**Rule:** Any component that uses React hooks (`useState`, `useEffect`) or browser APIs must have `"use client"` as its very first line. Currently: `Header.tsx`, `CalendlyButton.tsx`. If you add a new interactive component, add `"use client"` as the first line.

---

### Pre-deploy checklist (run before every push)

```bash
# 1. Verify no next/font imports anywhere
grep -r "next/font" src/

# 2. Verify optimizeFonts is still false
grep "optimizeFonts" next.config.mjs

# 3. TypeScript check — must pass with 0 errors
npx tsc --noEmit

# 4. Local build — must complete successfully
npm run build
```

If any of the above fail, fix before pushing. A broken build deploys nothing and creates confusion.

---

## Project Overview

**Site:** [shiftisit.com](https://shiftisit.com)
**Owner:** Joe (joe@shiftisit.com / joegusto@gmail.com)
**Purpose:** Marketing website for SHIFT is IT, a boutique technical recruiting firm based in Southern California.
**Status:** Live in production on Vercel. Auto-deploys on push to `main` branch.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (utility-first, custom design tokens) |
| Fonts | Plus Jakarta Sans (headings) + Inter (body) via Google Fonts `<link>` tags in `layout.tsx` |
| Scheduling | Calendly popup widget (via `next/script` lazy load) |
| Deployment | Vercel (auto-deploy on push to `main`) |
| Repo | GitHub — push with `git push origin master:main` |

---

## File Structure

```
shift-website/
├── CLAUDE.md                        ← you are here
├── next.config.mjs                  ← optimizeFonts: false — DO NOT REMOVE
├── tailwind.config.ts               ← design tokens (colors, fonts, spacing)
├── src/
│   ├── app/
│   │   ├── layout.tsx               ← root layout, metadata, font <link> tags, Header/Footer
│   │   ├── page.tsx                 ← entire single-page site (all sections live here)
│   │   └── globals.css              ← Tailwind base + custom component classes
│   └── components/
│       ├── Header.tsx               ← "use client" — sticky nav, mobile hamburger, Calendly CTA
│       ├── Footer.tsx               ← logo, copyright, email link
│       ├── CalendlyButton.tsx       ← "use client" — Calendly popup trigger
│       ├── PathCard.tsx             ← offer cards (Employers / Candidates / Consulting)
│       ├── WhyCard.tsx              ← simple card: title + desc paragraph
│       ├── SpecialtyCard.tsx        ← specialty discipline cards (12 total)
│       ├── StepCard.tsx             ← numbered step cards in How It Works
│       ├── StatBox.tsx              ← large stat + label boxes in About section
│       └── CredBar.tsx              ← credibility/trust bar below hero
└── public/
    ├── shift-logo.svg
    ├── favicon-32.png
    ├── favicon-64.png
    └── favicon-180.png
```

---

## Design System

### Colors (`tailwind.config.ts`)

| Token | Value | Usage |
|---|---|---|
| `bg` | `#080808` | Page background |
| `bg-alt` | `#141420` | Alternating section background |
| `accent` | `#5B3FD6` | Primary purple |
| `accent-light` | `#7A5CFF` | Hover states, highlights, accent text |
| `accent-soft` | `#9580FF` | Subtle labels, sec-label text |
| `accent-dark` | `#3E2A8C` | Available, rarely used |
| `dim` | `#A0A0A0` | Body/paragraph text |
| `muted` | `#444444` | Placeholder, disabled states |

### Fonts

- **Headings:** `font-heading` → Plus Jakarta Sans (weights 400–800)
- **Body:** `font-body` → Inter (weights 400–600)
- Loaded in `layout.tsx` via `<link>` tags pointing to Google Fonts CDN
- `tailwind.config.ts` references CSS variables `var(--font-space-grotesk)` and `var(--font-inter)` as fallbacks, but the actual delivery is via the `<link>` tags

### Custom CSS Classes (`globals.css`)

| Class | Description |
|---|---|
| `.btn-primary` | Purple filled button — accent bg, white text, glow shadow on hover |
| `.btn-outline` | Ghost button — transparent, white/20 border, accent-light on hover |
| `.sec-label` | Small uppercase pill label used above section headings |
| `.logo-img` | Logo sizing (h-11) with `mix-blend-mode: lighten` |

### Layout Conventions

- Max content width: `max-w-container` = 1280px, always with `mx-auto`
- Horizontal padding: `px-[6%]` on every section wrapper
- Standard section vertical padding: `py-[90px]`
- Compact section vertical padding: `py-20`
- Section bg pattern: `bg-bg` and `bg-bg-alt` alternate; alt sections get `border-t border-b border-white/[0.07]`

---

## Page Structure (`page.tsx`)

The entire site is one scrollable page. All sections are in `page.tsx`. Sections in order:

1. **Hero** — headline, subhead, Book a Call + Get in Touch CTAs, subtle grid overlay, glow animation
2. **CredBar** — `<CredBar />` trust/credibility bar
3. **Three-Path Cards** — `grid lg:grid-cols-3`: For Employers (highlighted/purple) / For Candidates / Consulting & Fractional Services
4. **How SHIFT Works** (`id="how-it-works"`) — 2-col layout, 3 `<StepCard>` components on right
5. **Specialties** (`id="specialties"`) — 4-col grid of `<SpecialtyCard>` (12 disciplines)
6. **Why SHIFT** — 3 `<WhyCard>` components in 3-col grid
7. **Consulting & Fractional Services** (`id="consulting"`) — 3 numbered service cards + engagement model CTA block
8. **Industries** — 3-col grid of inline `<div>` cards (12 industries)
9. **Markets** — primary SoCal markets (accent pill) + secondary markets (muted pill)
10. **About Teaser** (`id="about"`) — 2-col: text left, 2×2 `<StatBox>` grid right
11. **Final CTA** — full-width centered CTA with Book a Call

### Nav Links (`Header.tsx`)

Current nav:
```typescript
const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#specialties", label: "Specialties" },
  { href: "/#consulting", label: "Consulting" },
  { href: "/#about", label: "About" },
];
```

Adding a new section to the nav: add an entry to this array with the `href` matching the section's `id` attribute (prefixed with `/#`).

---

## CalendlyButton Component

All primary CTAs use `<CalendlyButton>`. Key facts:
- File: `src/components/CalendlyButton.tsx`
- Must have `"use client"` (uses `useEffect` and browser APIs)
- Lazy-loads Calendly script via `next/script` with `strategy="lazyOnload"`
- Popup URL: `https://calendly.com/joe-shiftisit/30min`
- Props: `children` (button label) and `className` (default: `"btn-primary"`)
- Smaller variant: `className="btn-primary text-sm py-2.5 px-6"`
- For a mailto link instead: use `<a href="mailto:joe@shiftisit.com" className="btn-outline">`

---

## Deployment

```bash
# Push to trigger Vercel auto-deploy (takes ~90 seconds)
git push origin master:main
```

- Vercel project: `shift-website` under `joegusto-6407s-projects`
- Live URL: https://shiftisit.com
- Vercel Root Directory: `shift-website`
- Vercel Framework Preset: `Next.js`

---

## Open Tasks

### Immediate
- [ ] Push current commit (`ab14cb3`) to GitHub: `git push origin master:main`

### Near Term
- [ ] **Testimonials / social proof** — 2–3 quotes from clients or placed candidates
- [ ] **OG image** — custom 1200×630 image for LinkedIn/social link previews
- [ ] **Analytics** — Vercel Analytics (zero-config, just `npm install @vercel/analytics` + add `<Analytics />` to layout)
- [ ] **sitemap.xml** — add `next-sitemap` package for SEO

### Future Consideration
- [ ] **Contact form** — name, company, email, message as alternative to Calendly
- [ ] **Dedicated `/consulting` page** — expanded landing page for the fractional/consulting offering
- [ ] **Blog** — thought leadership articles on technical recruiting and hiring trends
- [ ] **Case study** — one detailed placement success story

---

## Brand Voice

- **Tone:** Direct, confident, non-corporate. No hedging, no fluff.
- **Voice:** "We" for the firm, "you" for the client/candidate. Active voice only.
- **Differentiators:** Boutique by design, disciplined process, depth over volume, fit over speed, long-term retention metrics
- **Avoid these words:** synergy, leverage, best-in-class, world-class, passionate, dynamic, robust, utilize
- **Tagline:** "Not a staffing agency. A recruiting partner."
- **Company name:** Always "SHIFT is IT" — the "is" is lowercase, not "SHIFT IS IT"

---

## Development

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:3001
npm run build        # production build (must pass before pushing)
npx tsc --noEmit     # type check only
```
