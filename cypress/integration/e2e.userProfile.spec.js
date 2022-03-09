/// <reference types="cypress" />
import { onHomePage } from "../support/page_objects/homePage.js"
import { onLoginPage } from "../support/page_objects/loginPage.js";
import { onProfilePage } from "../support/page_objects/profilePage.js";

describe ('Update user profile', () => {
    beforeEach (() => {
        cy.fixture('data').then(function(data){
           this.data = data;
        })
        cy.openHomePage()
        onHomePage.openLoginPage()
        cy.createUser()
    })
 
    it('User can change user profile info and upload photo', function() {
        onLoginPage.login(this.data.email[0], this.data.password[0])
        onHomePage.navigateToAccountMenu()
        onHomePage.navigateToUserProfile()
        onProfilePage.inputUserName()
        onProfilePage.setUserName()
        onProfilePage.chooseFile()
        onProfilePage.uploadPicture()
        onProfilePage.getProfilePhoto().should('have.attr', 'src', 'assets/public/images/uploads/21.png')
    })

})