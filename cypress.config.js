const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

function loadEnvFile(envName = "dev") {
  const envPath = path.resolve(process.cwd(), `.env.${envName}`);
  if (fs.existsSync(envPath)) {
    const result = dotenv.config({ path: envPath });
    return result.parsed || {};
  }
  return {};
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com", // fallback
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,

    setupNodeEvents(on, config) {
      // Choose env by: ENV=dev|qa|prod
      const envName = process.env.ENV || "dev";
      const envVars = loadEnvFile(envName);

      // Map env vars into Cypress env
      config.env.ENV_NAME = envName;
      config.env.BASE_URL = envVars.BASE_URL || config.baseUrl;
      config.env.USERNAME = envVars.USERNAME || "Admin";
      config.env.PASSWORD = envVars.PASSWORD || "admin123";

      // Set baseUrl from env
      config.baseUrl = config.env.BASE_URL;

      return config;
    },
  },
});






