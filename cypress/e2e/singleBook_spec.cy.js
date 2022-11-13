describe('Single Book page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks', {
      fixture: "sampleData.json",
    }).as("details")
    cy.visit('http://localhost:3000/1')
  });

  it('Should show a detail page for a specific book', () => {
    cy.get('.nav-container').should('exist')  
    .get('.site-design').should('exist')
    .get('.site-title').should('exist')
    .get('.site-design').should('exist')
    .get('.book-details-container').find('.single-book-image').should('have.attr', 'src', "https://tinybeans.com/wp-content/uploads/2022/02/9780593384114.jpg?w=250")
    .get('.title').contains('The Very Hungry Caterpillar Eats Lunch A Colors Book')
    .get('.author').contains('By: Eric Carle')
    .get('.book-details').contains('For Ages: 0-2')
    .get('.book-details').contains('Genre: Board')
    .get('.book-details').contains('Review: Introduce your littlest ones to a variety of foods and Eric Carle’s iconic art at the same time with this die-cut board book. Follow the Very Hungry Caterpillar through lunch meals from mac and cheese to sandwiches to tacos.')
    .get('.book-details').contains('Other Publications: The Very Hungry Caterpillar, Brown Bear, What Do You See?, The Tiny Seed')
    .get('.books-home-btn').contains('Go Home')
    .get('.books-home-btn').click()
    .visit('http://localhost:3000/').wait(2000)
    .url().should('eq', 'http://localhost:3000/')
  })
})