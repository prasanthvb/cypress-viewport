/// <reference types="cypress" />

import * as data from "../../fixtures/credentials.json";

describe("Running test in web Browser", () => {
  it("Test to verify userName in user profile ", () => {
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });
});
