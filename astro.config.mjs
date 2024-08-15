import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), tailwind()],
  // output: "server",
  server: {
    host: "0.0.0.0", // 使服务器对网络可见
  },
});
