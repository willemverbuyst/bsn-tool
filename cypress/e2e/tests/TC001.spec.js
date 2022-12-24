/// <reference types="cypress" />

describe("page bsn tool", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays title BSN-tool", () => {
    cy.get(".title").contains("BSN-tool");
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
});
