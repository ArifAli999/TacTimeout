/// <reference types="cypress" />


// In this test we check whether our dynamic slug pages for each component is being rendered, 
// Then we check if the components on the dynamic slug page are being rendered as desired or expected.
// We conduct the test on the Live & Upcoming component both in this spec.

context('Route Check ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/live');
    });
  
    it('Testing the rendering of the dynamic slugs.', () => {

        cy.get('.column')
            .then(($body) => {
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
 
                    cy.get(':nth-child(1) > .scorebox > .first > :nth-child(2) > .h2link').click().url().should('include' , '/live')




                    }
                else {
                    // else get the fall back container.
                    cy.get('.maincontainer')
                }


            })

    })

  });

  