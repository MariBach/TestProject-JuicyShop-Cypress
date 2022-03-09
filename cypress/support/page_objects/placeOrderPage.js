export class PlaceOrderPage {

    getPlaceOrderButton(){
        return cy.get('#checkoutButton')
    }

    placeOrder(){
        this.getPlaceOrderButton().click()
    }


}
export const onPlaceOrderPage = new PlaceOrderPage(); 