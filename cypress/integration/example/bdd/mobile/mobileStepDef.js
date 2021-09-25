import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});  
Given("I am navigated to virgin media's help page",() => {
     cy.visit("https://www.virginmedia.com/help");
     cy.get("#consent_prompt_submit").click()
})
 
 
And("I switch to mobile device view", () => {
   cy.viewport(1280, 720);
})
When("I click the mobile tile", () => {     
    cy.get("#_mobile").click();
   
})
 
Then("I should be navigated to virgin media's mobile page", () => {
   cy.url().should("eq", "https://www.virginmedia.com/help/mobile");
   cy.wait(1000);
   cy.get('#_managing-my-account').click();
   cy.get("#_my-online-account").click();
   cy.get('#_my-online-account-faqs').click();
});
