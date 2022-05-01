/// <reference types="cypress" />





context('Page data checks. ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/live/');
    });

    it('Test if the live page has data,', () => {

        cy.get('.column')
            .then(($body) => {
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.request('http://localhost:3000/live/csgo');
                    cy.get(':nth-child(1) > .inner > .inner__box').should('exist');
                }

                else {
                    cy.get('.error-box')
                }


            })
    })
});

context('Upcoming Page Checks. ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/upcoming/csgo');
    });

    it('Test if the upcoming page is getting the data from the fetch.', () => {

        cy.get('.column')
            .then(($body) => {
                if ($body.find('a.h2link').length) {
                    cy.request('http://localhost:3000/upcoming/csgo');
                    cy.get(':nth-child(1) > .inner > .inner__box').should('exist');
                }

                else {
                    cy.get('.error-box')
                }
            })

    })
})

context('Check if the homepage has data ', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Test if the home page is getting the data from the fetch.', () => {

        cy.get('.container')
            .then(($body) => {
                if ($body.find('.tour-name').length) {
                    cy.get('.tour-name').should('exist');
                }

                else {
                    cy.get('.error-box')
                }
            })

    })
})