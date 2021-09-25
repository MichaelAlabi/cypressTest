describe('L2 Billing and Payments Tiles Validation', () => {
   
   
    beforeEach (() => {
        cy.visit('https://www.virginmedia.com/help/billing-and-payments');
        cy.request('https://www.virginmedia.com/help/billing-and-payments');
        cy.get("#consent_prompt_submit").click();
        cy.viewport(1280, 720);
    });       
        
 it('Understanding your bills tile on L2 is clickable and redirected to correct endpoint', () => {
        cy.get('#_understanding-your-bills').click();
        cy.url().should('eq', 'https://www.virginmedia.com/care/understanding-your-bills');
        

 });

it('automatic compnsation scheme tile on L2 is clickable and redirected to correct endpoint', () => { 
      cy.get('#_automatic-compensation-scheme').click();
      cy.url().should('eq', 'https://www.virginmedia.com/help/automatic-compensation');


});


it('mobile billing tile on L2 is clickable and redirected to correct endpoint', () => {
      cy.get('#_mobile-billing').click();
      cy.url().should('eq', 'https://www.virginmedia.com/help/accounts-and-billing/mobile/billing/view-my-bill');

});

it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => {
      cy.get('#_view-your-bill-1').click();


});


it('struggling to pay tile on L2 is clickable and redirected to correct endpoint', () => {
cy.get('#_struggling-to-pay-3').click();
cy.url().should('eq', 'https://www.virginmedia.com/help/virgin-media-cant-make-a-payment');

});

});