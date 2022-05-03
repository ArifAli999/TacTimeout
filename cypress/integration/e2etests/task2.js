
/// <reference types="cypress" />
// E2E Test 2 - The second task for the appplication.
// In this test we check the functionality of the application as a whole.
// The test tasks planned prior to the testing will be used as tasks for this specific test.




describe('Task 2 ', () => {


    it('Browse to the past games section and look for a game and find it. ', () => {
        // Start from the index page with menu open from the last test -
        cy.visit('http://localhost:3000/past/valp')
        cy.get('.menubtn').click().wait(500)

        //Find our desired menu item and open it.
        cy.get(':nth-child(4) > .parentLink').click().wait(1000)

        // Find our gamme.
        cy.get('.uk-open > .uk-nav-sub > :nth-child(1) > .nav_nava__l9P3V').click().wait(500).url().should('include', '/past/valp').wait(800)
        cy.get('a.h2link').contains('MIDAS').click().wait(1000)

    })

    it('Click on the tabbed navigation and find the list of the players', () => {
        // Start from the index page with menu open from the last test -
      
        //Find our desired menu item and open it.
       
        cy.get('a.gamelinks').contains('Players').click(400)
        cy.get(':nth-child(1) > .pl > :nth-child(2)').should('have.text', 'sia'); 
  
  
      
        })

    it('Find the scores', () => {
        // Start from the last page with menu open from the last test -
        cy.get(":nth-child(1) > .innerteam_cont > .opponentBoard > .score-big").then(($el) => {
            const text = $el.text(); // store text for logs
        
            // Find our score
            expect(text).to.eq("2");
            cy.log('Score of RIX - ', text)
          });
          cy.get(":nth-child(2) > .innerteam_cont > .opponentBoard > .score-big").then(($el) => {
            const text = $el.text(); // store text for logs.
        
            // Finnd our score
            expect(text).to.eq("0");
            cy.log('Score of MIDAS - ', text)
          });

       


    })

    it('Find the winner of the game.',() => {
        // Start from the index page with menu open from the last test -
      
        //Find our desired menu item and open it.
       
        cy.get('a.gamelinks').contains('Info').click(400)
       
        cy.get(".column > :nth-child(6)").then(($el) => {
            const text = $el.text(); // store text for logs
        
            // Find our score
            
            cy.log(text)
          });

  
      
        })



})