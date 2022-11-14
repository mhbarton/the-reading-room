describe('Favorites page flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks', {
      fixture: "sampleData.json"
    }).as("favorites")
    cy.visit('http://localhost:3000/favorites')
  });

  it('Should not display any favorites if none exist', () => {
    cy.get('.no-favorite').contains('You don\'t have any favorites yet!')
  });
});