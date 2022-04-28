/// <reference types="cypress" />

describe('Check the Live Games Component', () => {
 
    context('SSR Props Test ', () => {
        beforeEach(() => {
          cy.visit('http://localhost:3000/live/');
        });
      
        it('should render our list of LIVE games', () => {
          cy.get('.inner__box').each((item, index) => {
            cy.wrap(item).should('exist');
          });
        });
      });


})



describe('Check for Valorant Page and data.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/live/val')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live valorant page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click()
                    cy.url().should('include', '/live')// check for the dynamic slug
                    cy.contains('Game Info', { timeout: 600000 }); // check if the slug plage is loaded.
                    cy.get('a.gamelinks').click({ multiple: true }, { timeout: 600000 }) // check if the information is loaded on the slug page.
                    cy.get('a.gamelinks').first().click()   // check if the tabbed navs are working.
                    cy.get('.lower-box').find('.dark') // end test by testing for data again.

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
        cy.visit('http://localhost:3000/live/csgo')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live CS:go page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click()
                    cy.url().should('include', '/live')// check for the dynamic slug
                    cy.contains('Game Info', { timeout: 600000 }); // check if the slug plage is loaded.
                    cy.get('a.gamelinks').click({ multiple: true }, { timeout: 600000 }) // check if the information is loaded on the slug page.
                    cy.get('a.gamelinks').first().click()   // check if the tabbed navs are working.
                    cy.get('.lower-box').find('.dark') // end test by testing for data again.

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
        cy.visit('http://localhost:3000/live/fifa')
    })
    // Simple unit test to see if the data being returned from the API is being queried.
    it('Should redirect to the live FIFA page ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').click()
                    cy.url().should('include', '/live')// check for the dynamic slug
                    cy.contains('Game Info', { timeout: 600000 }); // check if the slug plage is loaded.
                    cy.get('a.gamelinks').click({ multiple: true }, { timeout: 600000 }) // check if the information is loaded on the slug page.
                    cy.get('a.gamelinks').first().click()   // check if the tabbed navs are working.
                    cy.get('.lower-box').find('.dark') // end test by testing for data again.

                }
                else {
                    cy.get('.error-box')
                }


            })

    })


})