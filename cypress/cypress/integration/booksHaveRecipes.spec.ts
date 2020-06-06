describe('Book view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Lists starting books', () => {
    cy.findByText('My Books').should('exist');
    cy.findByText("Jake's Recipes0").should('exist');
  });

  it('Can create new book', () => {
    const testbook = `${Date.now()} cypress book`;
    cy.findByText(testbook).should('not.exist');
    cy.findByText('Create new book').click();
    cy.findByLabelText('New book name').type(testbook);
    cy.findByText('Create').click();
    cy.findByText(testbook).should('exist');
  });
});
