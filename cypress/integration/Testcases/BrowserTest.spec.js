/// <reference types="cypress" />

import * as data from "../../fixtures/credentials.json";

describe("Running test in web Browser", () => {
  it('Test to verify web view in Electron browser',{ browser: 'electron' }, () => {
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it('Test to verify web view in firefox browser',{ browser: 'firefox' }, () => {
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it('Test to verify web view in chrome browser',{ browser: 'chrome' }, () => {
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it('Test to verify web view in edge browser',{ browser: 'edge' }, () => {
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });
});
