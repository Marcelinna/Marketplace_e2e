export class ScientificDomain {
  static readonly pageObject = {
    getScientificDomainImage: () => cy.get(".branch-box a[href*='services']"),
    getActiveFilter: () => cy.get(".filter-tag"),
  };

  static clickOnScientificDomain() {
    cy.intercept("GET", "/services*").as("services");
    ScientificDomain.pageObject.getScientificDomainImage().then((element) => {
      for (let i = 0; i < element.length; i++) {
        ScientificDomain.pageObject
          .getScientificDomainImage()
          .eq(i)
          .trigger("click");
        cy.wait("@services");
        cy.location("href").should("include", "services?scientific_domains");

				ScientificDomain.pageObject.getActiveFilter().should("be.visible");
        cy.go("back");
        cy.location("href").should(
          "eq",
          "https://marketplace-beta.docker-fid.grid.cyf-kr.edu.pl/"
        );
      }
    });
  }
}
