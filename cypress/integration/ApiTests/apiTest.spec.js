/// <reference types="cypress" />

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
