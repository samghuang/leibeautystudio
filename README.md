# Lei Beauty Studio

Marketing site for Lei Beauty Studio — a hair, facial and lash studio in Fremont, CA.

Built with [Astro](https://astro.build). Every page is rendered to static HTML at
build time, so the site can be hosted on any static host or CDN with no server.

## Getting started

Requires Node 20.3 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev      # dev server with hot reload at http://localhost:4321
```

## Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload                |
| `npm run build`   | Build the static site into `dist/`                  |
| `npm run preview` | Serve the built site locally, exactly as deployed   |
| `npm run check`   | Type-check `.astro` files and validate component props |

## Project layout

```
public/            Served verbatim at the site root
  fonts/           Self-hosted woff2 subsets
  favicon.svg      Site icon
  og-image.svg     Social share card (placeholder)
  robots.txt

src/
  data/            All content and business facts — see "Editing content"
  components/      Reusable markup (Header, Footer, Icon, Photo, CtaBanner…)
  layouts/         BaseLayout — the document shell, metadata and SEO tags
  pages/           One file per URL: index, services, about
  scripts/         The site's only client-side JS (nav sheet, carousel arrows)
  styles/          Tokens, base, per-component and per-page CSS
```

## Editing content

Copy and business data live in `src/data/` — you do not need to touch markup to
change what the site says.

| To change...                              | Edit                      |
| ----------------------------------------- | ------------------------- |
| Address, phone, hours, socials, stats     | `src/data/site.js`        |
| Service menu and prices                   | `src/data/services.js`    |
| Client testimonials                       | `src/data/testimonials.js`|
| About page copy, values, timeline         | `src/data/about.js`       |
| Nav links                                 | `src/data/nav.js`         |

`src/data/site.js` is the single source of truth for the studio's name,
address, phone and hours. The footer, the contact links and the `BeautySalon`
structured data all read from it, so those can never disagree with each other.

### Adding a service

Add the item to the right category in `src/data/services.js`. It appears on the
services page automatically. To also feature it on the home page, add its `id`
to `homeFeatured` in the same file — an id that does not exist fails the build
rather than rendering a dead card.

## Before launch

Two placeholders need real values:

1. **`site.url`** in `src/data/site.js` — currently `https://leibeautystudio.com`.
   This seeds every canonical URL, the sitemap and the Open Graph tags.
   Also update the `Sitemap:` line in `public/robots.txt`.
2. **`site.bookingUrl`** in `src/data/site.js` — currently `null`, so every
   "Book" button falls back to a `tel:` link. Set it to a real scheduler
   (Square, Vagaro, Fresha…) and all CTAs follow.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for why the project is built
this way, and for the known issues that are still open.

## Deploying

`npm run build` writes a fully static site to `dist/`. Point any static host at
that directory — Netlify, Cloudflare Pages, Vercel, GitHub Pages or plain S3.
No Node runtime is needed in production.
