/// <reference types='cypress' />

describe('Test cases with Hooks concepts', () => {

    before('Before all the tests', () => {
        cy.log('Before all the tests')
    })

    beforeEach('Before each test', () => {
        cy.log('Before each test')
    })

    it('Test 1', () => {
        cy.log('Test 1')
    })

    it.only('Test 2', () => {
        cy.log('Test 2')
    })

    after('After all the tests', () => {
        cy.log('After all the tests')
    })

    afterEach('After each test', () => {
        cy.log('After each test')
    })


    /* it('testCase1 - locate the toolTip and validate', () => {
        cy.visit("http://localhost:4200/pages/modal-overlays/tooltip")
        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        //     .invoke('nbtooltip').as('tipValue')
        // cy.get('@tipValue').then( str => {
        //     cy.log("Value is: " + str)
        // })
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    }) */
})