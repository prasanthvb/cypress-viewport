/// <reference types="cypress" />

import * as data from "../../fixtures/credentials.json";
import LoginPage from '../../integration/Pages/LoginPage';
import LandingPage from '../../integration/Pages/LandingPage';

let loginpage = new LoginPage();
let landingpage = new LandingPage();

describe("Running test in different mobile view ports", () => {
  it("verify in iphone-3", () => {
    cy.viewport("iphone-3");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-4", () => {
    cy.viewport("iphone-4");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-5", () => {
    cy.viewport("iphone-5");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-6", () => {
    cy.viewport("iphone-6");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-6+", () => {
    cy.viewport("iphone-6+");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-7", () => {
    cy.viewport("iphone-7");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-8", () => {
    cy.viewport("iphone-8");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-x", () => {
    cy.viewport("iphone-x");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-xr", () => {
    cy.viewport("iphone-xr");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in iphone-se2", () => {
    cy.viewport("iphone-se2");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in ipad-2", () => {
    cy.viewport("ipad-2");
    loginpage.login(data.email, data.password);
    landingpage.webLandingPageTest();
  });

  it("open in ipad-mini", () => {
    cy.viewport("ipad-mini");
    loginpage.login(data.email, data.password);
    landingpage.webLandingPageTest();
  });

  it("verify in Galaxy S8", () => {
    cy.viewport(360, 740);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy S9", () => {
    cy.viewport(360, 740);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy S9+", () => {
    cy.viewport(412, 846);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy S10", () => {
    cy.viewport("samsung-s10");
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy S10+", () => {
    cy.viewport(412, 869);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy A5", () => {
    cy.viewport(720, 1280);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy A8", () => {
    cy.viewport(1080, 1920);
    loginpage.login(data.email, data.password);
    landingpage.webLandingPageTest();
  });

  it("verify in Galaxy S7", () => {
    cy.viewport(360, 640);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });

  it("verify in Galaxy S10+", () => {
    cy.viewport(412, 869);
    loginpage.login(data.email, data.password);
    landingpage.mobileLandingPageTest();
  });
});
