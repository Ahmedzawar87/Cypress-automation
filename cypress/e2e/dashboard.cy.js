/// <reference types="cypress" />

import DashboardPage from "../pages/DashboardPage";
import SidebarPage from "../pages/SidebarPage";

describe("Dashboard Tests (5)", () => {
  const dashboard = new DashboardPage();
  const sidebar = new SidebarPage();

  beforeEach(() => {
    cy.appLogin();
    cy.visit("/web/index.php/dashboard/index");
  });

  it("TC06 - Dashboard loads after login", () => {
    cy.url().should("include", "/dashboard");
  });

  it("TC07 - Dashboard heading is visible", () => {
    dashboard.pageHeading().should("be.visible");
  });

  it("TC08 - Top breadcrumb header is visible", () => {
    dashboard.breadcrumbHeader().should("be.visible");
  });

  it("TC09 - Sidebar is visible", () => {
    sidebar.sidebar().should("be.visible");
  });

  it("TC10 - User dropdown opens and Logout is visible", () => {
    dashboard.openUserMenu();
    dashboard.logoutLink().should("be.visible");
  });
});

