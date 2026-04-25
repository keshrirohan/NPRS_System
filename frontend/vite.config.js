import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true, // local network access
    port: 5173
  },

  preview: {
    host: true,
    port: 10000,
    allowedHosts: true // allow all hosts (fix Render issue)
  },

  build: {
    outDir: "dist",
    sourcemap: false
  }
});