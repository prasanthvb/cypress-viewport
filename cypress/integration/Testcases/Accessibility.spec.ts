/// <reference types="cypress" />

describe("Visit orangehrmlive main page to validate Accessibility rules", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.injectAxe();
  });

  it("Cypress-axe should log any accessibility failures", () => {
    cy.checkA11y();
  });

  it("Cypress-axe should exclude specific elements on the page", () => {
    cy.checkA11y({ exclude: ["input"] });
  });

  it("Cypress-axe should only test specific element on the page", () => {
    cy.checkA11y("input");
  });

it('Has no a11y violations after button click', () => {
  cy.get('#forgotPasswordLink > a').click();
  cy.checkA11y()
})

// it('Only logs a11y violations while allowing the test to pass', () => {
//     // Do not fail the test when there are accessibility failures
//     cy.checkA11y(null, null, null, true);
//   })
});
