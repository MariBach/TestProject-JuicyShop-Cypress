/// <reference types="cypress" />
import {onRegistrationPage} from "../support/page_objects/registrationPage.js"
import {onHomePage} from "../support/page_objects/homePage.js"
import {onLoginPage} from "../support/page_objects/loginPage.js"
import {randomIndex, randomEmail} from "../support/functions.js"


describe ('Registration check', function(){
    beforeEach (function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data = data;
        })
    })
    it('User can register with valid credentials', function()
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.fillSecurityAnswer(this.data.answer)
        onRegistrationPage.submitRegistration()
        onLoginPage.getRegistrationConfirmationMessage().should('include.text', "Registration completed successfully. You can now log in.")
    })

    it('User can leave registration page', ()=>
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.returnToLoginPage()        
        onLoginPage.getPageName().should('include.text', 'Login')
    })

    it('User can see 5 password recomendations after choosing "Show password advice" option', function()
    {       
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[0])
        onRegistrationPage.repeatPassword(this.data.password[0])
        onRegistrationPage.showPasswordAdvice()
        onRegistrationPage.getPasswordStrengthInfo().should('be.visible')
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(2).should('have.text', 'done')                
    })

    it('Requirement "contains at least one lower character" is marked as "done" in passwords recomendations', function()
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[1])
        onRegistrationPage.repeatPassword(this.data.password[1])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(0).should('have.text', 'done')
    })

    it('Requirement "contains at least one upper character" is marked as "done" in passwords recomendations', function()
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[2])
        onRegistrationPage.repeatPassword(this.data.password[2])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(1).should('have.text', 'done')
    })

    it('Requirement "contains at least 8 characters" is marked as "done" in passwords recomendations', function()
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.fillEmail(randomEmail)
        onRegistrationPage.fillPassword(this.data.password[3])
        onRegistrationPage.repeatPassword(this.data.password[3])
        onRegistrationPage.showPasswordAdvice()        
        onRegistrationPage.getPasswordAdviceList().should('have.length', '5')        
        onRegistrationPage.getPasswordAdviseIdentificator().eq(2).should('have.text', 'done')
        onRegistrationPage.getPasswordAdviseIdentificator().eq(4).should('have.text', 'done')
    })
    
    it('User can choose any question from Sequrity Question list', function()
    {
        cy.visit(Cypress.env("url"))
        onHomePage.closeWelcomeBanner()   
        onHomePage.navigateToAccountMenu()        
        onHomePage.navigateToLogin()
        onLoginPage.navigateToRegistration()
        onRegistrationPage.openSecurityQuestionList()
        onRegistrationPage.getChooseSecurityQuestion().should('have.length', '14')
        onRegistrationPage.chooseSecurityQuestion(this.data.question[randomIndex])
        onRegistrationPage.getSecurityQuestion().should('not.exist')
    })
})