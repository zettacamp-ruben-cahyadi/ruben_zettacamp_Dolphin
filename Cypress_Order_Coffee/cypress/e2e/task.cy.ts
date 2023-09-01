const user = 'Ruben'
const pass= 'Mercedes'

describe('Order Coffee Automation Testing', () => {
  beforeEach(() => {
      cy.visit('http://localhost:4200/ ')
  })

  // Task a
  it('Customer open the application and see the user login page', () => {
    cy.get('[data-cy="text-title-login"]').should('be.visible')
    cy.get('[data-cy="input-name"]').should('be.visible')
    cy.get('[data-cy="input-password"]').should('be.visible')
    cy.get('[data-cy="btn-login"]').should('be.visible')
  })

  // Task b
  it('Customer can enter their name and password to the available inputs', () => {
    cy.get('[data-cy="input-name"]').type(user)
    cy.wait(1000)
    cy.get('[data-cy="input-password"]').type(pass)
    cy.wait(1000)
  })

  // Task c
  it('Customer can login by clicking the button “Login” after filling their credentials', () => {
    cy.get('[data-cy="input-name"]').type(user)
    cy.wait(1000)
    cy.get('[data-cy="input-password"]').type(pass)
    cy.wait(1000)
    cy.get('[data-cy="btn-login"]').click()
    cy.wait(2000)
  })

  it('Customer can logout by clicking the button “Logout” after login', () => {
    cy.get('[data-cy="input-name"]').type(user)
    cy.wait(1000)
    cy.get('[data-cy="input-password"]').type(pass)
    cy.wait(1000)
    cy.get('[data-cy="btn-login"]').click()
    cy.wait(2000)
    cy.get('[data-cy="btn-logout"]').click()
    cy.wait(2000)
  })
})