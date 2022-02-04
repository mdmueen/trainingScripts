/// <reference types='cypress' />

describe('Intercept test suite', () => {
    it('test case 1 - Stubbing using Intercept w/o using fixtures', () => {
        cy.visit('/')
        cy.intercept('/api/boards', []).as('boards')
        cy.visit('/')
    })

    it('test case 2 - Stubbing using Cypress Intercept method using fixtures', () => {
        cy.visit('/')
        cy.intercept({
            method: "GET",
            url: '/api/boards'
        },{
            fixture: 'boards'
        })
        cy.visit('/')
    })

    it('test case 3 - Stubbing to forcefully fail the network', () => {
        cy.intercept('/api/boards', {
            forceNetworkError: true
        }).as('boardsAlias').then(() => {
            cy.visit('/')
        })
    })

    it('test case 4 - Trying my own script, from Cypress Intercept documentation', () => {
        cy.intercept('GET', 'http://foo.com/fruits', ['apple', 'banana'])
        cy.request('http://foo.com/fruits')
    })
})