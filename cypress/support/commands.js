import * as data from "../fixtures/credentials.json";
import LandingPage from "../integration/Pages/LandingPage";
const landingPage = new LandingPage();

// Launch URL and Sign in using credentials
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  cy.get("#login_field").type(email);
  cy.get("#password").type(password);
  cy.get('input[type="submit"]').click();
});

//Verify Landing page and Sign out in mobile
Cypress.Commands.add("mobileLandingPageTest", () => {
  //Click on view profile icon
  landingPage.mobileUserProfile().click();

  //Capture Screen Print
  cy.screenshot({ overwrite: true });

  /* Verify that the right username/email address is 
  displayed on the text "Signed in as <username/email address>" */
  landingPage.mobileUserName().should("contain.text", data.userName);

  //Click on the Sign-out button
  landingPage.mobileSignout().click();
});

//Verify Landing page and Sign out in web
Cypress.Commands.add("webLandingPageTest", () => {
  //Click on view profile icon
  landingPage.webUserProfile().click();

  //Capture Screen Print
  cy.screenshot({ overwrite: true });
  
  /* Verify that the right username/email address is 
    displayed on the text "Signed in as <username/email address>" */
  landingPage.webUserName().should("contain.text", data.userName);

  //Click on the Sign-out button
  landingPage.webSignout().click();
});
