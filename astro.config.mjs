// @ts-check
import { defineConfig } from 'astro/config';

// Styling
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// Site Managment
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://statut.democraft.fr',
  build: {
    format: "file",
  },
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});