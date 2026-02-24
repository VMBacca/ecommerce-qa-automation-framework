class InventoryPage {
  addFirstItemToCart() {
    cy.get(".inventory_item")
      .first()
      .within(() => {
        cy.contains("Add to cart").click();
      });
  }

  removeFirstItemFromCart() {
    cy.get(".inventory_item")
      .first()
      .within(() => {
        cy.contains("Remove").click();
      });
  }

  getCartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  openCart() {
    cy.get(".shopping_cart_link").click();
  }

  getCartItems() {
    return cy.get(".cart_item");
  }
}

export default new InventoryPage();
