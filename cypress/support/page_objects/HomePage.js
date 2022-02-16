export class HomePage
{
    getWelcomeBannerCloseButton()
    {
        return cy.get('button[aria-label="Close Welcome Banner"]')
    }
    getAccount()
    {
        return cy.get('#navbarAccount')
    }
    getNavigateToLogin()
    {
        return cy.get('#navbarLoginButton')
    }
    getNavigateToRegister()
    {
        return cy.get('a[routerlink="/register"]')
    }
    getNavigateToCart()
    {
        return cy.get('button[aria-label$="cart"]')        
    }
    getDismissCookies()
    {
        return cy.get('a.cc-btn.cc-dismiss')
    }
    getDisplayedItemsOnPage()
    {
        return cy.get('span[class*="min-line"]').then(function(element)
        {
            cy.log(element.text())
        })
    }
    getAddToCartButton()
    {
        return cy.get('button[aria-label="Add to Basket"]')
    }
    closeWelcomeBanner()
    {
        cy.get('button[aria-label="Close Welcome Banner"]').click()
    }
    navigateToAccountMenu()
    {
        cy.get('#navbarAccount').click()
    }
    navigateToLogin()
    {
        cy.get('#navbarLoginButton').click({forse:true})
    }
}
export const onHomePage = new HomePage();