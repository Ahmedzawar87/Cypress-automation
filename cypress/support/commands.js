// cypress/support/commands.js

Cypress.Commands.add("openOrangeHRM", () => {
  cy.clearCookies();
  cy.clearLocalStorage();

  const baseUrl = Cypress.config("baseUrl") || Cypress.env("BASE_URL");

  cy.visit(baseUrl, {
    timeout: 120000,
    failOnStatusCode: false,
  });

  cy.get('input[name="username"]', { timeout: 20000 }).should("be.visible");
});

Cypress.Commands.add("appLogin", () => {
  const username = Cypress.env("USERNAME") || "Admin";
  const password = Cypress.env("PASSWORD") || "admin123";

  cy.session(["orangehrm-login", username], () => {
    cy.visit("/web/index.php/auth/login", { failOnStatusCode: false });

    cy.get('input[name="username"]', { timeout: 20000 })
      .should("be.visible")
      .clear()
      .type(username);

    cy.get('input[name="password"]')
      .should("be.visible")
      .clear()
      .type(password, { log: false });

    cy.get('button[type="submit"]').should("be.enabled").click();

    cy.url({ timeout: 30000 }).should("include", "/dashboard");
  });
});

