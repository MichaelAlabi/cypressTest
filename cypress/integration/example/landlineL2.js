describe('L2 Landline Tiles Validation', () => {
   
   
beforeEach (() => {
        cy.visit('https://www.virginmedia.com/help/landline');
        cy.request('https://www.virginmedia.com/help/landline')
        cy.get("#consent_prompt_submit").click();
        cy.viewport(1280, 720);
        cy.wait(1000);
});        

it('manage your landline tile on L2 is clickable and redirected to correct endpoint', () => {
     cy.get('#_manage-your-landline').click();
     cy.url().should('eq', 'https://www.virginmedia.com/care/manage-your-landline');


});



it('fix your landline tile on L2 is clickable and redirected to correct endpoint', () => {
     cy.url().should('eq', 'https://www.virginmedia.com/care/fix-your-landline');


});

it('check service status tile on L2 is clickable and redirected to correct endpoint', () => {   
     cy.url().should('eq', 'https://care.virginmedia.com/care/service-status');

});

it('nuisance calls tile on L2 is clickable and redirected to correct endpoint', () => {   
    cy.get('#_dealing-with-nuisance-calls').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/home-phone-nuisance-calls');

});


it('billing & payments tile on L2 is clickable and redirected to correct endpoint', () => {   
     cy.get('#_billing-and-payments').click();
     cy.url().should('eq', 'https://www.virginmedia.com/help/billing-and-payments');

});

it('change package tile on L2 is clickable and redirected to correct endpoint', () => {      
    cy.get('#_change-package-landline').click();
    cy.url().should('eq', 'https://www.virginmedia.com/care/change-package-landline');

 });


});

