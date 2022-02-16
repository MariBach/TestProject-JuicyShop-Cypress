export class ForgotPage {

    getEmail(){
        return cy.get('#email')
    }

    getNewPassword(){
        return cy.get('#newPassword')
    }

    getRepeatNewPassword(){
        return cy.get('#newPasswordRepeat')
    }

    getSecurityAnswer(){
        return cy.get('#securityAnswer')
    }

    getResetPasswordButton(){
        return cy.get('#resetButton')
    }

    getConfirmationMessage(){
        return cy.get('div.confirmation')
    }

    fillEmail(email){
        cy.get('#email').clear().type(email)
    }

    fillNewPassword(password){
        cy.get('#newPassword').type(password)
    }

    repeatNewPassword(password){
        cy.get('#newPasswordRepeat').type(password)
    }

    resetPassword(){
        cy.get('#resetButton').click()
    }
    fillSecurityAnswer(answer){
        cy.get('#securityAnswer').type(answer)
    }
}
export const onForgotPage = new ForgotPage();