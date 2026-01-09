import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
    // ssr: {
    //   external: ['node-fetch']
    // }
  }
});
