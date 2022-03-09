export class HomePage {
    
    getWelcomeBannerCloseButton(){
        return cy.get('button[aria-label="Close Welcome Banner"]')
    }

    getAccount(){
        return cy.get('#navbarAccount')
    }

    getNavigateToLogin(){
        return cy.get('#navbarLoginButton')
    }

    getNavigateToRegister(){
        return cy.get('a[routerlink="/register"]')
    }

    getNavigateToCart(){
        return cy.get('button[aria-label$="cart"]')        
    }

    getProductQuantityIdentifier(){
        return cy.get('.fa-layers-counter')
    }

    getDismissCookies(){
        return cy.get('a.cc-btn.cc-dismiss')
    }

    getDisplayedItemsOnPage(){
        return cy.get('span[class*="min-line"]').then(function(element){
            cy.log(element.text())
        })
    }

    getAddToBasketButton(){
        return cy.get('button[aria-label="Add to Basket"]')
    }

    getSoldOutMessage(){
        return cy.contains("We are out of stock! Sorry for the inconvenience.")
    }

    getSoldOutRibbon(){
        return cy.get('.ribbon').eq(3)
        //return cy.contains('.item-name', "Best Juice Shop Salesman Artwork")
        .parents('mat-card').find('span')
    }

    getUserProfile(){
        return cy.get('button[aria-label="Go to user profile"]')
    }

    getSideBarMenu(){
        return cy.get('button[aria-label="Open Sidenav"]')
    }

    getAboutUsPage(){
        return cy.get('[routerlink="/about"]')
    }

    addToBasketProduct(ind){
        this.getAddToBasketButton().each(($el, index, $list) => {
            if (index == ind-1) {
                cy.wrap($el).click()
                }
        })
    }

    closeWelcomeBanner(){
        this.getWelcomeBannerCloseButton().click()
    }

    dismissCookies(){
        this.getDismissCookies().click()
    }

    navigateToAccountMenu(){
        this.getAccount().click()
    }

    navigateToLogin(){
        this.getNavigateToLogin().click({force: true})
    }

    navigateToBasket(){
        this.getNavigateToCart().click()
    }

    openLoginPage(){
        this.closeWelcomeBanner()
        this.dismissCookies()
        this.navigateToAccountMenu()
        this.navigateToLogin()
    }

    navigateToProductList(){
        return cy.get('[routerlink="/search"] > .mat-button-wrapper > span').click()
    }

    navigateToUserProfile(){
        this.getUserProfile().click()
    }

    openSideBarMenu(){
        this.getSideBarMenu().click()
    }

    openAboutUsPage(){
        this.getAboutUsPage().click()
    }
}
export const onHomePage = new HomePage();