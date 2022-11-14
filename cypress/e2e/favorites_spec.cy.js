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

  it('Should display a favorite if a user picks one and be able to go home', () => {
    cy.get('.books-home-btn').click()
   .get(':nth-child(1) > .card').click()
   .get('.favorites-btn').click()
   .get('.all-favorites-btn').click()
   .get('.card').contains("The Very Hungry Caterpillar Eats Lunch A Colors Book")
   .get('.books-home-btn').click()
   .url().should('eq', 'http://localhost:3000/')
  })
});