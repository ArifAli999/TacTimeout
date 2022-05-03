
/// <reference types="cypress" />
// E2E Test 4 - The fourth task for the appplication.
// In this test we check the functionality of the application as a whole.
// The test tasks planned prior to the testing will be used as tasks for this specific test.




describe('Task 4 ', () => {


    it('Browse to the Past and find the game in which Team Snakes played. ', () => {
        // Start from the index page with menu open from the last test -
        cy.visit('http://localhost:3000/swrtest')
        cy.get('.menubtn').click().wait(500)

        //Find our desired menu item and open it.
        cy.get(':nth-child(4) > .parentLink').click().wait(1000)

        // Find our gamme.
        cy.get('.uk-open > .uk-nav-sub > :nth-child(1) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/past/valp')
        cy.get('#__next').window().scrollTo('bottom');
        cy.get('.loadbtn').click().wait(1000)


        // test if al the eements have a prizepool attatched to them.






    })

    it('Browse to the Second page and find the game in which Team Snakes played.. ', () => {
        cy.get('a.h2link').contains('Team Snake').click().wait(500)

    })









})