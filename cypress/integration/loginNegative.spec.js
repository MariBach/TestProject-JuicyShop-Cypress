/// <reference types="cypress" />
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"

describe ('Login check', () => {
    beforeEach (() => {
        cy.fixture('data').then(function(data) {
           this.data = data
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        cy.createUser()
    })

    it.only('User can not log in with valid email and invalid password', function() {
        onLoginPage.login(this.data.email[0], this.data.password[1])
        onLoginPage.getInvalidCredentialsMessage().should('have.text', this.data.errorLoginPage[0])
    })

    it('User can not log in with invalid email and valid password', function(){
        onLoginPage.login(this.data.email[3], this.data.password[0])
        onLoginPage.getInvalidCredentialsMessage().should('have.text', this.data.errorLoginPage[0])
    })

    it('User can not log in with blank Email input field', function() {
        onLoginPage.getEmail().click()
        onLoginPage.fillPassword(this.data.password[0])
        onLoginPage.getInvalidInputMessage().should('have.text', this.data.errorLoginPage[1])
    })

    it('User can not log with blank Password input field', function(){
        onLoginPage.fillEmail(this.data.email[0])
        onLoginPage.getPassword().click()
        onLoginPage.getEmail().click()
        onLoginPage.getInvalidInputMessage().should('have.text', this.data.errorLoginPage[2])
    })

    it('User can not input more than 40 characters in the Password input field', function(){
        onLoginPage.fillEmail(this.data.email[0])
        onLoginPage.fillPassword(this.data.toLongPassword)
        onLoginPage.getInvalidInputMessage().should('have.text', this.data.errorLoginPage[3])
    })
})
