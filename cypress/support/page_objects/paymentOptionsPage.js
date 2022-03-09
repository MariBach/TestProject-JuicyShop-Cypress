export class PaymentOptionsPage {

    getAddnewCardMenu(){
        return cy.get('mat-panel-description').contains('Add a credit or debit card')
    }

    openAddNewCardMenu(){
        this.getAddnewCardMenu().click()
    }

    getSubmitButton(){
        return cy.get('#submitButton')
    }

    getPaymentOptions(){       
        return cy.get('[type="radio"]')
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to review"]')
    }

    inputName(name){
       cy.get('#mat-input-10').eq(0).type(name)
    }

    inputCardNumber(number){
        cy.get('#mat-input-11').type(number)
    }

    selectExpireMonth(){
        cy.get('div select').eq(0).select('12')
    }

    selectExpireYear(){
        cy.get('div select').eq(1).select('2080')
    }

    submitCreditCard(){
        this.getSubmitButton().click()
    }

    choosePaymentCard(){
        //this.getPaymentOptions().click({force: true})
        cy.get('.mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').eq(0).click({force: true})
    }

    continueToReview(){
        this.getContinueButton().click()
    }
    
}

export const onPaymentOptionsPage = new PaymentOptionsPage();