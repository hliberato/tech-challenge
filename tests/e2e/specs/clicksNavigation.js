describe('Buttos navigation tests', () => {
  it('Visits home and click "Browse by generations"', () => {
    cy.visit('/')
    cy.get('.home-view__button.el-button--primary').click()
    cy.get('div.generations-view').should('be.visible')
  })

  it('Browse by clicking first generation', () => {
    cy.get('.generation-card:first').click()
    cy.get('div.generation-view').should('be.visible')
  })

  it('See Pokemon details modal', () => {
    cy.get('.el-button.el-button--default:first').click()
    cy.contains('.el-dialog', 'Capture rate')
  })
})
