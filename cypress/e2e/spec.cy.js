/// <reference types="cypress" />

describe("page bsn tool", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays title BSN-tool", () => {
    cy.get("h1").contains("BSN-tool");
  });

  it("should not display copy button when there is no input", () => {
    cy.get('[aria-label="copy-button"]').should("not.exist");
  });

  it("should display copy button when a valid bsn has been generated", () => {
    cy.contains("generate BSN").click();
    cy.get('[aria-label="copy-button"]').should("be.visible");
  });

  it("should display feedback and copy button for a valid bsn", () => {
    cy.get("input").type("999999023");
    cy.contains("validate BSN").click();
    cy.get('[aria-label="copy-button"]').should("be.visible");
    cy.contains("this is a valid bsn").should("be.visible");
  });

  it("should display feedback and not a copy button for an invalid bsn", () => {
    cy.get("input").type("99999902334");
    cy.contains("validate BSN").click();
    cy.get('[aria-label="copy-button"]').should("not.exist");
    cy.contains("this bsn is not valid").should("be.visible");
  });

  it("should update display feedback and copy button on change input", () => {
    cy.contains("generate BSN").click();
    cy.get('[aria-label="copy-button"]').should("be.visible");
    cy.contains("validate BSN").click();
    cy.contains("this is a valid bsn").should("be.visible");
    cy.get("input").type("34");
    cy.contains("this is a valid bsn").should("not.exist");
    cy.get('[aria-label="copy-button"]').should("not.exist");
    cy.contains("validate BSN").click();
    cy.contains("this bsn is not valid").should("be.visible");
  });
});
