describe('Book view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Lists starting books', () => {
    cy.findByText('My Books').should('exist');
    cy.findByText("Jake's Recipes0").should('exist');
  });

  it('Can create new book', () => {
    const timestamp = Date.now();
    const testBook = `${timestamp} cypress book`;
    cy.findByText(testBook).should('not.exist');
    cy.createBook(testBook);
    cy.findByText(testBook).should('exist').click();
    cy.findByText('Add a recipe').should('exist');
    cy.findAllByText(testBook).should('have.length', 2); // Book name plus breadcrumb
    cy.useNavigation('My Books');
    cy.findByText(testBook).should('exist');
  });

  it('Can rename a book', () => {
    const timestamp = Date.now();
    const testBook = `${timestamp} cypress book`;
    cy.createBook(testBook);
    cy.findByLabelText(`Settings for ${testBook}`).click();
    cy.findByText('Change name').click();
    cy.findByLabelText(`Change book name for ${testBook}`).clear().type(`renamed ${testBook}`);
    cy.findByText('Confirm').click();
    const renamedBook = `renamed ${testBook}`;
    cy.findByText(renamedBook).should('exist');
    cy.findByText(testBook).should('not.exist');

    /* Recipe Area View */
    cy.findByText(renamedBook).click();
    cy.findAllByText(renamedBook).should('have.length', 2); // Book name plus breadcrumb
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
