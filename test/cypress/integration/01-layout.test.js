describe('home page', () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit('/');
  });

  it('should have text "Open Source Community Africa"', () => {
    cy.contains('Open Source Community Africa');
  });

  it('header should have 6 achor tags', () => {
    cy.get('header a').should('have.length', 6);
  });

  it('footer should have 8 achor tags', () => {
    cy.get('footer a').should('have.length', 8);
  });
});
