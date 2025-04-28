/// <reference types="cypress"/>

describe("US-012 - Funcionalidade: Cadastro de membros", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Deve fazer o cadastro de campos obrigatórios", () => {
    let email = `fausto${Date.now()}@test.com`
    cy.preencherCadastro('Mateus', 'Fausto', email, '21999999999', 'Test@1234')    
    cy.get("#signup-response").should("contain", "Cadastro realizado com sucesso!");
  });

  it.only("Deve validar mensagem de erro com campo nome inválido", () => {    
    let email = `fausto${Date.now()}@test.com`
    cy.preencherCadastro('Mateus21', 'Fausto', email, '21999999999', 'Test@1234')    
    cy.get("#signup-response").should("contain", "Nome deve conter apenas caracteres");
  });
});
