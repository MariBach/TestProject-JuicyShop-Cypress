export class OrderSummaryPage {

    getPlaceOrder(){
        return cy.get('#checkoutButton')
    }

    placeOrder(){
        this.getPlaceOrder().click()
    }

    getOrderConfirmationMessage(){
        return cy.get('.confirmation').contains('Thank you for your purchase!')
    } 

}
export const onOrderSummaryPage = new OrderSummaryPage();