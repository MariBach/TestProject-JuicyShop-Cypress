export class RegistrationPage {

    getEmail(){
        return cy.get('#emailControl')
    }

    getPassword(){
        return cy.get('#passwordControl')
    }

    getRepeatPassword(){
        return cy.get('#repeatPasswordControl')
    }

    getShowPasswordAdvice(){
        return cy.get('.mat-slide-toggle-thumb')
    }

    getPasswordAdviceList(){
        return cy.get('div[class^="info-row"]')
    }

    getPasswordStrengthInfo(){
        return cy.get('mat-password-strength-info')
    }

    getPasswordAdviseIdentificator(){
        return cy.get('mat-card-content div mat-icon')
    }

    getSecurityQuestion(){
        return cy.get('.mat-select-placeholder')
    }

    getChooseSecurityQuestion(){
        return cy.get('span.mat-option-text')
    }
    
    getSecurityQuestionField(){
        return cy.get('div[class^="mat-select-value"]')
    }

    getSecurityAnswer(){
        return cy.get('#securityAnswerControl')
    }

    getRegisterButton(){
        return cy.get('#registerButton')
    }

    getInvalidInputMessage(){
        return cy.get('mat-error')
    }

    getRegistrationErrorMessage(){
        return cy.get('.error')
    }

    getReturnToLoginPage(){
        return cy.get('#alreadyACustomerLink')
    }
    getPageName(){
        return cy.get('h1')
    }

    fillEmail(email){
        this.getEmail().clear().type(email)
    }

    moveToPasswordField(){
        this.getPassword().click()
    }

    fillPassword(password){
        this.getPassword().clear().type(password)
    }

    moveToRepeatPasswordField(){
        this.getRepeatPassword().click()
    }

    repeatPassword(password){
        this.getRepeatPassword().clear().type(password)
    }

    fillSecurityAnswer(answer){
        this.getSecurityAnswer().clear().type(answer)
    }

    openSecurityQuestionList(){
        this.getSecurityQuestion().click()
    }

    chooseSecurityQuestion(question){
        cy.get('.mat-option').each(($el, index, $list) =>{
            if ($el.text().includes(question)){
                cy.get('.mat-option-text').eq(index).click()
            }
        })
    }

    submitRegistration(){
        this.getRegisterButton().click()
    }

    returnToLoginPage(){
        this.getReturnToLoginPage().click()
    }
    
    showPasswordAdvice(){
        this.getShowPasswordAdvice().click()
    }

    initiateUserRegistration(email, password, question, answer){
        this.fillEmail(email)
        this.fillPassword(password)
        this.repeatPassword(password)
        this.openSecurityQuestionList()
        this.chooseSecurityQuestion(question)
        this.fillSecurityAnswer(answer)
        this.submitRegistration()
    }
}
export const onRegistrationPage = new RegistrationPage();