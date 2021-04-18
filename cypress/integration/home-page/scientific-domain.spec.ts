import { ScientificDomain } from '../../page-objects/home-page/scientific-domain.po';

describe('Scientific domain', () => {

    before(() => {
        cy.visit('/')
    })
    
    it("should click on scientific domain and select filter",()=> {
        ScientificDomain.clickOnScientificDomain()
    })
})