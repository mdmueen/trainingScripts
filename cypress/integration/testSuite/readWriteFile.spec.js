/// <reference types='cypress' />

describe('Read/Write data from file', () =>{

    it('testcase1 - into .txt file', () =>{
        cy.writeFile('sample.txt', '\n Hello World', {flag: 'a+'})
    })

    it.skip('testcase2 - read & validate from .txt file', ()=>{
        cy.readFile('sample.txt').should('contain.text', 'World')
    })

    it('test case 3 - read json file', () => {
        cy.readFile('user.json').its('city').should('eq', 'chennai')
    })

    it('testcase4 - write json file', () => {
        cy.writeFile('user.json', {"city":"chennai"}) /// this will directly overwrite if this file already exists
    })

    it('testcase 5 - read & write json file', () => {
        const file = 'user.json'
        cy.readFile(file).then((list) => {
            list.city = 'chicago'
            //list.push({item: 'example'})
            cy.writeFile(file, list)
        })
    })

    it.only('testcase 6 - verify browser content', () => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
        cy.document().should('have.property', 'content').and('eq', 'http://seleniumeasy.com')
    })

    it('testcase 7 - upload a file', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
        cy.get('#file-submit').click()
    })
})