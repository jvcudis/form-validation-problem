describe('happy path', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('is submitted successfully', () => {
    cy.get('#email')
      .type('fake@email.com').should('have.value', 'fake@email.com')

    cy.get('#password')
      .type('somepassword').should('have.value', 'somepassword')

    cy.get('#select-colour')
      .click()

    cy.get('#menu-colour')
      .find('ul > li').first()
      .click()

    cy.get('#colour')
      .focus().should('have.value', 'blue')

    cy.get('[type="checkbox"]')
      .check('bear').should('be.checked')

    cy.get('[type="checkbox"]')
      .check('tiger').should('be.checked')

    cy.get('#tiger_type')
      .type('tiger type').should('have.value', 'tiger type')

    cy.get('.MuiButton-root').click()
      .next().should('contain', 'Your form has been submitted!')
  })
})
