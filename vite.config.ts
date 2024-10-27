import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],

  server: {
    port: 4000,
    host: true,
  },

  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
