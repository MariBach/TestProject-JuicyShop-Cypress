export class AddressCreatePage {

    getInputCountryPlaceholder(){ 
        return cy.get('input[data-placeholder="Please provide a country."]')
    }

    getInputNamePlaceholder(){
        return cy.get('input[data-placeholder="Please provide a name."]')
    }

    getInputMobileplaceholder(){
        return cy.get('input[data-placeholder="Please provide a mobile number."]')
    }

    getInputZipPlaceholder(){
        return cy.get('input[data-placeholder="Please provide a ZIP code."]')
    }
    
    getInputAddressPlaceholder(){
        return cy.get('#address')
    }

    getInputCityPlaceholder(){
        return cy.get('input[data-placeholder="Please provide a city."]')
    }

    getInputStatePlaceholder(){
        return cy.get('input[data-placeholder="Please provide a state."]')
    }

    getSubmitButton(){
        return cy.get('#submitButton')
    }

    inputCountry(country){
        this.getInputCountryPlaceholder().type(country).click()
    }

    inputName(name){
        this.getInputNamePlaceholder().type(name).click()
    }

    inputMobile(mobile){
        this.getInputMobileplaceholder().type(mobile).click()
    }

    inputZipCode(zip){
        this.getInputZipPlaceholder().type(zip).click()
    }

    inputAddress(address){
        this.getInputAddressPlaceholder().type(address).click()
    }

    inputCity(city){
        this.getInputCityPlaceholder().type(city).click()
    }

    inputState(state){
        this.getInputStatePlaceholder().type(state).click()
    }

    submit(){
        this.getSubmitButton().click({force: true})
    }

}
export const onAddressCreatePage = new AddressCreatePage();