const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  video: false,
  waitForAnimations: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require("./cypress/plugins")(on, config);
    },
    baseUrl: "http://localhost:1234",
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
