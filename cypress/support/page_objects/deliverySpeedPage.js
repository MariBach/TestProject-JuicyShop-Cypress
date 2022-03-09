export class DeliverySpeedPage {
    
    getOneDayDelivery(){
        return cy.get('mat-radio-button')
    }

    getContinueButton(){
        return cy.get('button[aria-label="Proceed to delivery method selection"]')
    }
    
    chooseOneDayDelivery(){
        this.getOneDayDelivery().eq(0).click()
    }

    continue(){
        this.getContinueButton().click()
    }

}
export const onDeliverySpeedPage = new DeliverySpeedPage();