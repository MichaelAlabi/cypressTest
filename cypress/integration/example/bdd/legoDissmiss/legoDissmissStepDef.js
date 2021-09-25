///<reference types= "Cypress" />

import { should } from "chai";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
 
Given("I am navigated to virgin media's staging environment on mobile device view",() => {
     cy.visit("https://www.virginmedia.com/help/billing-and-payments");
     //cy.get("#consent_prompt_submit").click();
     cy.get(("#_understanding-your-bills").click()
     cy.get("#_current-bill-explainer").click();
     //cy.viewport(1280, 720);
});
 
 
