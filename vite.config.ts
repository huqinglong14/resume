import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const resolveHtml = (file: string) => {
  const pathname = new URL(file, import.meta.url).pathname;
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
};

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
