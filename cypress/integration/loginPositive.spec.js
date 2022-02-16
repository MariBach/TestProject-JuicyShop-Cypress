/// <reference types="cypress" />
import { onRegistrationPage } from "../support/page_objects/registrationPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { onForgotPage } from "../support/page_objects/forgotPasswordPage.js"
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
        onLoginPage.login(this.data.email[0], this.data.password[1])
        onHomePage.getNavigateToCart().should('be.visible')
    })

    it('Check "Show password" option', function(){        
        onLoginPage.fillPassword(this.data.password[5])
        onLoginPage.getPassword().should('have.attr', 'type', 'password')
        onLoginPage.showPassword()
        onLoginPage.getHidePassword().should('be.visible')
        onLoginPage.getPassword().should('have.attr', 'type', 'text')        
    })

    it('Check "Forgot password" option', function(){     
        onLoginPage.navigateToForgotPasswordPage({force: true})
        onLoginPage.getPageName().should('include.text', "Forgot Password")
        onForgotPage.fillEmail(this.data.email[0])
        onForgotPage.fillSecurityAnswer(this.data.answer)
        onForgotPage.fillNewPassword(this.data.password[1])
        onForgotPage.repeatNewPassword(this.data.password[1])
        onForgotPage.resetPassword()
        onForgotPage.getConfirmationMessage().should('include.text', this.data.confirmation[1])
    })

    it('User successfully changed the password', function(){
        onLoginPage.login(this.data.email[0], this.data.password[1])
        onHomePage.getNavigateToCart().should('be.visible')
    })
})  