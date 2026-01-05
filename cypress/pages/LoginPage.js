// cypress/pages/LoginPage.js

export default class LoginPage {
  usernameInput() {
    return cy.get('input[name="username"]');
  }

  passwordInput() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  errorMessage() {
    return cy.get(".oxd-alert-content-text");
  }

  open() {
    cy.visit("/web/index.php/auth/login", { failOnStatusCode: false });
    this.usernameInput().should("be.visible");
  }

  login(username, password) {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password, { log: false });
    this.loginButton().click();
  }
}


