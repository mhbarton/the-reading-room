describe('Home page flows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://the-reading-room-api.herokuapp.com/api/v1/childrensbooks', {
      fixture: "sampleData.json"
    }).as("books")
    cy.visit('http://localhost:3000')
  })

  it('Should be able to have a homepage with a nav bar', () => {
    cy.get('.nav-container').should('exist')  
    .get('.site-design').should('exist')
    .get('.site-title').should('exist')
    .get('.site-design').should('exist')
  })

  it('Should have a header the user can read', () => {
    cy.get('.welcome-message-one').contains("Learning to love to read starts at an early age and often starts at home.")
    cy.get('.welcome-message-two').contains("As you visit our site, we hope you are able to find some selelctions which help to nurture your child's love of reading.")
  })

  it('Should have a search bar with three buttons that filter results', () => {
    cy.get('.search-btn-container').should('exist')
    .get('.search-btn-container > :nth-child(2)').contains('Board')
    .get('.search-btn-container> :nth-child(3)').contains('Picture')
    .get('.search-btn-container> :nth-child(4)').contains('Clear')
    .get('.search-btn-container> :nth-child(2)').click()
    .get('.books-container').find('.card').should('have.length', 3)
    .get('.search-btn-container> :nth-child(4)').click()
    .get('.books-container').find('.card').should('have.length', 5)
  });

  it('Should have a collection of cards with an image, title, and author text visible', () => {
    cy.get('.books-container > :nth-child(1)').find('.image').should('have.attr', 'src', 'https://tinybeans.com/wp-content/uploads/2022/02/9780593384114.jpg?w=250')
    cy.get('.books-container > :nth-child(1)').find('.card-title').contains('The Very Hungry Caterpillar Eats Lunch A Colors Book')
    cy.get('.books-container > :nth-child(1)').find('.card-author').contains('Eric Carle')
    cy.get('.books-container > :nth-child(2)').find('.image').should('have.attr', 'src', 'https://m.media-amazon.com/images/I/61c7hni0MdL._AC_SY780_.jpg')
    cy.get('.books-container > :nth-child(2)').find('.card-title').contains('Goodnight Goodnight Construction Site')
    cy.get('.books-container > :nth-child(2)').find('.card-author').contains('Sherri Duskey Rinker')
  });

  it('Should be able to use the browser arrow buttons to go between the main page and individual path page', () => {
    cy.get('.books-container > :nth-child(1)').click()
      .visit('http://localhost:3000/1').wait(2000)
      .url().should('eq', 'http://localhost:3000/1')
      cy.go('back').reload()
      .url().should('eq', 'http://localhost:3000/')
      cy.go('forward').reload()
      .url().should('eq', 'http://localhost:3000/1')
  });
});
