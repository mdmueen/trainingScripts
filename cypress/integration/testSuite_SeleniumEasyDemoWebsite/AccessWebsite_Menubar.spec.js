/// <reference types='cypress' />

describe('Accessing webelements', () => {

    it.skip('testcase1 - accessWebsite and menubar', () =>{
        cy.visit('https://demo.seleniumeasy.com/')
    })

    it('testcase2 - usage of shadow find, invoke', () =>{
        cy.visit('https://radogado.github.io/shadow-dom-demo/')
        cy.get('#app').shadow().find('#container').invoke('text').as('textValue')
        cy.log('I am outside the Then block')
        cy.get('@textValue').then((str) => {
            cy.log('I am inside the Then block')
            cy.log(str)
        })
    })

    //it('testcase 3 - usage of ')
})