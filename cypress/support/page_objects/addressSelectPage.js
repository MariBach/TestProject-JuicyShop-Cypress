export class AddressSelectPage {

    getAddNewAddressButton(){ 
        return cy.get('button[routerlink="/address/create"]')
    }

    getSelectAddress(){
        return cy.get('mat-radio-button')
    }

    getContinueButton(){
        return cy.get('button[aria-label="Proceed to payment selection"]')
    }

    addNewAddress(){
        this.getAddNewAddressButton().click()
    }

    selectAddress(){
        this.getSelectAddress().eq(0).click()
    }

    continue(){
        this.getContinueButton().click({force: true})
    }

}
export const onAddressSelectPage = new AddressSelectPage();