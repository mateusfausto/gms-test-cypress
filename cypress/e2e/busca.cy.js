/// <reference types="cypress"/>

describe("US-001 - Funcionalidade: Busca de Filmes", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.screenshot();
  }); 

  
  it("Deve buscar filme com sucesso.", () => {
    cy.get("#search-input").type("Matrix");
    cy.get("#search-button").click();
    cy.get("#results-section").should("contain", "Matrix");
  });

  it("Deve buscar uma lista de filmes com sucesso.", () => {
    cy.fixture("filmes").then((filmes) => {
      cy.get("#search-input").type(filmes[2].titulo);
      cy.get("#search-button").click();
      cy.get("#results-section").should("contain", filmes[2].titulo);
    });
  });

  it.only("Deve buscar uma lista de filmes com sucesso.", () => {
    cy.fixture("filmes").each((filmes) => {
      cy.get("#search-input").clear().type(filmes.titulo);
      cy.get("#search-button").click();
      cy.get("#results-section").should("contain", filmes.titulo);
    });
  });
});
