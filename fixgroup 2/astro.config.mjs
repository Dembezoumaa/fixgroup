import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// BELANGRIJK: pas 'site' aan naar jouw domein voordat je gaat builden.
// Dit is nodig voor de sitemap en canonical URLs.
export default defineConfig({
  site: 'https://fixgroup.nl',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  compressHTML: true,
});
