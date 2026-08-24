import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://project-handoff.netlify.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: { cssMinify: true }
  },
  server: {
    host: true,
    port: 4321
  }
});
