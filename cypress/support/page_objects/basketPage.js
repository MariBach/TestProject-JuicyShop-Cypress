export class BasketPage {

    getTotalPrice(){
        return cy.get('#price')
    }

    checkTotalPrice(){
         cy.get('#price').should(($el) => {
             const text = $el.text()
             expect(text).to.include('3.98')
         })
    }
    
    removeProduct(){
        cy.get('mat-row').each(($el, index, $list)=>{
            if ($el.text().includes('Pomace')){
                cy.get('svg[data-icon="trash-alt"]').eq(index).click()
            }
        })
    }

    getCheckoutButton(){
        return cy.get('#checkoutButton')
    }
    
    checkout(){
        this.getCheckoutButton().click()
    }

    increaseItems(){
        return cy.get('.cdk-column-quantity > :nth-child(3)').click()
    }

}
export const onBasketPage = new BasketPage();