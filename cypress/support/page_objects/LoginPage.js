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

    getLoginWithGoogle(){
        return cy.get('#loginButtonGoogle')
    }

    getInvalidCredentialsMessage(){
        return cy.get('div.error.ng-star-inserted')
    }

    fillEmail(email){
        cy.get('#email').clear().type(email)
    }

    fillPassword(password){
        cy.get('#password').clear().type(password)
    }

    navigateToRegistration(){
        cy.get('a[routerlink="/register"]').click({force: true})
    }

    submitLogin(){
        cy.get('#loginButton').click()
    }

    login(email, password){
        this.fillEmail(email)
        this.fillPassword(password)
        this.submitLogin()
    }

    showPassword(){
        cy.get('button[aria-label$="password"]').click()
    }

    navigateToForgotPasswordPage(){
        cy.get('a[routerlink="/forgot-password"]').click({force: true})
    }
}
export const onLoginPage = new LoginPage();