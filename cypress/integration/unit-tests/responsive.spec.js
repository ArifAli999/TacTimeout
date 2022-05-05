/// <reference types="cypress" />

// This is our test spec for the responsiveness of the website, on different viewports, we check if all the text 
// is readable and accesible, all the buttons are visible and links are clicable.
// We test and look for  any of the breaks in the design of the elements or components.
// Unit test- Type : General


describe('Test the responsiveness of the app on mobile devices.', () => {
    beforeEach(() => {
        // we loop for our desired page to run tests on it.
        cy.visit('http://localhost:3000/upcoming/csgo')
    })
    it('Test whether the elements are visible, if they arent then test for fallbacks.', () => {

        cy.get('.maincontainer')
            .then(($body) => {
                if ($body.find('.inner__box').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get('a.h2link').wait(10000).should('exist').scrollTo('bottom').wait(500)
                    cy.get('.menubtn').click().wait(500).click(center).wait(100);

                    }
                else {
                    // nope not here
                    cy.get('.maincontainer')
                }


            })

    })


})


const sizes = ['iphone-7', 'ipad-2',  'macbook-16', 'samsung-s10',  [1024, 768]]

describe('Logo', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`The text should be readable and accesible on ${size}`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit('http://localhost:3000/upcoming/csgo').wait(500)
      cy.get('a.h2link').should('exist')
      cy.get('#__next').window().scrollTo('bottom')
      cy.get('.menubtn').click().wait(300)
      cy.get('.uk-offcanvas-close').click().wait(50)
      

    })
  })
})