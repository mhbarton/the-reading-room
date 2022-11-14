describe('Error handling flows', () => {
  it('Should show an error when all books cannot be retrieved', () => {
    cy.intercept('GET', 'https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks', {
      forceNetworkError: true
    }).as('error')
    cy.visit('http://localhost:3000')
    cy.get('.error-message').contains('Sorry, no books are available.')
  });
});