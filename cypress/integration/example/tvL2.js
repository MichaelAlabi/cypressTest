describe('L2 TV Tiles Validation', () => {
   
   
beforeEach (() => {
            cy.visit('https://www.virginmedia.com/help/tv');
            cy.request('https://www.virginmedia.com/help/tv')
            cy.get("#consent_prompt_submit").click();
            cy.viewport(1280, 720);
            
    });   

it('fix your tv tile on L2 is clickable and redirected to correct endpoint', () => {  
    cy.get('#_fix-your-tv').click();
    cy.url().should('eq', 'https://www.virginmedia.com/care/fix-your-tv');

});



it('change package tile on L2 is clickable and redirected to correct endpoint', () => {  
    cy.get('#_change-package-2').click();
    cy.url().should('eq', 'https://www.virginmedia.com/care/change-package-2');

});    


it('set up your tv tile on L2 is clickable and redirected to correct endpoint', () => {  
    cy.get('#_set-up-your-tv-1').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/setup/triple/get-started');

});


it('billing & payments tile on L2 is clickable and redirected to correct endpoint', () => {  
    cy.get('#_billing-and-payments-2').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/billing-and-payments');

});
   
it('error codes tile on L2 is clickable and redirected to correct endpoint', () => {  
    cy.get('#_tv-error-code').click();
    cy.url().should('eq', 'https://www.virginmedia.com/care/tv-error-code/which-error-code');

});

});