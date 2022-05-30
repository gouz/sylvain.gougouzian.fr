import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
const { resolve } = require("path");

export default defineConfig({
  plugins: [pugPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        en: resolve(__dirname, "en.html"),
      },
    },
  },
});
