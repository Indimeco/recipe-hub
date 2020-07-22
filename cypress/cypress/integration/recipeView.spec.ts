describe('Recipes', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Can edit recipes', () => {
    const timestamp = Date.now();
    const testBook = `${timestamp} cypress book`;

    /* Book View */
    cy.createBook(testBook);

    /* Recipe Area View */
    cy.findByText(testBook).click(); // Go to recipe area
    cy.findByText('Add a recipe').click();
    cy.findByText('New Recipe').should('exist');

    /* Recipe Detail View */
    cy.findByText('New Recipe').click(); // Go to recipe detail view
    cy.findByText('Edit').click();

    const testRecipe = `${timestamp} cypress recipe`;
    cy.findByLabelText('Recipe name').clear().type(testRecipe);

    const testDirections = 'Hello my baby, hello my honey';
    cy.findByLabelText('Directions').clear().type(testDirections);

    cy.findByText('Save').click();
    cy.findAllByText(testRecipe).should('have.length', 2); // Recipe name on the recipe level plus updated breadcrumb
    cy.findByText(testDirections).should('exist');

    /* Recipe Area View */
    cy.useNavigation(testBook); // Breadcrumb
    cy.findAllByText(testRecipe).should('exist');

    /* Recipe Detail View */
    cy.findAllByText(testRecipe).click(); // Recipe entry in on the book level
    cy.findAllByText(testRecipe).should('have.length', 2); // Recipe name on the recipe level plus updated breadcrumb
    cy.findByText(testDirections).should('exist');
  });
});
