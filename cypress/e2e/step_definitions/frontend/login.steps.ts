import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/loginPage';

Given('I am on the login page', ()=> {
    loginPage.load();
})
    
When('I enter valid credentials', ()=> {
    loginPage.enterEmail("standard_user");
    loginPage.enterPassword("secret_sauce");
})
   
When('I enter invalid credentials', ()=> {
    loginPage.enterEmail("locked_out_user");
    loginPage.enterPassword("secret_sauce");
})

When('I click the login button', ()=> {
    loginPage.clickLoginButton();
})

Then('I should be redirected to the home page', ()=> {
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html');
})

Then('I should see an error message', ()=> { 
    loginPage.getErrorMessage().should('contain.text', 'Sorry, this user has been locked out.');
})

Then('I should not be redirected to the home page', ()=> {
    cy.url().should('contain', 'https://www.saucedemo.com/');
})
