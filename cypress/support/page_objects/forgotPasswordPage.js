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
        this.getEmail().clear().type(email)
    }

    fillNewPassword(password){
        this.getNewPassword().type(password)
    }

    repeatNewPassword(password){
        this.getRepeatNewPassword().type(password)
    }

    resetPassword(){
        this.getResetPasswordButton().click({force: true})
    }

    fillSecurityAnswer(answer){
        this.getSecurityAnswer().clear().type(answer)
    }
}
export const onForgotPage = new ForgotPage();