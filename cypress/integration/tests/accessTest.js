/// <reference types="cypress" />

context('Page Check', function () {
    it('Queries of Life', () => {
        cy.visit('https://queriesoflife.com/')
        cy.title().should('eq', 'Queries of Life')
    })
})
