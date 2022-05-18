/// <reference types="cypress" />

// Integration Test - Testing for the fallback compoentns.
// Codebase will be modified to land the fallback component for this test.
// The API endpoint was rendered to display no results.


describe('Check for the fallback on the live component.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/live')
    })
    it('Should render the fallback component ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
               
                if ($body.find('.maincontainer').length) {
                  cy.get('.error-box').should('exist');
                }
                else {
                    cy.get('.maincontainer')
                }
            })
    })

   
})