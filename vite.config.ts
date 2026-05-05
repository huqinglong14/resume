import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveHtml = (file: string) => decodeURIComponent(new URL(file, import.meta.url).pathname.slice(1));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolveHtml("./index.html"),
        resume: resolveHtml("./resume.html"),
      },
    },
  },
});
