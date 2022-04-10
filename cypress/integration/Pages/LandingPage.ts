import * as data from "../../fixtures/credentials.json";

class LandingPage {
  mobileUserProfile() {
    return cy.get(":nth-child(2) > .Header-link > .octicon > path");
  }

  webUserProfile() {
    return cy.get(
      ".js-feature-preview-indicator-container > .Header-link > .avatar"
    );
  }

  mobileUserName() {
    return cy.get('[href="/Prasanth-QA"]');
  }

  webUserName() {
    return cy.get('strong[class="css-truncate-target"]');
  }

  mobileSignout() {
    return cy.get('form[action="/logout"]');
  }

  webSignout() {
    return cy.get('button[class*="dropdown-signout"]');
  }

  //Methods

  webLandingPageTest() {
    //Click on view profile icon
    this.webUserProfile().click();

    //Capture Screen Print
    cy.screenshot({ overwrite: true });

    /* Verify that the right username/email address is 
    displayed on the text "Signed in as <username/email address>" */
    this.webUserName().should("contain.text", data.userName);

    //Click on the Sign-out button
    this.webSignout().click();
  }

  mobileLandingPageTest() {
    //Click on view profile icon
    this.mobileUserProfile().click();

    //Capture Screen Print
    cy.screenshot({ overwrite: true });

    /* Verify that the right username/email address is 
  displayed on the text "Signed in as <username/email address>" */
    this.mobileUserName().should("contain.text", data.userName);

    //Click on the Sign-out button
    this.mobileSignout().click();
  }
}
export default LandingPage;
