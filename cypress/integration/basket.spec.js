/// <reference types="cypress" />
import { onBasketPage } from "../support/page_objects/basketPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"


describe ('Login check', () => {
    beforeEach (() => {
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        cy.createUser()
        
    })

    it('remove Product from the Basket', function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.addToBasketProduct(1)
        onHomePage.addToBasketProduct(2)
        onHomePage.navigateToBasket()
        onBasketPage.removeProduct()
        onHomePage.getProductQuantityIdentifier().should('have.text', '1')
        cy.clearBasket()
    })

    it("change item's quantity in the Basket", function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.addToBasketProduct(1)
        onHomePage.navigateToBasket()
        onBasketPage.increaseItems()
        onHomePage.getProductQuantityIdentifier().should('have.text', '2')
        onBasketPage.checkTotalPrice()
        cy.clearBasket()
    })

    it('not add to Basket product with "Sold out" label', function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.addToBasketProduct(12)
        onHomePage.getSoldOutRibbon().should('contain.text', 'Sold Out')
        onHomePage.getSoldOutMessage().should('exist')
    })

    it ('add to Basket product with "Only 1 left" label once more', function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.addToBasketProduct(4)
        onHomePage.navigateToBasket()
        onHomePage.navigateToProductList()
        onHomePage.addToBasketProduct(4)
        onHomePage.getSoldOutMessage().should('exist')
        cy.clearBasket()
    })
})