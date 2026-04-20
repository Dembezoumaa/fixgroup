# FIX Group Website

Astro-website voor FIX Group — vier takken, één team.
Gebouwd met Astro 4 + React (alleen voor interactieve componenten).

## Snel starten

```bash
npm install
npm run dev        # dev server op http://localhost:4321
npm run build      # productie build naar ./dist
npm run preview    # preview de build lokaal
```

## Vereisten

- Node.js 18.17+ of 20+
- npm (of pnpm / yarn)

## Structuur

```
src/
├── components/
│   ├── FaqSection.jsx        ← uitklapbare FAQ (React, client:visible)
│   ├── Footer.astro          ← footer met links, socials, KvK/BTW
│   ├── Header.jsx            ← navigatie + mobile menu (React, client:load)
│   ├── Icon.jsx              ← gedeelde SVG-icoonset
│   ├── ReviewsSection.astro  ← Google-review block
│   ├── SpoedBanner.astro     ← rode 24/7 CTA-sectie
│   └── StickyCallBar.astro   ← mobile-only onderste balk
├── data/
│   └── content.js            ← ALLE bedrijfsgegevens, takken, diensten, reviews, FAQ
├── layouts/
│   └── BaseLayout.astro      ← <head>, meta, fonts, JSON-LD, wrapt alle pagina's
├── pages/
│   ├── index.astro           ← homepage
│   ├── spoed.astro
│   ├── contact.astro
│   ├── offerte.astro
│   ├── over-ons.astro
│   ├── diensten/
│   │   ├── index.astro               ← /diensten/
│   │   ├── [branch].astro            ← /diensten/loodgieters/ etc.
│   │   └── [branch]/[service].astro  ← /diensten/loodgieters/lekkage-verhelpen/ etc.
│   └── werkgebied/
│       ├── index.astro               ← /werkgebied/
│       └── [plaats].astro            ← /werkgebied/hilversum/ etc.
├── styles/
│   └── global.css            ← alle styling in één bestand, CSS custom properties
└── public/
    └── favicon.svg           ← placeholder, vervang met eigen logo
```

## Content aanpassen

**Alles draait om `src/data/content.js`.** Pas daar de bedrijfsgegevens, diensten, reviews en FAQ's aan — alle pagina's lezen eruit, dus één wijziging = overal zichtbaar.

Belangrijkste velden:
- `site.phone` / `site.phoneRaw` — zichtbaar telefoonnummer + tel-link formaat
- `site.whatsapp` — nummer voor wa.me links (met +31 prefix)
- `site.kvk` / `site.btw` — **invullen voor go-live**
- `site.emergencyResponse` — gemiddelde reactietijd in minuten (wordt overal dynamisch getoond)
- `branches[]` — 4 takken, elk met eigen kleur, tint, en lijst diensten
- `reviews[]` — handmatige reviews (Google-review API kan later)
- `faqs[]` — algemene FAQ's, getoond op meerdere pagina's
- `workgebied[]` — plaatsen voor /werkgebied/ routes

## Routes overzicht

Astro genereert statisch:

| Pad | Bron | Aantal |
|---|---|---|
| `/` | `index.astro` | 1 |
| `/spoed/` | `spoed.astro` | 1 |
| `/contact/` | `contact.astro` | 1 |
| `/offerte/` | `offerte.astro` | 1 |
| `/offerte/bedankt/` | `offerte/bedankt.astro` | 1 |
| `/over-ons/` | `over-ons.astro` | 1 |
| `/privacy/` | `privacy.astro` | 1 |
| `/algemene-voorwaarden/` | `algemene-voorwaarden.astro` | 1 |
| `/cookies/` | `cookies.astro` | 1 |
| `/diensten/` | `diensten/index.astro` | 1 |
| `/diensten/<branch>/` | `diensten/[branch].astro` | 4 |
| `/diensten/<branch>/<service>/` | `diensten/[branch]/[service].astro` | 31 |
| `/werkgebied/` | `werkgebied/index.astro` | 1 |
| `/werkgebied/<plaats>/` | `werkgebied/[plaats].astro` | 10 |

**Totaal: 56 pagina's**, plus `sitemap-index.xml` en `sitemap-0.xml` (via `@astrojs/sitemap`).

## Nog te doen vóór go-live

- [ ] `src/data/content.js`: vul `site.kvk` en `site.btw` in
- [ ] `astro.config.mjs`: zet `site:` op het productiedomein (als het niet `fixgroup.nl` is)
- [ ] `public/favicon.svg`: vervang de placeholder door eigen logo
- [ ] Voeg een `public/img/og-default.jpg` toe (1200×630) voor social sharing
- [ ] Offerteformulier (`/offerte/`): hang een backend-endpoint aan het `action`-attribuut (Formspree, Resend, eigen API) — momenteel POST naar `/offerte/bedankt/` zonder server-side verwerking, dus de ingevulde data wordt niet opgeslagen
- [ ] Juridische pagina's `privacy.astro`, `algemene-voorwaarden.astro`, `cookies.astro`: **concept-teksten**, laat juridisch controleren
- [ ] Extra routes uit footer die nog niet bestaan: `/reviews/`, `/vacatures/`, `/faq/` — aanmaken of links uit Footer.astro verwijderen
- [ ] Google Analytics / Plausible snippet toevoegen aan `BaseLayout.astro` (+ cookies.astro bijwerken)
- [ ] Echte reviews ophalen (Google Places API of handmatig in `content.js`)

## Belangrijke dependency-pin

`@astrojs/sitemap` is gepind op `3.2.1` (géén caret). Versies 3.7+ vereisen Astro 5 en crashen met Astro 4 — laat deze pin staan totdat u naar Astro 5 upgrade.

## Design systeem

Alle styling in `src/styles/global.css`, met CSS custom properties bovenaan:
- `--red` (`#E11D2E`) — primair accent
- `--ink` / `--ink-2` / `--ink-3` — tekstkleuren
- `--card` / `--paper` / `--bg` — achtergronden
- `--f-mono` — monospace voor eyebrows, getallen, badges
- `--line` / `--line-2` — randen

Responsive breakpoints:
- `≤ 960px` — tablet
- `≤ 720px` — mobile (hamburger, sticky call bar, 1-koloms grids)
- `≤ 380px` — kleine telefoons (logo-suffix verborgen)

## Performance

- Astro genereert statisch — geen server nodig om te hosten
- React alleen via `client:load` (Header) en `client:visible` (FAQ) — rest is HTML
- Fonts via `font-display: swap` + preconnect
- `compressHTML: true` en `inlineStylesheets: 'auto'` al aan

## Hosting

Werkt out-of-the-box op Vercel, Netlify, Cloudflare Pages. Output is in `./dist` na `npm run build`.
