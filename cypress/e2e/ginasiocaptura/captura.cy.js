/// <reference types="cypress" />
describe('Testes de Capturia', () => {
  it('Capturar um pockemon', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    //cy.screenshot('captura_tela');
    //cy.log(cy.get('#list-poke > :nth-child(1)'))
    cy.get('[data-cy="input-username"]').type('Ash')
    cy.get('[data-cy="input-password"]').type('123456')
    cy.get('[data-cy="input-pokeinit"]').type('Pikachu')
    cy.get('[data-cy="botao-login"]').click()
    //cy.get('#list-poke li:nth-child(1)').click();
  });
  it('Validar criação com treinador e pockemon fora da lista', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    cy.get('[data-cy="input-username"]').click();
    cy.get('[data-cy="input-username"]').type('Ashalay');
    cy.get('[data-cy="input-password"]').type('123456');
    cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
    cy.get('[data-cy="botao-login"]').click();
    cy.get('#mensagem-feedback').should('contain', 'TREINADOR QUALQUER')
  });
  it('Validar Treinador e pockemon da lista', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    /*cy.get('[data-cy="input-username"]').click();
    cy.get('[data-cy="input-username"]').type('Red');
    cy.get('[data-cy="input-password"]').click();
    cy.get('[data-cy="input-password"]').type('12345');
    cy.get('#list-poke li:nth-child(1)').click();
    cy.get('[data-cy="input-pokeinit"]').click();
    cy.get('[data-cy="input-pokeinit"]').type('Charmander');
    cy.get('[data-cy="botao-login"]').click();
    cy.get('#mensagem-feedback').last().should('have.text', 'Login de Red TREINADOR CLÁSSICO efetuado com sucesso!')*/
    cy.get('[data-cy="input-username"]').click();
    cy.get('[data-cy="input-username"]').type('Red');
    cy.get('[data-cy="input-password"]').click();
    cy.get('[data-cy="input-password"]').type('123456');
    cy.get('[data-cy="input-pokeinit"]').click();
    cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
    cy.get('[data-cy="botao-login"]').click();
    cy.get('#mensagem-feedback').should('have.text', 'Login de Red TREINADOR CLÁSSICO efetuado com sucesso!');
  });
 
});