/// <reference types="cypress" />
// Inegration Test. 
// In this test we check whether our dynamic slug pages for each component is being rendered from the Live coomponent., 
// We only select the 'first box' in the viewport because, checking for eveery would be extremely time consuming. 
// The same test can be ran for checking all the rendered "Games", to check whether each oe of them has a static page generated.
// By simply using the {multiple: true} in the click() function. 

context('Live Page Route Check ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/live/');
    });
  
    it('Test whether the dynamic pages are being generated', () => {

        cy.get('.column')
            .then(($body) => {
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get(':nth-child(1) > .scorebox > .first').should('exist')
                    .click().wait(3000);                  // wait for the dynamic page to load.
                  
                    }
                else {
                    // else get the fall back container.
                    cy.get('.column')
                }


            })

    })

  });


  context('Upcoming Page Route check ', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/upcoming/csgo');
    });
  
    it('Test whether the dynamic pages are being generated', () => {

        cy.get('.column')
            .then(($body) => {
                if ($body.find('a.h2link').length) {
                    // Check if link to game slug is found, click and check if the redirect is working.
                    cy.get(':nth-child(1) > .scorebox > .first').should('exist')
                    .click().wait(3000);      
                    }
                else {
                    // else get the fall back container.
                    cy.get('.column')
                }


            })

    })

  });
