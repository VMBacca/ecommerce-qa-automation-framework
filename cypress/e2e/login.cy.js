import loginPage from "../pages/loginPage";

describe("Login Tests - SauceDemo", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Should login successfully with valid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    cy.url().should("include", "/inventory.html");
  });

  it("Should show error with invalid credentials", () => {
    cy.fixture("users").then((users) => {
      cy.login(users.invalidUser.username, users.invalidUser.password);
    });

    loginPage.getErrorMessage().should("be.visible");
  });
});
