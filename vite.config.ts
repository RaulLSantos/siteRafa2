import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const githubPagesBasePath = "/siteRafa2/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? (process.env.VITE_BASE_PATH ?? githubPagesBasePath) : "/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
  ],
}));
