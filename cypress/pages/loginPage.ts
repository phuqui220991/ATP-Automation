class LoginPage {
  load() {
    cy.visit('/')
  }

  enterEmail(email: string) {
    cy.get('#user-name').clear()
    cy.get('#user-name').type(email)
  }

  enterPassword(password: string) {
    cy.get('#password').clear()
    cy.get('#password').type(password)
  }

  clickLoginButton() {
    cy.get('#login-button').click()
  }

  getErrorMessage() {
    return cy.get('h3[data-test="error"]')
  }
}

export const loginPage = new LoginPage()
