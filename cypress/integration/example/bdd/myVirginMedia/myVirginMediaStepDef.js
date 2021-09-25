///<reference types= "Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});  

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
Given("I am navigated to virgin media's help page",() => {
     cy.visit("https://www.virginmedia.com/help");
     cy.get("#consent_prompt_submit").click()
})
 
 
And("I switch to mobile device view", () => {
   cy.viewport(1280, 720);
})
When("I click my virgin media tile", () => {     
    cy.get("#_my-virgin-media-1").click();
   
})
 
Then("I should be navigated to my virgin media page", () => {
   cy.url().should("eq", "https://my.virginmedia.com/home/index#.");
   cy.wait(1000);
});
