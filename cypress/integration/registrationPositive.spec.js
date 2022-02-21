/// <reference types="cypress" />
import { onRegistrationPage } from "../support/page_objects/registrationPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { randomIndex, randomEmail } from "../support/functions.js"

describe ('Positive registration check', function(){
    beforeEach (function(){
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        onLoginPage.navigateToRegistrationPage()
    })

    it('User can register with valid credentials', function(){        
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.submitRegistration()
        onLoginPage.getRegistrationConfirmationMessage().should('include.text', this.data.confirmationRegistration)
    })

    it('User can leave registration page', function(){        
        onRegistrationPage.returnToLoginPage()        
        onLoginPage.getPageName().should('include.text', 'Login')
    })

    it('User can see 5 password recomendations after choosing "Show password advice" option', function(){       
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.showPasswordAdvice()
        onRegistrationPage.getPasswordStrengthInfo().should('be.visible')
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(2).should('have.text', 'done')                
    })

    it('Requirement "contains at least one lower character" is marked as "done" in passwords recomendations', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[7])
        onRegistrationPage.repeatPassword(this.data.password[7])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(0).should('have.text', 'done')
    })

    it('Requirement "contains at least one upper character" is marked as "done" in passwords recomendations', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[8])
        onRegistrationPage.repeatPassword(this.data.password[8])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(1).should('have.text', 'done')
    })

    it('Requirement "contains at least 8 characters" is marked as "done" in passwords recomendations', function(){
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[9])
        onRegistrationPage.repeatPassword(this.data.password[9])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')        
        onRegistrationPage.getPasswordAdviseIdentificator().eq(2).should('have.text', 'done')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(4).should('have.text', 'done')
    })
    
    it('User can choose any question from Sequrity Question list', function(){
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.getChooseSecurityQuestion().should('have.length', '14')
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.getSecurityQuestion().should('not.exist')
    })
})