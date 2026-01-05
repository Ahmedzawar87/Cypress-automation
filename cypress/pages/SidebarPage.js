// cypress/pages/SidebarPage.js

export default class SidebarPage {
  sidebar() {
    return cy.get("aside.oxd-sidepanel");
  }

  menuItems() {
    return cy.get(".oxd-main-menu-item");
  }

  menuItemByText(text) {
    return cy.contains(".oxd-main-menu-item", text);
  }
}
