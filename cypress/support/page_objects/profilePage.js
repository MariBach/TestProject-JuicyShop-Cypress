export class ProfilePage {
    
    getUserNameField(){
        return cy.get('#username')    
    }

    getSetUserNameButton(){
        return cy.get('#submit')
    }

    getChooseFileLink(){
        return cy.get('#picture')
    }

    getUploadPictureButton(){
        return cy.contains('Upload Picture')
    }

    getProfilePhoto(){
        return cy.get('img[alt="profile picture"]')

    }

    inputUserName(){
        this.getUserNameField().clear().type('User1')
    }

    setUserName(){
        this.getSetUserNameButton().click()
    }

    chooseFile() {
        this.getChooseFileLink().click().selectFile("cypress/downloads/avatar.png").click()
    }

    uploadPicture(){
        this.getUploadPictureButton().click()
    }

}
export const onProfilePage = new ProfilePage();