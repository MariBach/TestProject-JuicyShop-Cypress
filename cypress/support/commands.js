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
    cy.visit(Cypress.env("url"))
})

Cypress.Commands.add('createUser', (user)=>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/Users/',
        body: {
            email: "user1@test.com",
            password: "Pass1234",
            passwordRepeat: "Pass1234",
            securityAnswer: "some text",
            securityQuestion: {id: 5, question: "Maternal grandmother's first name?"}            
        },
        failOnStatusCode: false
    }).then((resp) => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/Users/',
            header: { Authorization: 'Bearer ' + resp.body.token },            
            body: user,
        })
    })    
})


