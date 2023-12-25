import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Set to 0 to inline all assets
  },
  assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
});
