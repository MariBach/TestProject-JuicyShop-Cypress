export class OrderSummaryPage {

    getOrderConfirmationMessage(){
        return cy.get('h1').contains('Thank you for your purchase!')
    } 
}

export const onOrderSummary = new OrderSummaryPage();