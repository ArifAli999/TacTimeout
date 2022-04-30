/// <reference types="cypress" />
// This is our test spec for the navigation of the website, 
// Check if the menu is visible on different viewports. 
// Check if menu is readable and accesible of different viewports.
// Unit test- Type : Menu

const sizes = ['iphone-7', 'ipad-2',  'macbook-16', 'samsung-s10',  [1024, 768]]
describe('Responsiveness', () => {
    sizes.forEach((size) => {
      // make assertions on the logo using
      // an array of different viewports
      it(`Should display menu on ${size} screen`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
  
        cy.visit('http://localhost:3000/')
        cy.get('.menubtn').click().should('be.visible').wait(5000)
        cy.get('.parentLink').click({multiple:true}).wait(5000)
      })
    })
  })