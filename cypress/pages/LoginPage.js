class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get('.oxd-alert-content-text')
  }

  visit() {
    cy.visit(Cypress.env('BASE_URL'))
  }

  login(username, password) {
    this.elements.usernameInput().type(username)
    this.elements.passwordInput().type(password)
    this.elements.loginButton().click()
  }
}

export default LoginPage

