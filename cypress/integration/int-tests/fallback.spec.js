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
               
                if ($body.find('.error-box').length) {
                  cy.get('.error-box').should('exist');
                }
                else {
                    cy.get('.inner__box')
                }
            })
    })

    it('Should render the fallback data - ', () => {

        cy.get('.maincontainer')
            .then(($body) => {
               cy.visit('http://localhost:3000/upcoming/ching-splash-vs-vladivostok-fm-2022-05-02')
                if ($body.find('a.h2link').length) {
                  cy.get(':nth-child(2) > .gamelinks').click()
                  cy.get('p.white-fallback');
                  
                }
                else {
                    cy.get('.teamblock')
                }
            })
    })
})