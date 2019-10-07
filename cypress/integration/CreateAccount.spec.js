context('CreateAccount', () => {
  beforeEach(() => {
    cy.visit(Cypress.env(Cypress.env('BUILDENV')))
  })

  it('should render validation errors when required fields are empty', () => {
    cy.get('.MuiButton-root')
      .click()

    cy.get('#email-helper-text')
      .should('contain', 'Please input a valid email.')

    cy.get('#password-helper-text')
      .should('contain', 'Please input a password with min length of 8.')

    cy.get('#colour-helper-text')
      .should('contain', 'Please select a colour.')

    cy.get('#animal-helper-text')
      .should('contain', 'Please select at least two animals.')
  })

  it('should be submitted successfully when required field values are valid', () => {
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

    cy.get('[type="checkbox"]')
      .check('donkey').should('be.checked')

    cy.get('#tiger_type')
      .type('tiger type').should('have.value', 'tiger type')

    cy.get('.MuiButton-root').click()

    cy.get('#account-created-message')
      .should('contain', 'Yay! Account successfully created for fake@email.com!')

    cy.get('#account-created-details')
      .should('contain', 'You have chosen blue for colour, also Bear, Tiger and Donkey for animals with tiger type value set to tiger type.')
  })
})
