import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const indexPath = resolve(distDir, "index.html");
const fallbackPath = resolve(distDir, "404.html");
const noJekyllPath = resolve(distDir, ".nojekyll");

if (!existsSync(indexPath)) {
  throw new Error("Expected dist/index.html to exist after vite build.");
}

copyFileSync(indexPath, fallbackPath);
writeFileSync(noJekyllPath, "");
