import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";
import checkoutPage from "../pages/checkoutPage";

describe("Checkout Tests - SauceDemo", () => {
  beforeEach(() => {
    loginPage.visit();

    cy.fixture("users").then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    inventoryPage.addFirstItemToCart();
    inventoryPage.openCart();
  });

  it("Should complete checkout successfully", () => {
    checkoutPage.clickCheckout();

    checkoutPage.fillFirstName("Vini");
    checkoutPage.fillLastName("MB");
    checkoutPage.fillPostalCode("65813");
    checkoutPage.clickContinue();

    checkoutPage.clickFinish();

    checkoutPage
      .getSuccessMessage()
      .should("contain", "Thank you for your order!");
  });

  it("Should show error when required fields are empty", () => {
    checkoutPage.clickCheckout();
    checkoutPage.clickContinue();

    checkoutPage.getErrorMessage().should("be.visible");
  });
});
