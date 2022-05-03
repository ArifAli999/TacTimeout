/// <reference types="cypress" />
// E2E Test 1- The first one for the appplication.
// In this test we check the functionality of the application as a whole.
// The test tasks planned prior to the testing will be used as tasks for this specific test.


describe('Task 1 ', () => {


  it('Browse to the application and look for the valorant game in which Team Snakes is participating. ', () => {
    // Start from the index page with menu open from the last test -
    cy.visit('http://localhost:3000/live')
    cy.get('.menubtn').click().wait(500)

    //Find our desired menu item and open it.
    cy.get(':nth-child(2) > .parentLink').click().wait(1000)

    // Find our gamme.
    cy.get('.uk-open > .uk-nav-sub > :nth-child(1) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/live/val').wait(800)
    cy.get('a.h2link').contains('Team Snakes').click().wait(1000)

    })

    it('Click on the tabbed navigation and find the list of the players & stream in this game. ', () => {
      // Start from the index page with menu open from the last test -
      cy.visit('http://localhost:3000/live/val')
      //Find our desired menu item and open it.
      cy.get('a.h2link').contains('Team X').click(300)
      cy.get('a.gamelinks').contains('Stream').click(400)



      cy.get('.twitch')
        .then(($body) => {
          if ($body.find('iframe').length) {
            // Check if link to game slug is found, click and check if the redirect is working.
            // wait for the dynamic page to load.
            cy.get('iframe')
          }
          else {
            // else get the fall back container.
            cy.get('.fallback-comp')
            cy.get('.white-link').click().wait(1000)
          }


        })






    })



  })


  


