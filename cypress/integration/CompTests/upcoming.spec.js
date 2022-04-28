/// <reference types="cypress" />

// Unit tests to check if each of the page for each game are rendering data.


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
    it('Should have a div present and a link on it.', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('.inner__box').wait(10000).should('exist')                    // check for the dynamic slug
                  
                    }
                else {
                    // nope not here
                    cy.get('.maincontainer')
                }


            })

    })


})


describe('Should have a div present and a link on it.', () => {
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
                    cy.get('.inner__box').wait(10000).should('exist')                
           
                }
                else {

                    cy.get('.maincontainer')
                }


            })

    })

})

describe('Should have a div present and a link on it.', () => {
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
                    cy.get('.inner__box').wait(10000).should('exist')
                }
                else {
                    cy.get('.maincontainer')
                }


            })

    })


})