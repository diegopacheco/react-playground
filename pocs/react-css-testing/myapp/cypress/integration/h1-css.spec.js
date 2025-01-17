describe('H1 CSS Test', () => {
    it('should have correct CSS classes', () => {
      cy.visit('http://localhost:3000');
      cy.get('h1')
        .should('have.class', 'text-3xl')
        .and('have.class', 'font-bold')
        .and('have.class', 'underline');
    });
  });