export class AboutUsPage {

    getTwitterLink(){
        return cy.get('[aria-label="Button for the Twitter page of the shop"]')
    }

    openTwitterLink(){
        return this.getTwitterLink().then(function(el) {
            const url = el.prop('href')
            cy.window().then(win => win.location.href = url);
        })
    }

}
export const onAboutUsPage = new AboutUsPage();
