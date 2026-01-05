/// <reference types="cypress" />

import AdminPage from "../pages/AdminPage";
import SidebarPage from "../pages/SidebarPage";

describe("Admin Tests (5)", () => {
    const admin = new AdminPage();
    const sidebar = new SidebarPage();

    beforeEach(() => {
        cy.appLogin();
        cy.visit("/web/index.php/dashboard/index");
    });

    it("TC11 - Admin menu is visible in sidebar", () => {
        sidebar.menuItemByText("Admin").should("be.visible");
    });

    it("TC12 - Admin page opens successfully", () => {
        admin.openAdmin();
        cy.url().should("include", "/admin");
    });

    it("TC13 - Admin page breadcrumb/header is visible", () => {
        admin.openAdmin();
        admin.breadcrumbHeader().should("be.visible").and("contain.text", "Admin");
    });

    it("TC14 - Search button is visible", () => {
        admin.openAdmin();
        admin.searchButton().should("be.visible");
    });

    it("TC15 - Reset button is visible", () => {
        admin.openAdmin();
        admin.resetButton().should("be.visible");
    });
});
