/// <reference types="cypress" />

/**
 * ORANGE TESTING – COMPLETE PRACTICE SPEC
 * - Spec-level hooks
 * - Describe-level hooks
 * - Skips
 * - Stable selectors
 */

before(() => {
  cy.log("Spec BEFORE – runs once before all describes");
});

after(() => {
  cy.log("Spec AFTER – runs once after all describes");
});

describe("OrangeTesting.com – E2E Test Suite (Easy / Medium / Hard)", () => {

  /* =========================
     DESCRIBE-LEVEL HOOKS
     ========================= */

  before(() => {
    cy.log("Describe BEFORE – runs once before this suite");
  });

  beforeEach(() => {
    cy.log("BEFORE EACH – visiting homepage");
    cy.visit("/");
  });

  afterEach(() => {
    cy.log("AFTER EACH – test completed");
  });

  after(() => {
    cy.log("Describe AFTER – suite completed");
  });

  /* =========================
     EASY TEST CASES
     ========================= */

  it("TC-01 (Easy): Homepage loads successfully", () => {
    cy.location("hostname").should("eq", "orangetesting.com");
  });

  it.skip("TC-02 (Easy): Top navigation links exist (SKIPPED PRACTICE)", () => {
    cy.get("nav a").should("have.length.greaterThan", 0);
  });

  /* =========================
     MEDIUM TEST CASES
     ========================= */

  it("TC-03 (Medium): Header contains navigation items", () => {
  cy.get("nav a")
    .should("have.length.greaterThan", 3)
    .each(($el) => {
      cy.wrap($el).should("exist");
    });
});

  it("TC-04 (Medium): Features dropdown exists", () => {
  cy.get(".dropbtn")
    .contains("Features")
    .should("be.visible");
});

   it("TC-05 (Medium): Blog menu item is present and correctly linked", () => {
  cy.contains("nav a", "Blog")
    .should("be.visible")
    .and("have.attr", "href")
    .and("include", "blog");
});

});