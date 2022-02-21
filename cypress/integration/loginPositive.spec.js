/// <reference types="cypress" />
import { onRegistrationPage } from "../support/page_objects/registrationPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { onForgotPage } from "../support/page_objects/forgotPasswordPage.js"
import { randomIndex, randomEmail } from "../support/functions.js"

describe ('Login check', function(){
    beforeEach (function(){
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        cy.createUser()
    })

    it('User successfully logged in', function(){            
            onLoginPage.login(this.data.email[0], this.data.password[0])
            onHomePage.getNavigateToCart().should('be.visible')
        })

    it('Check "Show password" option', function(){
        onLoginPage.fillEmail(this.data.email[0])        
        onLoginPage.fillPassword(this.data.password[0])
        onLoginPage.getPassword().should('have.attr', 'type', 'password')
        onLoginPage.showPassword()
        onLoginPage.getHidePassword().should('be.visible')
        onLoginPage.getPassword().should('have.attr', 'type', 'text')        
    })

    it('Check "Forgot password" option', function(){     
        onLoginPage.navigateToRegistrationPage()
        onRegistrationPage.initiateUserRegistration(this.data.email[1], this.data.password[0], this.data.question[randomIndex], this.data.answer)
        if (onRegistrationPage.getRegistrationErrorMessage().eq.toString(this.data.errorRegistrationPage[3])) {
            onHomePage.navigateToAccountMenu()
            onHomePage.navigateToLogin()
        }
        onLoginPage.navigateToForgotPasswordPage({force: true})
        onLoginPage.getPageName().should('include.text', "Forgot Password")
        onForgotPage.fillEmail(this.data.email[1])
        onForgotPage.fillSecurityAnswer(this.data.answer)
        onForgotPage.fillNewPassword(this.data.password[1])
        onForgotPage.repeatNewPassword(this.data.password[1])
        onForgotPage.resetPassword()
        onForgotPage.getConfirmationMessage().should('include.text', this.data.confirmationForgotPassword[1])
        onHomePage.navigateToAccountMenu()
        onHomePage.navigateToLogin()
        onLoginPage.login(this.data.email[1], this.data.password[1])
        onHomePage.getNavigateToCart().should('be.visible')
    })

    it('"Remember Me" functionality is working', function(){        
        onLoginPage.fillEmail(this.data.email[0])
        onLoginPage.fillPassword(this.data.password[0])
        onLoginPage.chooseRememberMe()
        onLoginPage.getRememberMe().should('be.checked')
    })

    it('The "Enter" key of the keyboard is working correctly', function(){
        onLoginPage.fillEmail(this.data.email[0])
        onLoginPage.fillPasswordAndPressEnter(this.data.password[0])
        //onLoginPage.getPassword().type(this.data.password[3]).type('{enter}') - є питання по цим двом рядкам, залишила для обговорення
        //onLoginPage.fillPassword(this.data.password[3]).type('{enter}')
        onHomePage.getNavigateToCart().should('be.visible')
    })
})  