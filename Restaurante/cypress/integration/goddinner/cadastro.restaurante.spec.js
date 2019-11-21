/// <reference types="Cypress" />

describe("Cadastro de restaurante", () => {
  // beforeEach(())

  it("dados do restaurante", () => {
    cy.visit('/')

    cy.get('.mt-3 > .btn').click();

    cy.get('#razaoSocial').type("Teste automazidado");

    cy.get('#cnpj').type("05.160.923/0001-24");

    cy.get('#telefone').type("(11) 10522-4255")

    cy.get('.btn').click();

    //(72) 10522-4255
  })


})

