import loginPage from "../pages/loginPage";
import inventoryPage from "../pages/inventoryPage";

describe("Cart Tests - SauceDemo", () => {
  beforeEach(() => {
    loginPage.visit();

    cy.fixture("users").then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    cy.url().should("include", "/inventory.html");
  });

  it("Should add product to cart", () => {
    inventoryPage.addFirstItemToCart();
    inventoryPage.getCartBadge().should("have.text", "1");
  });

  it("Should remove product from cart", () => {
    inventoryPage.addFirstItemToCart();
    inventoryPage.getCartBadge().should("have.text", "1");

    inventoryPage.removeFirstItemFromCart();
    inventoryPage.getCartBadge().should("not.exist");
  });

  it("Should display product inside cart page", () => {
    inventoryPage.addFirstItemToCart();
    inventoryPage.openCart();

    inventoryPage.getCartItems().should("have.length", 1);
  });
});
