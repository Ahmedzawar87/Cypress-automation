/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";

describe("Login Tests (5)", () => {
  const login = new LoginPage();

  beforeEach(() => {
    login.open();
  });

  it("TC01 - Valid login with correct credentials", () => {
    login.login(
      Cypress.env("USERNAME"),
      Cypress.env("PASSWORD")
    );
    cy.url().should("include", "/dashboard");
  });

  it("TC02 - Invalid username shows error", () => {
    login.login("WrongUser", Cypress.env("PASSWORD"));
    login.errorMessage().should("be.visible");
  });

  it("TC03 - Invalid password shows error", () => {
    login.login(Cypress.env("USERNAME"), "wrongPassword");
    login.errorMessage().should("be.visible");
  });

  it("TC04 - Invalid username and password shows error", () => {
    login.login("WrongUser", "WrongPassword");
    login.errorMessage().should("be.visible");
  });

  it("TC05 - Login page UI elements are visible", () => {
    login.usernameInput().should("be.visible");
    login.passwordInput().should("be.visible");
    login.loginButton().should("be.visible");
  });
});

