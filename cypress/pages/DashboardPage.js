// cypress/pages/DashboardPage.js

export default class DashboardPage {
  breadcrumbHeader() {
    return cy.get(".oxd-topbar-header-breadcrumb");
  }

  pageHeading() {
    return cy.contains("h6", "Dashboard");
  }

  userDropdown() {
    return cy.get(".oxd-userdropdown-tab");
  }

  userDropdownMenu() {
    return cy.get(".oxd-dropdown-menu");
  }

  logoutLink() {
    return cy.contains("a.oxd-userdropdown-link", "Logout");
  }

  openUserMenu() {
    this.userDropdown().should("be.visible").click();
    this.userDropdownMenu().should("be.visible");
  }

  logout() {
    this.openUserMenu();
    this.logoutLink().click();
  }
}
