// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    imageService: true
  }),
  site: 'https://cumple-ali.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },
});