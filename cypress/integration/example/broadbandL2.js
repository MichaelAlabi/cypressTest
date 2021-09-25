describe('L2 Broadband Tiles Validation', () => {
   
   
    beforeEach (() => {
        cy.visit('https://www.virginmedia.com/help/broadband');
        cy.get("#consent_prompt_submit").click();
        cy.viewport(1280, 720);
        cy.wait(4000);
        
        
 
 });
   
    
    it('moving home tile on L2 is clickable and redirected to the correct endpoint', () => {
    cy.get('#_moving').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/making-a-change-moving-home');
 
    });
 
 
    it('check service status tile on L2 is clickable and redirected to the correct endpoint',() => {
    cy.get('#_service-status').click();
    cy.url().should('eq', 'https://care.virginmedia.com/care/service-status');

 });

        it('my broadband speed tile on L2 is clickable and redirected to the correct endpoint', () => {
        cy.get('#_my-broadband-speed').click();
        cy.url().should('eq', 'https://www.virginmedia.com/help/virgin-media-how-to-check-broadband-speed');
        
    });
        
        it('billing and payments tile on L2 is clickable and redirected to the correct endpoint', () => {
        cy.get('#_billing-and-payments-1').click();
        cy.url().should('eq', 'https://www.virginmedia.com/help/billing-and-payments');
    });
        
    
       it('change package tile on L2 is clickable and redirected to the correct endpoint', () => {
           cy.get('#_change-package-broadband').click();
           cy.url().should('eq', 'https://www.virginmedia.com/care/change-package-broadband');
         
    });
});