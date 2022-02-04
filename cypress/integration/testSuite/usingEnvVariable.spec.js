/// <reference types='cypress' />

describe('Fixtures test cases', () => {
    it('testCase1 - with static data', () => {
        cy.visit("/login")  /// here we have used baseUrl from env file cypress.json
        cy.get('#username').type(Cypress.env('username'))   /// used env variable
        cy.get('#password').type(Cypress.env('password'))   // used env variable
        cy.get('.radius').click()
    })
})