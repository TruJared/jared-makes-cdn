import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), prefetch(), robotsTxt(), image({serviceEntryPoint: '@astrojs/image/sharp'})]
});
