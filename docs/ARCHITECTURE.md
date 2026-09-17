# Architecture

Why the project is shaped the way it is, what changed from the original
single-file export, and what is still open.

## Where this came from

The site started as `Lei_Beauty_Studio_-_Standalone.html` — a single 2.5 MB
HTML file produced by a design-prototyping tool. It worked, but it was a
prototype export rather than a codebase:

| | Original | Now |
| --- | --- | --- |
| Files | 1 HTML blob | Components, data and styles as separate files |
| Page weight (home) | ~5.5 MB | ~99 KB |
| JavaScript shipped | ~4.3 MB | 1.5 KB |
| Webfont files | 41 (6 families, 4 unused) | 8 (3 families, all used) |
| Routing | `#hash`, one HTML document | Three real URLs, three HTML documents |
| Rendering | Client-side React | Static HTML at build time |

The original embedded React **development** builds plus the full Babel
compiler, then transpiled five JSX files in the browser on every page load —
about 4.3 MB of JavaScript to render what is, in the end, a three-page
brochure. None of it reaches the browser now.

## Decisions

### Static HTML, not a single-page app

For a local business the site's main job is to be found. Hash routing meant
one indexable URL, no per-page titles or descriptions, and nothing for a
search engine or a link preview to read — the content only existed after
JavaScript ran.

Each page is now its own document with its own `<title>`, description,
canonical URL and Open Graph tags, plus a sitemap and `BeautySalon`
structured data generated from `src/data/site.js`. That last part matters:
the hours and phone number in the markup and in the structured data come from
the same object, so they cannot drift apart.

### No client-side framework

Once pages render on the server, React was only being used for a mobile menu,
a sticky-header class and a carousel. That is ~1.5 KB of plain JavaScript
(`src/scripts/`), so the framework earned nothing.

Both scripts are progressive enhancement:

- **Nav** — without JS, a `<noscript>` block swaps the burger for the plain
  link row, so navigation never depends on the sheet.
- **Carousel** — the track is CSS scroll-snap, so it already swipes, scrolls
  and takes arrow keys. The script only wires the arrow buttons, which stay
  hidden until it runs.

The original's infinite carousel (a tripled list that silently re-centred
itself) was replaced by scroll-snap with real ends. It loses the endless loop
and gains native touch physics, keyboard support and a scrollbar position.

### Content in data files

Every service, price, testimonial and business fact lives in `src/data/`.
In the original these were literals inside JSX, and the six home-page service
cards were a second hand-maintained copy of the menu that had already drifted
from the real prices. Now the home cards reference menu items by `id` and the
build fails if one goes missing.

### Self-hosted fonts

The original inlined 41 woff2 files for six families as base64. Four of those
families existed only so a prototyping panel could preview alternate display
fonts. Only the three the design actually renders are shipped, split into
latin / latin-ext subsets with `unicode-range`, so a typical visit downloads
two files (~86 KB) instead of ~900 KB.

### Tokens and layered CSS

The original was ~1,600 lines in one `<style>` block, with `!important`
patches layered over the base rules and a comment recording who asked for a
change. It is now `tokens.css` (every colour, font and easing curve) plus
base, per-component and per-page files, imported in cascade order by
`global.css`.

Two cleanups worth knowing about:

- **Inline overrides folded in.** The prototype carried inline `style`
  attributes (`fontSize: "16px"` and similar) that overrode the stylesheet.
  Those values are now the CSS, so there is one place to read a size.
- **Dead rules removed.** `.team-*`, `.t-dots`, `.t-page`, `.testimonials`,
  `.btn-pill-sm`, `.founder-quote` and others styled markup that no longer
  existed — including a three-person team grid for a one-person studio.

### The prototyping panel is gone

The original shipped an 18 KB "Tweaks" panel — colour pickers and font
switchers that posted `postMessage` events to a design-tool host — and then
hid it with `.twk-panel{display:none!important}`. It was dev tooling, so it
was removed rather than hidden.

## Accessibility

Fixed in this rewrite: nav and footer "links" were `<div>`/`<a>` elements with
click handlers and no `href`, so they were unreachable by keyboard and
unannounced by screen readers. They are real links now. Also added: a skip
link, a visible focus style, `aria-current="page"` on the active nav item
(which also drives the CSS underline, so there is no separate active class),
`inert` on the closed mobile sheet, Escape-to-close, and semantic list,
`figure`/`blockquote` and `dl` markup.

`axe-core` reports zero structural violations across all three pages at
desktop and mobile widths.

## Known issues

### Colour contrast (open — needs a brand decision)

Three token pairs inherited from the original design fail WCAG AA. Fixing them
means changing brand colours, so they are left as-is pending a decision:

| Usage | Ratio | Needs |
| --- | --- | --- |
| White text on `--terracotta` buttons | 3.02 | 4.5 |
| `--muted` body text on cream | 3.77–3.98 | 4.5 |
| `--terracotta` headline accents on cream | 2.55 | 3.0 (large text) |

Minimal fixes that keep the palette's character: `--muted` → `#7d6653`
(4.55/4.80), button background → `#96674a` (4.84 against white), accent
headline text → `#b07a58` (3.07). Each is a token edit in
`src/styles/tokens.css`.

### Content to verify

- **Address.** `1402 N Palm Springs Blvd, Fremont, CA 94539` with the note
  "Located inside Atelier on N Beauty" came from the prototype and reads like
  placeholder copy. It now feeds the structured data, where a wrong address
  actively hurts local search.
- **Coordinates.** `site.geo` is approximate for Fremont, not surveyed.
- **Home page story copy.** The original paragraph was garbled mid-sentence
  ("to service day class skin with high quality products and technology, to
  never cut pains. Esther has provided to leave on personalized…"). It was
  rewritten from the coherent version of the same story on the about page —
  worth a read-through by someone who knows the intended wording.
- **Timeline vs. headline.** The 2026 timeline entry says "twenty-one years"
  while the rest of the site says twenty.
- **Social links** point at the bare platform domains, not real profiles.

### Images

There is no photography yet. Every image slot renders a labelled `<Photo>`
placeholder naming the shot it stands in for, which doubles as the shot list.
The wrappers already reserve the correct aspect ratio, so swapping in Astro's
`<Image />` will not shift the layout. The social share card
(`public/og-image.svg`) is likewise a placeholder — some platforms do not
render SVG previews, so it should become a 1200×630 JPG or PNG.
