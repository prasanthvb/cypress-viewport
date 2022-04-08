/// <reference types="cypress" />

import * as data from "../../fixtures/credentials.json";

describe("Running test in different mobile view ports", () => {
  it("verify in iphone-3", () => {
    cy.viewport("iphone-3");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-4", () => {
    cy.viewport("iphone-4");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-5", () => {
    cy.viewport("iphone-5");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-6", () => {
    cy.viewport("iphone-6");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-6+", () => {
    cy.viewport("iphone-6+");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-7", () => {
    cy.viewport("iphone-7");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-8", () => {
    cy.viewport("iphone-8");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-x", () => {
    cy.viewport("iphone-x");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-xr", () => {
    cy.viewport("iphone-xr");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in iphone-se2", () => {
    cy.viewport("iphone-se2");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in ipad-2", () => {
    cy.viewport("ipad-2");
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it("open in ipad-mini", () => {
    cy.viewport("ipad-mini");
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it("verify in Galaxy S8", () => {
    cy.viewport(360, 740);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy S9", () => {
    cy.viewport(360, 740);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy S9+", () => {
    cy.viewport(412, 846);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy S10", () => {
    cy.viewport("samsung-s10");
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy S10+", () => {
    cy.viewport(412, 869);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy A5", () => {
    cy.viewport(720, 1280);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy A8", () => {
    cy.viewport(1080, 1920);
    cy.login(data.email, data.password);
    cy.webLandingPageTest();
  });

  it("verify in Galaxy S7", () => {
    cy.viewport(360, 640);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });

  it("verify in Galaxy S10+", () => {
    cy.viewport(412, 869);
    cy.login(data.email, data.password);
    cy.mobileLandingPageTest();
  });
});
