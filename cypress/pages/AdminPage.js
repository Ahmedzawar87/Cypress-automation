// cypress/pages/AdminPage.js

export default class AdminPage {
  adminMenu() {
    return cy.contains(".oxd-main-menu-item", "Admin");
  }

  breadcrumbHeader() {
    return cy.get(".oxd-topbar-header-breadcrumb");
  }

  searchButton() {
    return cy.contains('button[type="submit"]', "Search");
  }

  resetButton() {
    return cy.contains('button[type="button"]', "Reset");
  }

  openAdmin() {
    this.adminMenu().should("be.visible").click();
    cy.url({ timeout: 30000 }).should("include", "/admin");
  }
}
