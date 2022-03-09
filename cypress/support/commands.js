// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('openHomePage', ()=>{
    cy.visit('/')
})

Cypress.Commands.add('createUser', (user)=>{
    cy.request({
        method: 'POST',
        url:Cypress.env('apiUrl'),
        body: {
            email: Cypress.env('login'),
            password: Cypress.env('password'),
            passwordRepeat: Cypress.env('password'),
            securityAnswer: Cypress.env('securityAnswer'),
            securityQuestion: {id: 5, question: "Maternal grandmother's first name?"}            
        },
        failOnStatusCode: false
    }).then((resp) => {
        cy.request({
            method: 'POST',
            url: Cypress.env('apiUrl'),
            header: { Authorization: 'Bearer ' + resp.body.token },            
            body: user
        })
    })    
})

Cypress.Commands.add('loginApiAuthentication', () => {
    cy.request({
        method: 'POST', 
        url: Cypress.env("restUrl"),
        body: {
            email: Cypress.env('login'), 
            password: Cypress.env('password')
        }
    }).its('body').then( body => {
            const token = body.token
            cy.wrap(token).as('token')
            cy.visit('/', {
                onBeforeLoad(win){
                    win.localStorage.setItem('token', token)
                }
            })
        })
    })

    Cypress.Commands.add('clearBasket', () => {
        cy.visit('/')
        cy.get('button[aria-label$="cart"]').click()
        cy.get('mat-row').each(($el, index, $list)=>{
            cy.get('svg[data-icon="trash-alt"]').eq(index).click()
        })
    })