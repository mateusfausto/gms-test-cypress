/// <reference types="cypress"/>

describe('US-012 - Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://192.168.0.10:8080/')
    cy.get('#signup-firstname').type('Mateus')
    cy.get('#signup-lastname').type('Fausto')
    cy.get('#signup-email').type('teste4@teste.com')
    cy.get('#signup-phone').type('21999999999')
    cy.get('#signup-password').type('Teste&2121')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')    
  })
})