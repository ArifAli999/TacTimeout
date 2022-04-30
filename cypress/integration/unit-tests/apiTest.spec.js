/// <reference types="cypress" />
// This is our test spec for the status of our API, we listen for a response.
// The test fails if theres no response at all. This usually means all other tests of any kind will fail too.
// Unit test- Type : General
describe('Test the API Status', () => {
  
    it('Visit the API and check if you get a response', () => {
      cy.request('https://api.pandascore.co/?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    })

    it('Check the live games response', () => {
      cy.request('https://api.pandascore.co/matches/running?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    })

    it('Check the upcoming games response', () => {
      cy.request('https://api.pandascore.co/matches/upcoming?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    })

    it('Check the past games response', () => {
      cy.request('https://api.pandascore.co/matches/past?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    })

    it('Check the tournaments response', () => {
      cy.request('https://api.pandascore.co/tournaments/?token=a1trG0pytDA2N0RXkJVlWqA6MOb2aY8ii9szwMze-OabnW9QPu0')
    })
  })
