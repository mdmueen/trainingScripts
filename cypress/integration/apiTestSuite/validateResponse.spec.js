/// <reference types='cypress' />

// import { expect } from "chai";
// import { describe, it } from "mocha";

describe('API Test suite', () => {
    const bUrl = 'https://jsonplaceholder.typicode.com/'
    
    it.skip('Handle GET request', () => {
        cy.request(bUrl.concat('users')).as('userResp')
        cy.get('@userResp').its('status').should('equals', 200)
    })

    it('working with response body', () => {
        var respDataLength = 6
        cy.request('GET', 'https://reqres.in/api/users').then( (response) => {
            expect(response.body.data[0].first_name).equal('George')
            expect(response.body.data).to.have.length(respDataLength)
        })
    })

    it('testcase 2', () => {
        var usr = {
            name: 'TestUsr',
            job: 'Architect'
        }

        //Method 1
        cy.request('POST', 'https://reqres.in/api/users', usr).then( (response) => {
            expect(response.status).equals(201)
            expect(response.body.name).equal('TestUsr')
        })

        //Method 2
        cy.request('POST', 'https://reqres.in/api/users', usr)
            .its('body')
            .should('include', {name: 'TestUsr'})
    })

    it('tset case 3', () => {
        var usr1 = {
            name: 'TestUsr1',
            job: 'TestJob'
        }
        //cy.request('PUT', 'https://reqres.in/api/users/2', usr1).its('status').should('include', 200)
        cy.request('PUT', 'https://reqres.in/api/users/2', usr1).then( (response) => {
            expect(response.status).eq(200)
            expect(response.body.name).eq('TestUsr1')
        })
    })

    it('testcase 4', () => {
        cy.request("DELETE", 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).eq(204)
        })
    })
})