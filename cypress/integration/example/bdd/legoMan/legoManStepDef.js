/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
 
Given("I am navigated to virgin media's staging environment on mobile device view",() => {
     cy.visit("https://www.virginmedia.com/support/help");
     cy.get("#consent_prompt_submit").click();
     cy.viewport(1280, 720);
})
 
 
And("I click the lego man logo", () => {     
    cy.get(".care-header-lg > .care-header-container > .care-header__vm-logo > vm-care-login > .care-popover > .user-account-btn").click();
})

When("I click the sign in button and I enter my registered credentials", () => {
    cy.get(":nth-child(2) > .vm-col-lg-12 > .login-title > .text-button").click();
    cy.get("#username").type("test.900@virginmedia.com");
    cy.get("#password").type("test12345");
    
})

And("I click the submit button",() => {
    cy.get("#sign-btn-tag").click();    

})
Then("I should be successfully signed in", () => {
    cy.url().should("eq", "https://www.virginmedia.com/support/help");

})