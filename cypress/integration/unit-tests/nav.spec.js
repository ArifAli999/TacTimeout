/// <reference types="cypress" />


// This is our test spec for the navigation of the website, we test for the routes, check if all the pages routes match the directories, 
// Check if the menu is visible on different viewports. 
// Check if menu is readable and accesible of different viewports.
// Check if menu is reactive and responsive enough.
// Integration test - Type : Menu

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
  

    // Find a link with an href attribute containing "about" and click it
    cy.get(':nth-child(2) > .parentLink').click().wait(1000)
    cy.get(':nth-child(3) > .parentLink').click().wait(1000)
    cy.get(':nth-child(4) > .parentLink').click().wait(1000)




    // The new url should include "/about"

  })

 
})


it('Check the redirects of the `live` menu items. ', () => {
  // Start from the index page with menu open from the last test -



  //Find our desired menu item and open it.
  cy.get(':nth-child(2) > .parentLink').click().wait(1000)

  // test for the first link.
  cy.get('.uk-open > .uk-nav-sub > :nth-child(1) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/live/val').wait(2000)

  // test for the second link
  cy.get('.menubtn').click().wait(3000)
  cy.get('.uk-open > .uk-nav-sub > :nth-child(2) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/live/csgo').wait(4000)

  // test for the third link
  cy.get('.menubtn').click().wait(3000)
  cy.get('.uk-open > .uk-nav-sub > :nth-child(3) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/live/fifa').wait(3000)
  // The new url should include "/about"

})

it('Check the redirects of the `Upcoming` menu items. ', () => {
  // Start from the index page



  //Find our desired menu item and open it (First item)
  cy.get('.menubtn').click().wait(1000)
  cy.get(':nth-child(3) > .parentLink').wait(500).click()
  cy.get('.uk-open > .uk-nav-sub > :nth-child(1) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/upcoming/csgo').wait(3000)

   //Find our desired menu item and open it (Second item)
   cy.get('.menubtn').click().wait(1000)
   cy.get('.uk-open > .uk-nav-sub > :nth-child(2) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/upcoming/fifa').wait(3000)


   //Find our desired menu item and open it (Third item)
   cy.get('.menubtn').click().wait(1000)
   cy.get('.uk-open > .uk-nav-sub > :nth-child(3) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/upcoming/dota').wait(3000)

 

})


