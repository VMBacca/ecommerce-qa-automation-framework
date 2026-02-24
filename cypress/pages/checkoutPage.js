class CheckoutPage {
  clickCheckout() {
    cy.contains("Checkout").click();
  }

  fillFirstName(firstName) {
    cy.get("#first-name").clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get("#last-name").clear().type(lastName);
  }

  fillPostalCode(postalCode) {
    cy.get("#postal-code").clear().type(postalCode);
  }

  clickContinue() {
    cy.get("#continue").click();
  }

  clickFinish() {
    cy.get("#finish").click();
  }

  getSuccessMessage() {
    return cy.get(".complete-header");
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

export default new CheckoutPage();
