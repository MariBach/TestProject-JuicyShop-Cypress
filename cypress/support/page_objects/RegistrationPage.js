class RegistrationPage
{
    getEmail()
    {
        return cy.get('#emailControl')
    }
    getPassword()
    {
        return cy.get('#passwordControl')
    }
    getRepeatPassword()
    {
        return cy.get('#repeatPasswordControl')
    }
    getShowPswdAdvice()
    {
        return cy.get('.mat-slide-toggle-thumb')
    }
    getPswdAdviceList()
    {
        return cy.get('div[class^="info-row"]')
    }
    getPasswordStrengthInfo()
    {
        return cy.get('mat-password-strength-info')
    }
    getPswdAdviseIdentificator()
    {
        return cy.get('mat-card-content div mat-icon')
    }
    getSecQuestion()
    {
        return cy.get('.mat-select-placeholder')
    }
    getChooseSecQuestion()
    {
        return cy.get('span.mat-option-text')
    }
    getSecAnswer()
    {
        return cy.get('#securityAnswerControl')
    }
    getRegisterBtn()
    {
        return cy.get('#registerButton')
    }
    getInvalidInputMsg()
    {
        return cy.get('mat-error')
    }
    getRegistrationErrorMsg()
    {
        return cy.get('.error')
    }
    getReturnToLoginPage()
    {
        return cy.get('#alreadyACustomerLink')
    }
    getPageName(){
        return cy.get('h1')
    }
    fillEmail(email)
    {
        const field = cy.get('#emailControl')
        field.clear()
        field.type(email)
        return this
    }
    moveToPasswordField()
    {
        const field= cy.get('#passwordControl')
        field.click()
    }
    fillPassword(password)
    {
        const field = cy.get('#passwordControl')
        field.clear()
        field.type(password)
        return this
    }
    moveToRepeatPasswordField()
    {
        const field = cy.get('#repeatPasswordControl')
        field.click()
    }
    repeatPassword(password)
    {
        const field = cy.get('#repeatPasswordControl')
        field.clear()
        field.type(password)
        return this   
    }
    fillSecurityAnswer(answer)
    {
        const field = cy.get('#securityAnswerControl')
        field.clear()
        field.type(answer)
        return this
    }
    openSecurityQuestionList()
    {
        const list =cy.get('.mat-select-placeholder')
        list.click()
    }
    chooseSecurityQuestion(question)
    {
        cy.get('.mat-option').each(($el, index, $list) =>
        {
            if ($el.text().includes(question))
            {
                cy.get('.mat-option-text').eq(index).click()
            }
        })
    }
    getSecQuestionField()
    {
        return cy.get('div[class^="mat-select-value"]')
    }
    submitRegistration()
    {
        const button = cy.get('#registerButton')
        button.click()
    }
    returnToLoginPage()
    {
        const link = cy.get('#alreadyACustomerLink')
        link.click()
    }
    showPasswordAdvice()
    {
        const checkbox = cy.get('.mat-slide-toggle-thumb')
        checkbox.click()
    }
}
export default RegistrationPage;