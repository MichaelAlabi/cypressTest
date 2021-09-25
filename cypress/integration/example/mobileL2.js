describe('L2 Mobile Tiles Validation', () => {
   
   
    beforeEach (() => {
            cy.visit('https://www.virginmedia.com/help/mobile');
            cy.request('https://www.virginmedia.com/help/mobile')
            cy.get("#consent_prompt_submit").click();
            cy.viewport(1280, 720);
            cy.wait(1000);
    });        



    it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => {
          cy.get('#_my-sim-and-network').click();
          cy.url().should('eq', 'https://www.virginmedia.com/care/my-sim-and-network');
    });


    it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => {
       cy.get('#_managing-my-account').click();
       cy.url().should('eq', 'https://www.virginmedia.com/care/managing-my-account');

    });


   it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => {
     cy.get('#_device-help').click();
     cy.url().should('eq', 'https://www.virginmedia.com/care/device-help');


   });
  

  it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => {    
    cy.get('#_mobile-billing-and-payments').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/mobile-billing-and-payments');



  });


 

it('view your bill tile on L2 is clickable and redirected to correct endpoint', () => { 
     cy.get('#_getting-the-most-from-my-plan').click();
     cy.url().should('eq', 'https://www.virginmedia.com/care/getting-the-most-from-my-plan');

});

});
