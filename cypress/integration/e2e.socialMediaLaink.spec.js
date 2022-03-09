/// <reference types="cypress" />
import { onAboutUsPage } from "../support/page_objects/aboutUsPage.js";
import { onHomePage } from "../support/page_objects/homePage.js"

describe ('Update user profile', () => {
    beforeEach (() => {
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.dismissCookies()
        onHomePage.closeWelcomeBanner()
    })

    it('User can open social media from “About Us” page', function(){
        onHomePage.openSideBarMenu()
        onHomePage.openAboutUsPage()
        onAboutUsPage.openTwitterLink()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('https://twitter.com/owasp_juiceshop')
        })
    })
})