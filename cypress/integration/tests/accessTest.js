/// <reference types="cypress" />

context('Page Check', function () {
    it('Zillow', () => {
        cy.visit('https://www.zillow.com/homedetails/3109-Golden-Valley-Rd-Golden-Valley-MN-55422/1850402_zpid/'), { force: true,  failOnStatusCode: false}
        //cy.title().should('contains', '3109')
    })
    it('Redfin', () => {
        cy.visit('https://www.redfin.com/MN/Minneapolis/3109-Golden-Valley-Rd-55422/home/50152075', { force: true,  failOnStatusCode: false})
        //cy.title().should('contains', '3109')
    })
    it('MLS', () => {
        cy.visit('https://matrix.northstarmls.com/Matrix/Public/Portal.aspx?ID=DE-317521414739&eml=b2FuZHJleWV2LjFAZ21haWwuY29t#1')
        cy.title().should('contains', 'Matrix Portal')
    })
    it('Realtor', () => {
        cy.visit('https://www.realtor.com/realestateandhomes-detail/3109-Golden-Valley-Rd_Golden-Valley_MN_55422_M71725-02341', { force: true,  failOnStatusCode: false})
    })
    it('Trulia', () => {
        cy.visit('https://www.trulia.com/p/mn/golden-valley/3109-golden-valley-rd-golden-valley-mn-55422--2055714019')
        cy.title().should('contains', '3109')
    })
    it('Queries of Life', () => {
        cy.visit('https://queriesoflife.com/')
        cy.title().should('eq', 'Queries of Life')
    })
})