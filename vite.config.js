import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
const { resolve } = require("path");
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [pugPlugin(), ViteImageOptimizer()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en.html"),
      },
    },
  },
});
