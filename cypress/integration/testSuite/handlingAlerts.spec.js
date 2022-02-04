/// <reference types='cypress' />

describe('Test cases related to Alert - achieved by using ON method', () => {
    it('testCase1 - Access iFrame and enter text', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.be.equals('I am a JS Alert')
        })
        cy.get('#result').should('contain', 'successfully clicked')

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (strConfirmation) => {
            return false
        })

        cy.get('#result').should('contain', 'Cancel')
        
    })
})