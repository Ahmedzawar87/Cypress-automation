// cypress/support/commands.js

Cypress.Commands.add("openOrangeHRM", () => {
  cy.visit(Cypress.config("baseUrl"));
  cy.get('input[name="username"]').should("be.visible");
});

Cypress.Commands.add("appLogin", () => {
  const username = Cypress.env("USERNAME");
  const password = Cypress.env("PASSWORD");

  cy.session("orangehrm-login", () => {
    cy.visit("/web/index.php/auth/login");

    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
  });
});


