//Testando footer responsivo
describe('Teste de Responsividade do Footer', () => {
  beforeEach(() => {
    // Visita a aplicação local antes de cada teste
    cy.visit('http://localhost:3000');
    cy.wait(1000);
  });

  it('Deve exibir os blocos do rodapé empilhados (Coluna) no Mobile', () => {
    // Simula a tela de um iPhone X
    cy.viewport('iphone-x');
    cy.wait(2000);

    // Verifica se a direção do flex é column no mobile
    cy.get('[data-cy="footer-container"]')
      .should('be.visible')
      .and('have.css', 'flex-direction', 'column');

    // Garante que os 3 blocos internos estão visíveis na tela
    cy.get('[data-cy="footer-bloco-1"]').should('be.visible');
    cy.get('[data-cy="footer-bloco-2"]').should('be.visible');
    cy.get('[data-cy="footer-bloco-3"]').should('be.visible');
  });

  it('Deve exibir os blocos do rodapé lado a lado (Linha) no Desktop', () => {
    // Simula a tela de um Macbook 15
    cy.viewport('macbook-15');
    cy.wait(2000);

    // Verifica se a direção do flex muda para row no desktop
    cy.get('[data-cy="footer-container"]')
      .should('be.visible')
      .and('have.css', 'flex-direction', 'row');

    // Garante que os 3 blocos internos estão visíveis na tela
    cy.get('[data-cy="footer-bloco-1"]').should('be.visible');
    cy.get('[data-cy="footer-bloco-2"]').should('be.visible');
    cy.get('[data-cy="footer-bloco-3"]').should('be.visible');
  });
});