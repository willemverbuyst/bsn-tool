/// <reference types="cypress" />

describe("page bsn tool", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays title BSN-tool", () => {
    cy.get("h1").contains("BSN-tool");
  });

  it('has a "generate BSN" button', () => {
    cy.get("#bsn-generator-btn").contains("generate BSN");
  });

  it('has a "validate BSN" button', () => {
    cy.get("#bsn-validator-btn").contains("validate BSN");
  });

  it("has an input field for bsn numbers", () => {
    cy.get("#bsn-number");
  });

  it("should not display copy button when there is no input", () => {
    cy.get("#bsn-number__copy-button").should("not.be.visible");
  });

  it("should display copy button when a valid bsn has been generated", () => {
    cy.get("#bsn-generator-btn").click();
    cy.get("#bsn-number__copy-button").should("be.visible");
  });

  it("should display copy icon when copy button is visible", () => {
    cy.get("#bsn-generator-btn").click();
    cy.get("#bsn-number__copy-icon").should("have.class", "fa fa-copy");
  });

  it("should display checkmark icon when copy button has been clicked", () => {
    cy.get("#bsn-number").type("999999023");
    cy.get("#bsn-validator-btn").click();
    cy.get("#bsn-number__copy-button").realClick();
    cy.get("#bsn-number__copy-icon").should("have.class", "fa fa-check");
  });

  it("should hide copy button when input has changed", () => {
    cy.get("#bsn-number").type("999999023");
    cy.get("#bsn-validator-btn").click();
    cy.get("#bsn-number__copy-button").should("be.visible");
    cy.get("#bsn-number").type("555");
    cy.get("#bsn-number__copy-button").should("not.be.visible");
  });
});
