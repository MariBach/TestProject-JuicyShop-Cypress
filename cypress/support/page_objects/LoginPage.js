export class LoginPage {
    
    getNavigateToRegister(){
        return cy.get('a[routerlink="/register"]')
    }

    getRegistrationConfirmationMessage(){
        return cy.get('span.mat-simple-snack-bar-content')
    }

    getPageName(){
        return cy.get('h1')
    }

    getEmail(){
        return cy.get('#email')
    }

    getPassword(){ 
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#loginButton')
    }

    getForgotPassword(){
        return cy.get('a[routerlink="/forgot-password"]')
    }

    getShowPassword(){
        return cy.get('button[aria-label$="password"]')
    }

    getHidePassword(){
        return cy.get('button[aria-label*=" hide"]')
    }

    getRememberMe(){
        return cy.get('#rememberMe-input')
    }    

    getLoginWithGoogle(){
        return cy.get('#loginButtonGoogle')
    }

    getInvalidCredentialsMessage(){
        return cy.get('div.error.ng-star-inserted')
    }

    getInvalidInputMessage(){
        return cy.get('.mat-error')
    }

    fillEmail(email){
        this.getEmail().clear().type(email)
    }

    fillPassword(password){
        this.getPassword().clear().type(password)
    }

    fillPasswordAndPressEnter(password){
        this.getPassword().clear().type(password).type('{enter}')
    }

    navigateToRegistrationPage(){
        this.getNavigateToRegister().click({force: true})
    }

    submitLogin(){
        this.getLoginButton().click()
    }

    login(email, password){
        this.fillEmail(email)
        this.fillPassword(password)
        this.submitLogin()
    }

    showPassword(){
        this.getShowPassword().click()
    }

    navigateToForgotPasswordPage(){
        this.getForgotPassword().click({force: true})
    }

    chooseRememberMe(){
        this.getRememberMe().check({force: true})
    }
}
export const onLoginPage = new LoginPage();