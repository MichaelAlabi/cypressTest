describe('L2 Account Tiles Validation', () => {
  
  beforeEach(() => {
    cy.visit('https://www.virginmedia.com/help/account');
    cy.get('#consent_prompt_submit').click();
    cy.viewport(1280, 720); 
    
  });
  
 it('smart home tile on L2 is clickable and redirected to correct endpoint', () => { 
    cy.get('#_smart-home').click();
    cy.url().should('eq', 'https://www.virginmedia.com/help/smart-home');
  
  
 });
  
  it('change your details tile on L2 is clickable and redirected to the correct endpoint', () => {
    cy.get('#_change-your-details').click();
    cy.url().should('eq', 'https://www.virginmedia.com/care/change-your-details')
  
});


   it('email tile on L2 is clickable and redirected to correct endpoint', () => {
     cy.get('#_email-1').click();
     cy.url().should('eq', 'https://www.virginmedia.com/care/email-1');

 });   
     
  it('security tile on L2 is clickable and redirected to correct endpoint', () => {  
     cy.get('#_security').click();
     cy.url().should('eq', 'https://www.virginmedia.com/care/security');
 
  });

  
  it('marketing prefernce tile on L2 is clickable and redirected to correct endpoint', () => { 
      cy.get('#_marketing-preferences').click();
  
 
 
  });
});