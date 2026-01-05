/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import SidebarPage from "../pages/SidebarPage";

describe("Smoke Tests (5)", () => {
    const login = new LoginPage();
    const dashboard = new DashboardPage();
    const sidebar = new SidebarPage();

    it("TC16 - Application opens successfully", () => {
        login.open();
        cy.contains("h5", "Login").should("be.visible");
    });

    it("TC17 - Login and dashboard load smoke test", () => {
        cy.appLogin();
        cy.visit("/web/index.php/dashboard/index");
        cy.url().should("include", "/dashboard");
    });


    it("TC18 - Sidebar menu count is greater than 5", () => {
        cy.appLogin();
        cy.visit("/web/index.php/dashboard/index");
        sidebar.menuItems().should("have.length.greaterThan", 5);
    });

    it("TC19 - User dropdown is accessible", () => {
        cy.appLogin();
        cy.visit("/web/index.php/dashboard/index");
        dashboard.userDropdown().should("be.visible");
    });

    it("TC20 - Logout works successfully", () => {
        cy.appLogin();
        cy.visit("/web/index.php/dashboard/index");
        dashboard.logout();
        cy.url({ timeout: 30000 }).should("include", "/auth/login");
        cy.contains("h5", "Login").should("be.visible");
    });

});
