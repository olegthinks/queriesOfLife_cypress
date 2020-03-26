/// <reference types="cypress" />

context('Page Check', function () {
  
    beforeEach('Should navigate to login page', () => {
        cy.visit('https://www.queriesoflife.com')
    })

    it('Get Title', () => {
        cy.title().should('eq', 'Queries of Life')
    })

})
