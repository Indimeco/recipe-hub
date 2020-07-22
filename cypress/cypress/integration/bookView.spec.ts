describe('Book view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Lists starting books', () => {
    cy.findByText('My Books').should('exist');
    cy.findByText("Baby Bear's Jam Encylopedia").should('exist');
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

  it('Can load paginated books', () => {
    /*
     * ASSUMPTIONS
     * Database is populated with more than 10 books
     * Pagination shows load more on 10 books
     * Pagination is sorted alphabetically
     */
    const timestamp = Date.now();
    const firstBook = `AAA ${timestamp} cypress book`;
    const lastBook = `ZZZ ${timestamp} cypress book`;
    cy.createBook(firstBook);
    cy.createBook(lastBook);

    cy.findByText(firstBook).should('exist');
    cy.findByText(lastBook).should('not.exist');
    cy.findAllByTestId('BookArea__BookInformation').should('have.length', 10);

    cy.findByText('Load more').click();

    cy.findAllByTestId('BookArea__BookInformation').should('have.length.greaterThan', 10);
    cy.findAllByTestId('BookArea__BookInformation').should('have.length.lessThan', 21);
    cy.findByText(firstBook).should('exist');
    cy.findByText(lastBook).should('exist');

    cy.reload();
    cy.findByText(firstBook).should('exist');
    cy.findByText(lastBook).should('not.exist');

    cy.findByText('Load more').click();
    cy.findByText(lastBook).should('exist');
  });

  it('Can rename a book', () => {
    const timestamp = Date.now();
    const testBook = `${timestamp} cypress book`;
    cy.createBook(testBook);

    /* Recipe Area View */
    cy.findByText(testBook).should('exist').click();
    cy.findAllByText(testBook).should('have.length', 2); // Book name plus breadcrumb
    cy.useNavigation('My Books'); // return via breadcrumb

    /* Book Area View */
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
});
