export class ExternalPage {

    getGoogleAccount() {
        return cy.get('div[title="Google"]')
    }
}
export const onExternalPage = new ExternalPage();