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
When("I click slow or no broadband tile", () => {     
    cy.get("#_slow-or-no-broadband").click();
   
})
 
Then("I should be navigated to virgin media's check services page", () => {
   cy.url().should("eq", "https://care.virginmedia.com/care/check-services");
   cy.wait(1000);
});
