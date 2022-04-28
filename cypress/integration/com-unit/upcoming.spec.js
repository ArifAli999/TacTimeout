/// <reference types="cypress" />

// base tests - to check if the data from the getServerSideProps is returning
// Component Checks - To check if all the data is being rendered as desired & check for fallbacks.


context('SSR Props Test ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/upcoming/csgo');
    });
  
    it('should render our list of upcoming games', () => {
      cy.get('.inner__box').each((item, index) => {
        cy.wrap(item).should('exist');
      });
    });
  });


  describe('Check for Valorant Page and data.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/upcoming/dota')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live valorant page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click({multiple:true}).wait(0)
                    cy.url().should('include', '/upcoming')// check for the dynamic slug
                  
                    }
                else {
                    // nope not here
                    cy.get('.error-box')
                }


            })

    })


})


describe('Check for CS:GO Page and data.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/upcoming/csgo')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live CS:go page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click({multiple:true}).wait(0)
                    cy.url().should('include', '/upcoming')// check for the dynamic slug
                // check if the slug plage is loaded.
           
                }
                else {

                    cy.get('.error-box')
                }


            })

    })

})

describe('Check for FIFA Page and data.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/upcoming/fifa')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live FIFA page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click({multiple:true}).wait(0)
                    cy.url().should('include', '/upcoming')// check for the dynamic slug                 
                }
                else {
                    cy.get('.error-box')
                }


            })

    })


})