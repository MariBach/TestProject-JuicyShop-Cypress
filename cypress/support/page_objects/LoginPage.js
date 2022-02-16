export class LoginPage
{
    getNavigateToRegister()
    {
        return cy.get('a[routerlink="/register"]')
    }
    getRegistrationConfirmationMessage()
    {
        return cy.get('span.mat-simple-snack-bar-content')
    }
    getPageName()
    {
        return cy.get('h1')
    }
    getEmail()
    {
        return cy.get('#email')
    }
    getPassword()
    { 
        return cy.get('#password')
    }
    getLoginButton()
    {
        return cy.get('#loginButton')
    }
    getForgotPassword()
    {
        return cy.get('a[routerlink="/forgot-password"]')
    }
    getShowPassword()
    {
        return cy.get('button[aria-label$="password"]')
    }
    getHidePassword()
    {
        return cy.get('button[aria-label*=" hide"]')
    }
    getLoginWithGoogle()
    {
        return cy.get('#loginButtonGoogle')
    }
    getInvalidCredentialsMessage()
    {
        return cy.get('div.error.ng-star-inserted')
    }
    getNewPassword()
    {
        return cy.get('#newPassword')
    }
    getRepeatNewPassword()
    {
        return cy.get('#newPasswordRepeat')
    }
    getSecurityAnswer()
    {
        return cy.get('#securityAnswer')
    }
    getResetPasswordButton()
    {
        return cy.get('#resetButton')
    }
    getConfirmationMessage()
    {
        return cy.get('div.confirmation')
    }
    navigateToRegistration()
    {
        cy.get('a[routerlink="/register"]').click({forse:true})
    }

}
export const onLoginPage = new LoginPage();