/// <reference types="cypress" />
import { onAddressCreatePage } from "../support/page_objects/addressCreatePage.js"
import { onAddressSelectPage } from "../support/page_objects/addressSelectPage.js"
import { onBasketPage } from "../support/page_objects/basketPage.js"
import { onDeliverySpeedPage } from "../support/page_objects/deliverySpeedPage.js"
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js"
import { onPlaceOrderPage } from "../support/page_objects/placeOrderPage.js"
import { onPaymentOptionsPage } from "../support/page_objects/paymentOptionsPage.js"
import { onOrderSummaryPage } from "../support/page_objects/orderSummaryPage.js"

describe ('e2e Purchase flow', () => {
    beforeEach (() => {
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        cy.createUser()
    })

    it ('fullfill purchase flow', function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.addToBasketProduct(1)
        onHomePage.navigateToBasket()
        onBasketPage.checkout()
        onAddressSelectPage.addNewAddress()
        onAddressCreatePage.inputCountry('Country')
        onAddressCreatePage.inputName('User1')
        onAddressCreatePage.inputMobile("1234567")
        onAddressCreatePage.inputZipCode("1234")
        onAddressCreatePage.inputAddress('Street 1')
        onAddressCreatePage.inputCity('City')
        onAddressCreatePage.inputState('State')
        onAddressCreatePage.submit()
        onAddressSelectPage.selectAddress()
        onAddressSelectPage.continue()
        onDeliverySpeedPage.chooseOneDayDelivery()
        onDeliverySpeedPage.continue()
        onPaymentOptionsPage.openAddNewCardMenu()
        onPaymentOptionsPage.inputName('User1')
        onPaymentOptionsPage.inputCardNumber('1234123412341234')
        onPaymentOptionsPage.selectExpireMonth()
        onPaymentOptionsPage.selectExpireYear()
        onPaymentOptionsPage.submitCreditCard()
        onPaymentOptionsPage.choosePaymentCard()
        onPaymentOptionsPage.continueToReview()
        onPlaceOrderPage.placeOrder()
        onOrderSummaryPage.getOrderConfirmationMessage().should('exist')
        onHomePage.getProductQuantityIdentifier().should('have.text', '0')
    })
})
