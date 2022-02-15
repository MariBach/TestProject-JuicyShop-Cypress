class LoginPage
{
    getNavigateToRegister()
    {
        return cy.get('a[routerlink="/register"]')
    }
    getRegistrationConfirmationMsg()
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
    getInvalidCredentoalsMsg()
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
    getResetPasswordBtn()
    {
        return cy.get('#resetButton')
    }
    getConfirmationMsg()
    {
        return cy.get('div.confirmation')
    }
    navigateToRegistration()
    {
        const link = cy.get('a[routerlink="/register"]')
        link.click({forse:true})
    }

}
export default LoginPage;