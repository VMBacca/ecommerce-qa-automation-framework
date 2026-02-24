describe("API Tests - JSONPlaceholder", () => {
  it("Should return list of posts with status 200", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0]).to.have.property("id");
        expect(response.headers).to.have.property("content-type");
      },
    );
  });

  it("Should return single post", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("body");
      },
    );
  });

  it("Should return 404 for non-existing post", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/999999",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
