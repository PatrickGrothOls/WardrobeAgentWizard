/** Scope: Build the public showcase independently of the installed skill viewer. */
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  root: fileURLToPath(new URL("./showcase", import.meta.url)),
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./showcase/index.html", import.meta.url)),
        model: fileURLToPath(new URL("./showcase/model.html", import.meta.url)),
      },
    },
    outDir: fileURLToPath(new URL("./showcase-dist", import.meta.url)),
    emptyOutDir: true,
    license: {fileName: "THIRD_PARTY_LICENSES.md"},
    chunkSizeWarningLimit: 800,
  },
});
