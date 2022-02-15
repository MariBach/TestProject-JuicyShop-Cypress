class ExternalPage
{
    getGoogleAccount()
    {
        return cy.get('div[title="Google"]')
    }
}
export default ExternalPage;