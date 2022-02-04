/// <reference types='cypress' />

describe('Pop up window test cases', () => {
    it('testCase1 - open in New Browser Window', () => {
        cy.visit("https://stqatools.com/demo/Windows.php")
        cy.contains('new Window')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('a.navbar-brand').should('contain', "Demo Test")
    })

    it('test case 2 - open in New Tab', ()=>{
        cy.visit("https://stqatools.com/demo/Windows.php")
        cy.contains('new Tab')
            .invoke('removeAttr', 'target')
            .click()
    })
})