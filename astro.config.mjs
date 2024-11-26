import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://loictr.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
});