/// <reference types='cypress' />

describe('Fixtures test cases', () => {
    it('testCase1 - using Custom Command', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.login('tomsmith', 'SuperSecretPassword!')
        cy.get('.radius').click()
    })
})