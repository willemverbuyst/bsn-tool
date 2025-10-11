import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom", // simulate a browser environment
    globals: true, // allows describe/it/expect without import
  },
});
