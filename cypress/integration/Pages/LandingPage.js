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
    return cy.get('button[class*="dropdown-signout"]')
  }
}
export default LandingPage;
