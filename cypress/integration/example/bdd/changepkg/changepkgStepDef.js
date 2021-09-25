///<reference types= "Cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
   return false;
 });  
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
Given("I am navigated to virgin media's help page",() => {
     cy.visit("https://www.virginmedia.com/help");
     cy.get("#consent_prompt_submit").click();
})
 
 
And("I switch to mobile device view", () => {
   cy.viewport(1280, 720);
})
When("I click the change package tile", () => {     
    cy.get("#_change-package-1").click();
   
})
 
Then("I should be navigated to virgin media's change package page", () => {
   cy.url().should("eq", "https://www.virginmedia.com/care/change-package-1");
   cy.wait(1000);
   cy.get("_broadband-tv-and-landline").click();
});