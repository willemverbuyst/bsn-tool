import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  video: false,
  waitForAnimations: true,
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
