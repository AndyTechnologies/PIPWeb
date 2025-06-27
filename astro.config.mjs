// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    clientPrerender: true,
  },
  site: 'https://andytechnologies.github.io/',
  base: '/pipweb/',
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      },
    },
  })]
});