import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap(), prefetch(), robotsTxt(), image()]
});