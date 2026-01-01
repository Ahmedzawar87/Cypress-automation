Cypress.Commands.add('openOrangeHRM', () => {
  cy.visit(Cypress.env('BASE_URL'), {
    timeout: 120000,
    failOnStatusCode: false
  });
});
