/// <reference types='cypress' />

describe('using xpath - testcases', ()=>{
    it('testcase 1 - using xpath', ()=>{
        cy.visit('https://the-internet.herokuapp.com/inputs')
        cy.xpath("//input[@type='number']").type('23')
    })
})