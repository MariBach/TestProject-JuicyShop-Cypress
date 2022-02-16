/// <reference types="cypress" />
import { onRegistrationPage } from "../support/page_objects/registrationPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { randomIndex, randomEmail } from "../support/functions.js"

describe ('Login check', function(){
    beforeEach (function(){
        cy.fixture('example').then(function(data){
           this.data = data;
        })
        cy.visit(Cypress.env("url"))
        onHomePage.openLoginPage()
    })

    it('User successfully logged in', function(){
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.getNavigateToCart().should('be.visible')
    })

    it('Check "Show password" option', function(){        
        onLoginPage.fillPassword(this.data.password[5])
        onLoginPage.getPassword().should('have.attr', 'type', 'password')
        onLoginPage.showPassword()
        onLoginPage.getHidePassword().should('be.visible')
        onLoginPage.getPassword().should('have.attr', 'type', 'text')        
    })

})  