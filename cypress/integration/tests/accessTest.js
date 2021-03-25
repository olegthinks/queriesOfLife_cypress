/// <reference types="cypress" />

context('Page Check', function () {
    it('Zillow', () => {
        cy.visit('https://www.zillow.com/homes/1850402_zpid/'), { force: true,  failOnStatusCode: false}
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
    it('ColdwellBanker', () => {
        cy.visit('https://www.coldwellbankerhomes.com/mn/golden-valley/3109-golden-valley-rd/pid_40440767/')
        cy.title().should('contains', '3109')
    })
    it('Remax', () => {
        cy.visit('https://www.remax.com/mn/golden-valley/home-details/3109-golden-valley-rd-golden-valley-mn-55422/8305836604225815481')
        cy.title().should('contains', '3109')
    })
    it('Estately', () => {
        cy.visit('https://www.estately.com/listings/info/3109-golden-valley-road--9')
        cy.title().should('contains', '3109')
    })
    it('Weichert', () => {
        cy.visit('https://northstar.weichert.com/96829767/')
        cy.title().should('contains', '3109')
    })
    it('CR', () => {
        cy.visit('https://www.counselorrealty.com/p/3109-Golden-Valley-Road-Golden-Valley-MN-55422/dmgid_145172478')
        cy.title().should('contains', '3109')
    })
    it('Edina', () => {
        cy.visit('https://www.edinarealty.com/homes-for-sale/3109-golden-valley-road-golden-valley-mn-55422-5729523')
        cy.title().should('contains', '3109')
    })
    it('Queries of Life', () => {
        cy.visit('https://queriesoflife.com/')
        cy.title().should('eq', 'Queries of Life')
    })
   
})
