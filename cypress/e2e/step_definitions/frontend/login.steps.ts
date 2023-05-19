import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '@pages/loginPage'

Given('I am on the login page', () => {
  loginPage.load()
})

When(
  'I enter valid credentials \\(username: {string}, password: {string}\\)',
  (username: string, password: string) => {
    loginPage.enterEmail(username)
    loginPage.enterPassword(password)
  }
)

When(
  'I enter invalid credentials \\(username: {string}, password: {string}\\)',
  (username: string, password: string) => {
    loginPage.enterEmail(username)
    loginPage.enterPassword(password)
  }
)

When('I click the login button', () => {
  loginPage.clickLoginButton()
})

Then('I should see an error message is {string}', (message: string) => {
  loginPage.getErrorMessage().should('contain.text', message)
})

Then('I should be redirected to the home page', () => {
  cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
})

Then('I should not be redirected to the home page', () => {
  cy.url().should('contain', 'https://www.saucedemo.com/')
})
