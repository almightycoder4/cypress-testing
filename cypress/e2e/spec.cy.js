import axios from "axios";
describe("Testing the counter application", () => {
  it("intial value should be zero", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-testid=value-div]").should("be.visible");
    cy.get("[data-testid=value-div]").should("have.text", "Value:3");
  });
});
