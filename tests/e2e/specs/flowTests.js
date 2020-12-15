describe('Flow tests by URL', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to PokeGames Generations')
  })

  it('Visit generations by url', () => {
    cy.visit('/#/generations')
    cy.get('.generations-view').should('be.visible')
  })
})
