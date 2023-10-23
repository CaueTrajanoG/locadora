import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "/locadora/",
  build: {
    rollupOptions: {
      input: {
        main: ('./index.html'),
        admin: ('./admin.html'),
      }
    }
  }
});
