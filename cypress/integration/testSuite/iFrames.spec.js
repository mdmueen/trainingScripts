/// <reference types='cypress' />

describe('Test cases related to iFrames - achieved by within() method', () => {
    it('testCase1 - Access iFrame and enter text', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.get('#mce_0_ifr').within(function ($myFrame) {
            const frame = $myFrame.contents().find('#tinymce')
            cy.wrap(frame).clear().type("Hello world")
        })
        
    })
})