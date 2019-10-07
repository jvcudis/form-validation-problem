context('ValidateFields', () => {
  beforeEach(() => {
    cy.visit(Cypress.env(Cypress.env('BUILDENV') || 'dev'))
  })

  it('should require a valid email', () => {
    // Input an invalid email value
    cy.get('#email')
      .clear()
      .type('abcdefg')

    // Click create-account button to trigger validation
    // No need to click the button again on subsequent validity checks
    cy.get('.MuiButton-root').click()

    // A helper text value represents and error (from MUI)
    cy.get('#email-helper-text')
      .should('contain', 'Please input a valid email.')

    // Input an empty value
    cy.get('#email')
      .clear()
    cy.get('#email-helper-text')
      .should('contain', 'Please input a valid email.')

    // Input a valid email value
    cy.get('#email')
      .clear()
      .type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('#email-helper-text')
      .should('not.exist')

    // Still considered valid
    cy.get('#email')
      .clear()
      .type('fake@email').should('have.value', 'fake@email')
    cy.get('#email-helper-text')
      .should('not.exist')
  })

  it('should require a valid password', () => {
    // Input an invalid password value
    cy.get('#password')
      .clear()
      .type('abcd')

    // Click create-account button to trigger validation
    // No need to click the button again on subsequent validity checks
    cy.get('.MuiButton-root').click()

    // A helper text value represents and error (from MUI)
    cy.get('#password-helper-text')
      .should('contain', 'Please input a password with min length of 8.')

    // Input an empty value
    cy.get('#password')
      .clear()
    cy.get('#password-helper-text')
      .should('contain', 'Please input a password with min length of 8.')

    // Input a valid password value
    cy.get('#password')
      .clear()
      .type('abc123*#').should('have.value', 'abc123*#')
    cy.get('#password-helper-text')
      .should('not.exist')
  })

  it('should require at a colour selected', () => {
    cy.get('#select-colour')
      .click()

    // Click create-account button to trigger validation
    // No need to click the button again on subsequent validity checks
    cy.get('.MuiButton-root').click()

    cy.get('#colour-helper-text')
      .should('contain', 'Please select a colour.')

    // Select brown color
    cy.get('#menu-colour')
      .find('ul > li').last()
      .click()
    cy.get('#colour')
      .focus().should('have.value', 'brown')
    cy.get('#colour-helper-text')
      .should('not.exist')

    // Select another color, red in this case
    cy.get('#menu-colour')
      .find('ul > li').eq(2)
      .click()
    cy.get('#colour')
      .focus().should('have.value', 'red')
    cy.get('#colour-helper-text')
      .should('not.exist')
  })

  it('should require at least two animals selected', () => {
    // Click create-account button to trigger validation
    // No need to click the button again on subsequent validity checks
    cy.get('.MuiButton-root').click()

    cy.get('#animal-helper-text')
      .should('contain', 'Please select at least two animals.')

    // Select first animal, bear
    cy.get('[type="checkbox"]')
      .check('bear').should('be.checked')
    cy.get('#animal-helper-text')
      .should('contain', 'Please select at least two animals.')

    // Select second animal, donkey
    cy.get('[type="checkbox"]')
      .check('donkey').should('be.checked')
    cy.get('#animal-helper-text')
      .should('contain', '')
  })

  describe('when tiger animal is selected', () => {
    it('should require a valid tiger type', () => {
      // Click create-account button to trigger validation
      // No need to click the button again on subsequent validity checks
      cy.get('.MuiButton-root').click()

      // Select tiger
      cy.get('[type="checkbox"]')
        .check('tiger').should('be.checked')

      // Should render the tiger type field with error
      cy.get('#tiger_type')
        .should('exist')
      cy.get('#tiger_type-helper-text')
        .should('contain', 'Please input a string value.')

      // Inputn an empty value
      cy.get('#tiger_type')
        .clear()
      cy.get('#tiger_type-helper-text')
        .should('contain', 'Please input a string value.')

      // Input a value with invalid characters
      cy.get('#tiger_type')
        .clear()
        .type('awesometiger$')
      cy.get('#tiger_type-helper-text')
        .should('contain', 'Please input a string value.')

      // Input a value with space
      cy.get('#tiger_type')
        .clear()
        .type('awesome tiger')
      cy.get('#tiger_type-helper-text')
        .should('not.exist')

      // Input an alphanumeric value
      cy.get('#tiger_type')
        .clear()
        .type('awesometiger1')
      cy.get('#tiger_type-helper-text')
        .should('not.exist')
    })
  })
})
