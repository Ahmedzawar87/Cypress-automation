const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      const envName = process.env.ENV || "dev";

      dotenv.config({
        path: path.resolve(process.cwd(), `.env.${envName}`)
      });

      config.baseUrl = process.env.BASE_URL;
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;

      return config;
    },
  },
});







