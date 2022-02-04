/// <reference types='cypress' />

describe('Taking screenshots test cases', () => {
    it('testCase1 - Page level screenshot', () => {
        cy.visit("https://radogado.github.io/shadow-dom-demo/")
        cy.screenshot({capture:"fullPage"})
    })
    
    it('testCase2 - Particular webElement screenshot', () => {
        cy.visit("https://www.example.com")
        cy.get('h1').screenshot("Particular Web Element screenshot")
    })
})