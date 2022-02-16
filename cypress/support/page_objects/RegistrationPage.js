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
        cy.get('#emailControl').clear().type(email)
    }

    moveToPasswordField(){
        cy.get('#passwordControl').click()
    }

    fillPassword(password){
        cy.get('#passwordControl').clear().type(password)
    }

    moveToRepeatPasswordField(){
        cy.get('#repeatPasswordControl').click()
    }

    repeatPassword(password){
        cy.get('#repeatPasswordControl').clear().type(password)
    }

    fillSecurityAnswer(answer){
        cy.get('#securityAnswerControl').clear().type(answer)
    }

    openSecurityQuestionList(){
        cy.get('.mat-select-placeholder').click()
    }

    chooseSecurityQuestion(question){
        cy.get('.mat-option').each(($el, index, $list) =>{
            if ($el.text().includes(question)){
                cy.get('.mat-option-text').eq(index).click()
            }
        })
    }

    getSecurityQuestionField(){
        return cy.get('div[class^="mat-select-value"]')
    }

    submitRegistration(){
        cy.get('#registerButton').click()
    }

    returnToLoginPage(){
        cy.get('#alreadyACustomerLink').click()
    }
    
    showPasswordAdvice(){
        cy.get('.mat-slide-toggle-thumb').click()
    }
}
export const onRegistrationPage = new RegistrationPage();