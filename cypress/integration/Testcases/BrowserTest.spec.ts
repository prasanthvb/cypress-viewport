/// <reference types="cypress" />

import * as data from "../../fixtures/credentials.json";
import LoginPage from "../../integration/Pages/LoginPage";
import LandingPage from "../../integration/Pages/LandingPage";

let loginpage = new LoginPage();
let landingpage = new LandingPage();

describe("Running test in web Browser", () => {
  it(
    "Test to verify web view in Electron browser",
    { browser: "electron" },
    () => {
      loginpage.login(data.email, data.password);
      landingpage.webLandingPageTest();
    }
  );

  it(
    "Test to verify web view in firefox browser",
    { browser: "firefox" },
    () => {
      loginpage.login(data.email, data.password);
      landingpage.webLandingPageTest();
    }
  );

  it("Test to verify web view in chrome browser", { browser: "chrome" }, () => {
    loginpage.login(data.email, data.password);
    landingpage.webLandingPageTest();
  });

  it("Test to verify web view in edge browser", { browser: "edge" }, () => {
    loginpage.login(data.email, data.password);
    landingpage.webLandingPageTest();
  });
});
