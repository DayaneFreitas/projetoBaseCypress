/// <reference types="cypress" />
describe('Testes de Capturia', () => {
  //Se for um treinador da lista (clássico)
  
  it.only('Realizar login com treinador clássico', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    //cy.screenshot('captura_tela');
    //cy.log(cy.get('#list-poke > :nth-child(1)'))
    cy.get('#list-users')
    .find('li')
    .first()
    .invoke('text')
    .then((text) => text.trim())
    .as('treinador')

    cy.get('@treinador').then((treinador) => {
        cy.get('[data-cy="input-username"]').type(treinador)
        cy.log('O treinador coletado foi: ${treinador}')
    })


    /*cy.get('[data-cy="input-username"]').type('Ash')
    cy.get('[data-cy="input-password"]').type('123456')
    cy.get('[data-cy="input-pokeinit"]').type('Pikachu')
    cy.get('[data-cy="botao-login"]').click()
    //cy.get('#list-poke li:nth-child(1)').click();*/
  });

  it.only('Capturar o item que tem o texto Bubasauro', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    /*cy.get('#list-poke')
    .find('li')
    .contains('Bubasauro')
    .invoke('text')
    .then((text) => text.trim())
    .as('pokemon')


    cy.get('@pokemon').then((pokemon) => {
        cy.get('[data-cy="input-pokeinit"]').type(pokemon)
        cy.log('O treinador coletado foi: ${pokemon}')
    })*/
   //cy.contains('Bubasauro').
  });

  it.only('Validar mensagem Cypress é incrível', () => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/');
    //cy.get("#secao-info").find('p')
    cy.get('#secao-info').find('.p').should('contain', 'Bem-vindo à nossa Arena*!')
    
  });

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