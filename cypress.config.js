const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://orangetesting.com",
    supportFile: "cypress/support/e2e.js",
  },
});




