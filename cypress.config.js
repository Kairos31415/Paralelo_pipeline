const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dprhf5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 20000,
  },
});
