/// <reference types='cypress' />

function terminalLog(violations) {
    cy.task(
        'log',
        `${violations.length} accessibility violations ${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )

    const violationData = violations.map(
        ({id, impact, description, nodes}) => ({
            id,
            impact,
            description,
            nodes: nodes.length
        })
    )
    cy.task('table', violationData)
}

describe('A11y Test suite', ()=> {
    it('test case 1 - no accessibility testing error in Deque website', ()=> {
        cy.visit('https://dequeuniversity.com/')
        cy.injectAxe()
        cy.checkA11y()
    })

    it('test case 2 - website having accessibility testing errors', ()=> {
        cy.visit('https://www.selenium.dev/')
        cy.injectAxe()
        cy.checkA11y()
    })

    it('test case 3 - exclude particular element', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.injectAxe()
        //cy.checkA11y()
        cy.checkA11y({
            exclude: ['.input-group-btn > .btn']
        })
    })

    it('test case 4 - include particular element(s)', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.injectAxe()
        //cy.checkA11y()
        cy.checkA11y('.input-group-btn > .btn')
    })

    it.only('test case 5 - form a task and report the violations in console log', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.injectAxe()
        cy.checkA11y(null, null, terminalLog)
    })
})