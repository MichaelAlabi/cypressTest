describe('L2 Landline Tiles Validation', () => {
   
   
    beforeEach (() => {
            cy.visit('https://www.virginmedia.com/help/change-package');
            cy.request('https://www.virginmedia.com/help/change-package')
            cy.get("#consent_prompt_submit").click();
            cy.viewport(1280, 720);
            cy.wait(1000);
    });   

it('check service status tile on L2 is clickable and redirected to correct endpoint', () => {  
     cy.get('#_mobile-1').click();
     cy.url().should('eq', 'https://www.virginmedia.com/shop/mobile/upgrade');

});


it('check service status tile on L2 is clickable and redirected to correct endpoint', () => {     
      cy.get('#_broadband-tv-and-landline').click();
      cy.url().should('eq', 'https://www.virginmedia.com/help/virgin-media-changing-your-services');

});

});