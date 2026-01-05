// cypress/support/e2e.js
import "./commands";

import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
    return false;
  }
});

afterEach(function () {
  if (this.currentTest.state === "failed") {
    const name = this.currentTest.title.replace(/[/\\?%*:|"<>]/g, "-");
    cy.screenshot(`FAILED--${name}`);
  }
});


