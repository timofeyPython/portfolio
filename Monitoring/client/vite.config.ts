import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react-swc";
// @ts-expect-error See https://github.com/gxmari007/vite-plugin-eslint/issues/79
import eslint from "vite-plugin-eslint";
import path from "node:path";

export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    }),
    eslint(),
  ],
  base: "monitoring",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@forms": path.resolve(__dirname, "./src/components/forms"),
    },
    mainFields: ["browser"],
  },
});
