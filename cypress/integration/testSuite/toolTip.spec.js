/// <reference types='cypress' />

describe('Tool Tip test cases', () => {
    it('testCase1 - locate the toolTip and validate', () => {
        cy.visit("http://localhost:4200/pages/modal-overlays/tooltip")
        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        //     .invoke('nbtooltip').as('tipValue')
        // cy.get('@tipValue').then( str => {
        //     cy.log("Value is: " + str)
        // })
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })
})