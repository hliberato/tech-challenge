describe('Filter pokemons by term', () => {
  it('Visits generation page', () => {
    cy.visit('/')
    cy.get('.home-view__button.el-button--primary').click()
    cy.get('.generation-card:first').click()
  })

  it('Filter by "Pikachu"', () => {
    cy.get('input').type('Pikachu')
    cy.contains('table.el-table__body', 'Pikachu')
  })
})
