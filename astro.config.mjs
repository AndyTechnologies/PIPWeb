// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
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
  adapter: node({
    mode: 'standalone'
  }),
  site: 'https://pipweb.onrender.com',
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