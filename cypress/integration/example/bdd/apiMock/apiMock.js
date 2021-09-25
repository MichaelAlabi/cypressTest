/// <reference types="cypress" />

describe("GET request validation", () => {

    it("should return 8 user ids & http status code in the mock response", () => {
   
      cy.visit("https://fakerestapi.azurewebsites.net/index.html");
   
    
   
      //listen to api network call and intercept status code && body of response
   
      cy.intercept(
   
        {
   
          method: "GET",
   
          url: "https://fakerestapi.azurewebsites.net/api/v1/Users",
   
        },
   
        {
   
          statusCode: 200,
   
          body: [
   
            {
   
              id: 23,
   
              userName: "Michael",
   
              password: "Jordan",
   
            },
   
            {
   
              id: 2,
   
              userName: "User 2",
   
              password: "Password2",
   
            },
   
            {
   
              id: 3,
   
              userName: "User 3",
   
              password: "Password3",
   
            },
   
            {
   
              id: 4,
   
              userName: "User 4",
   
              password: "Password4",
   
            },
   
            {
   
              id: 5,
   
              userName: "User 5",
   
              password: "Password5",
   
            },
   
            {
   
              id: 26,
   
              userName: "User 26",           
              password: "Password2!",
            },
            {
              id: 7,
              userName: "User 7",
              password: "Password7",
            },
            {
              id: 8,
              userName: "User 8",
              password: "Password8",
            },
          ],
        }
      ).as("userid");
      // userid is an alias for received response
      cy.get("#operations-Users-get_api_v1_Users").click();
      cy.get(".btn").click();
      cy.get("div.execute-wrapper > .btn").click();
      // click button to send Get request
      cy.wait("@userid").should(({ response }) => {
        cy.log("number of returned user ids = " + response.body.length);
        // return correct status code && number of data expected for user id
      });
    });
   });