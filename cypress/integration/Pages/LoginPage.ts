class LoginPage {
  username() {
    return cy.get("#login_field");
  }

  password() {
    return cy.get("#password");
  }

  loginBtn() {
    return cy.get('input[type="submit"]');
  }

  // Methods

  login(email: string, password: string) {
    cy.visit("/");
    this.username().type(email);
    this.password().type(password);
    this.loginBtn().click();
  }
}
export default LoginPage;
