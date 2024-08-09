import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import db from "@astrojs/db";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), db(), tailwind()],
  output: "server"
});