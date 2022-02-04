/// <reference types='cypress' />

describe('API Testing - Trello Application', () => {
    // var bUrl = 'http://localhost:3000' --- Give this as baseURL in cypress.json

    var userID

    before(() => {
        cy.request({
            method: 'POST',
            url: '/api/reset'
        })
    })

    it('test case 1 - Create(POST) a new Board and then Update(PATCH) its name using the random ID generated', () => {
        cy.visit('/')
        cy.request({
            method: 'POST',
            url: '/api/boards',
            body: {
                'name': 'Create Cypress samples'
            }
        }).then((response) => {
            expect(response.status).eq(201)
            //cy.get(response.body).its('user').as('userNum')
            console.log(response.body.id)

            //cy.get(response.body.id).as('userID')
            userID = response.body.id
            var pUrl = '/api/boards/' + userID
            console.log(pUrl)

            cy.request({
                method: 'PATCH',
                url: pUrl,
                body: {
                    "name": "Patch Cypress samples"
                }
            })
            
            // cy.get(response.body.id).then((userID)=>{
                
            //     cy.request('PUT', pUrl.concat(userID))
            //     // cy.request({
            //     // method: 'PUT',
            //     // url: '/api/boards/'.concat('@userID'),
            //     // body: {
            //     //     "name": "Patch Cypress samples"
            //     // }
            // })

        })
    })

    it('test case 2 - using DELETE method - delete the above updated board', () => {
        cy.request('DELETE', '/api/boards/'+userID).its('status').should('eq', 200)
    })
})
