/// <reference types='cypress' />

describe('Mouse Action test cases', () => {
    it('testCase1 - Mouse Click', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get('.form-control').type('phone') // even if there are 2 matching elements, it has typed in first match
        cy.get('.input-group-btn').trigger('click')
        
    })
    
    it('testCase2 - Mouseover', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get(':nth-child(3) > .dropdown-toggle').invoke('show').should('be.visible').trigger('mouseover')
        // cy.get('ul.nav li:nth-child(3) > .dropdown-toggle').invoke('show').should('be.visible').trigger('mouseover')
        cy.get('ul.nav li:nth-child(3) > div').invoke('show').should('be.visible')
        cy.get('ul.nav li:nth-child(3) > div ul li:nth-child(2)').click()
    })

    it('testCase3 - Right Click using rightclick method', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.contains('right click me').rightclick
        cy.get('.context-menu-icon-copy > span').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equals('clicked: copy')
        })
        
    })

    it('testCase4 - Double Click using doubleclick method', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.contains('Copy Text').dblclick().then(() => {
            cy.get('#field1').invoke('val').then(field1 => {
                const strField1 = field1
                cy.get('input#field2').invoke('val').then((field2)=>{
                    expect(field1).to.be.equals(field2)
                })
            })
        })
    })

    it.only('testCase5 - scrollIntoView', () => {
        cy.visit("https://demo.opencart.com/")
        cy.get('[placeholder="Search"]').type('phone')
        cy.get('.input-group-btn').trigger('click')
        cy.get('.image').scrollIntoView().screenshot("ScrollIntoView demo screenshot")
        cy.get('[placeholder="Search"]').scrollIntoView().clear()
    })
})