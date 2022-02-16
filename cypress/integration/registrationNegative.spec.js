/// <reference types="cypress" />
import { onRegistrationPage } from "../support/page_objects/registrationPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { randomIndex, randomEmail } from "../support/functions.js"

describe ('Negative registration check', function(){
    beforeEach(function(){
        cy.fixture('example').then(function(data){
           this.data = data;
        })
        cy.visit(Cypress.env("url"))        
        onHomePage.openLoginPage()
        onLoginPage.navigateToRegistration()
    })

    it('User is informed in case of invalid email input', function(){        
        onRegistrationPage.fillEmail(this.data.invalidEmail)
        onRegistrationPage.moveToPasswordField()     
        onRegistrationPage.getInvalidInputMessage().should('include.text', this.data.error[0])
    })

    it("User is informed in case repeat password doesn't match with the first input password", function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[1])
        onRegistrationPage.moveToPasswordField()
        onRegistrationPage.getInvalidInputMessage().should('include.text', this.data.error[1])
    })

    it("User can not register if password length is less than 5 characters", function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.invalidPassword)
        onRegistrationPage.moveToRepeatPasswordField()       
        onRegistrationPage.getInvalidInputMessage().should('include.text', this.data.error[2])
    })

    it('User can not register without choosing the security question', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.getRegisterButton().should('be.disabled')
    })

    it('User is not able to register with not unique email', function(){
        onRegistrationPage.fillEmail(this.data.email[0])
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.submitRegistration()
        onRegistrationPage.getRegistrationErrorMessage().should('include.text', this.data.error[3])
    })

    it('User can not register without fulfilled Email field', function(){
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.getRegisterButton().should('be.disabled')
    })

    it('User can not register without fulfilled Password field', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.getRegisterButton().should('be.disabled')
    })

    it('User can not register without fulfilled Repeat Password field', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.getRegisterButton().should('be.disabled')
    })
    
    it('User can not register without fulfilled Security answer field', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.getRegisterButton().should('be.disabled')
    })    
})