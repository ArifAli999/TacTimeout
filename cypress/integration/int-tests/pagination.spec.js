/// <reference types="cypress" />
// This is our test spec for the pagination of the website, 
// Check if pagination is functioning as expected
// Check if all the necessary setbacks are in place.
// Integration test



describe('Pagination', () => {


    it('Click on the load more button.. ', () => {
      // Start from the index page with menu open from the last test -
      cy.visit('http://localhost:3000/live')
     
      //Find our desired buttom element and click it.
      cy.get('button.loadbtn').click()
      cy.reload().wait(500)

    
    })
    it('Click on the load more button.. ', () => {
        // Start from the index page with menu open from the last test -
        cy.visit('http://localhost:3000/live/fifa')
       
        //Find our desired buttom element and click it.
        for(let n = 1; n < 10; n ++){
            cy.get('button.loadbtn')
              .click().url().should('include',`${n+1}`).wait(1500)
             
          }
      
      })
   
    
 
    })
