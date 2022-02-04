/// <reference types='cypress' />

describe('alais and w/oInvoke test cases', () => {
    it('testCase1 - locate the shadow DOM element', () => {
        cy.visit("https://radogado.github.io/shadow-dom-demo/")

        //Method # 1 - using Alias
        cy.get('#app').shadow().find('#container')
            .invoke('text').as('textVal')
        cy.get('@textVal').then( str => {
            cy.log("DOM Label is: " + str)
        })

        //Method # 2 - using text() without using invoke('text')
        cy.get('#app').shadow().find('#container').then(label => {
            const strValue = label.text()
            cy.log("DOM Label by Method 2 is: " + strValue)
        })
    })
})