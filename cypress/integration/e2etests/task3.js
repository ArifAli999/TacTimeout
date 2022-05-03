
/// <reference types="cypress" />
// E2E Test 2 - The second task for the appplication.
// In this test we check the functionality of the application as a whole.
// The test tasks planned prior to the testing will be used as tasks for this specific test.




describe('Task 3 ', () => {


    it('Browse to the homepage and find the hottest tournaments. ', () => {
        // Start from the index page with menu open from the last test -
        cy.visit('http://localhost:3000/swrtest')

        // test if al the eements have a prizepool attatched to them.
        cy.get('.tour-name')
        .then(($body) => {
          if ($body.find('.prize').length) {
            // Check if link to game slug is found, click and check if the redirect is working.
            // wait for the dynamic page to load.
            cy.get(".prize").then(($el) => {
                const text = $el.text(); // store text for logs.
            
                // Finnd our score
                expect(text)
                cy.log('Prize - ', text)
              });
          }
           })




    })


    it('Click on one of the tournament and validate the tournament page. ', () => {
        // Start from the index page with menu open from the last test -
       

        // test if al the eements have a prizepool attatched to them.
       cy.get(':nth-child(2) > .tour-name > .tourtitle').click().wait(900)
       cy.get('#__next').window().scrollTo('bottom')
       cy.get(".sub").then(($el) => {
        const text = $el.text(); // store text for logs.
    
        // Finnd our score
        expect(text)
        cy.log('League - ', text)
      });

    })
  



})