// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { site } from './src/data/site.js';

// Static output: every route is rendered to plain HTML at build time. There is
// no server and no client-side router — see docs/ARCHITECTURE.md.
export default defineConfig({
  site: site.url,
  integrations: [sitemap()],
  build: {
    // One stylesheet for a three-page site beats a waterfall of tiny ones.
    inlineStylesheets: 'auto',
  },
});
