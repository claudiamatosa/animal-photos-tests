import listPage from "../support/pages/list";

describe("List page", () => {
  beforeEach(() => {
    listPage.visit({
      photos: "fixture:photos"
    });
  });

  it("displays a header with emojis", () => {
    const header = listPage.getHeader();

    header.should("be.visible");
    header.should("have.text", "🐭🐶🐱🐌🙊🐣");
  });

  describe("navigation bar", () => {
    beforeEach(() => {
      listPage.getNavigation().as("navigation");
      listPage.getNavigationLinks().as("navigationLinks");
    });

    it("displays", () => {
      cy.get("@navigation").should("be.visible");
    });

    it("contains two links", () => {
      cy.get("@navigationLinks").should("have.length", 2);
    });

    it("Displays a link to the list", () => {
      cy.get("@navigationLinks")
        .eq(0)
        .should("have.text", "List");
    });

    it("Displays a link to the the upload form", () => {
      cy.get("@navigationLinks")
        .eq(1)
        .should("have.text", "Upload");
    });
  });

  describe("photos", () => {
    beforeEach(() => {
      listPage.getPhotos().as("photos");
    });

    it("displays the photos returned by the api", () => {
      cy.fixture("photos.json").then(({ data: { photos } }) => {
        photos.forEach(({ src }, index) => {
          cy.get("@photos")
            .eq(index)
            .find("img")
            .should("have.attr", "src", src);
        });
      });
    });
  });
});
