import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@pages": `${__dirname}/src/pages`,
      "@components": `${__dirname}/src/components`,
      "@layouts": `${__dirname}/src/layouts`,
      "@hooks": `${__dirname}/src/hooks`,
    },
  },
});
