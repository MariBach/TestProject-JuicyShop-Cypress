class HomePage
{
    getWelcomeBannerCloseBtn()
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
    getAddToCartBtn()
    {
        return cy.get('button[aria-label="Add to Basket"]')
    }
    closeWelcomeBanner()
    {
        const button = cy.get('button[aria-label="Close Welcome Banner"]')
        button.click()
    }
    navigateToAccountMenu()
    {
        const button = cy.get('#navbarAccount')
        button.click()
    }
    navigateToLogin()
    {
        const button = cy.get('#navbarLoginButton')
        button.click({forse:true})
    }
}
export default HomePage;