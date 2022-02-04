/// <reference types='cypress' />

describe('Fixtures test cases', () => {
    it('testCase1 - with static data', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })

    it('testCase1 - with data from Fixtures', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.fixture('user').then( (user) => {
            const strUser = user.uid
            const strPswd = user.pswd
            cy.get('#username').type(strUser)
            cy.get('#password').type(strPswd)
        })
        cy.get('.radius').click()
    })
})