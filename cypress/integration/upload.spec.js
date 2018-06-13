import uploadPage from "../support/pages/upload";

describe("List page", () => {
  ["macbook-15", "ipad-2", "iphone-6"].forEach(viewport => {
    describe(`elements are present in a ${viewport} screen`, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        uploadPage.visit();
      });

      it("displays the header", () => {
        uploadPage.getHeader().should("be.visible");
      });

      it("displays the navigation bar", () => {
        uploadPage.getNavigation().should("be.visible");
      });

      it("displays the title", () => {
        uploadPage
          .getTitle()
          .should("be.visible")
          .should("have.text", "Upload");
      });

      it("displays the form", () => {
        uploadPage.getForm().should("be.visible");
      });
    });
  });

  describe("successful upload", () => {
    beforeEach(() => {
      cy.fixture("upload-success.json").as("uploadSuccess");

      uploadPage.visit({
        addPhoto: "fixture:upload-success"
      });

      uploadPage.selectImage("cat.jpg");
      uploadPage.submitForm();
    });

    it("displays the uploaded photo", () => {
      cy.get("@uploadSuccess").then(response =>
        uploadPage
          .getUploadedPhotoImage()
          .should("have.attr", "src", response.data.addPhoto.src)
      );
    });

    it("displays the description", () => {
      cy.get("@uploadSuccess").then(response =>
        uploadPage
          .getUploadedPhotoMeta()
          .should("contain", response.data.addPhoto.description)
      );
    });

    it("displays the tags", () => {
      cy.get("@uploadSuccess").then(response =>
        uploadPage
          .getUploadedPhotoMeta()
          .should("contain", response.data.addPhoto.tags.join(", "))
      );
    });
  });

  describe("failed upload (mocks)", () => {
    beforeEach(() => {
      uploadPage.visit({
        addPhoto: "fixture:upload-failure"
      });

      uploadPage.selectImage("restaurant.jpg");
      uploadPage.submitForm();
    });

    it("displays an error notification", () => {
      uploadPage.getNotification().should("be.visible");
    });
  });

  describe("failed upload (no mocks)", () => {
    beforeEach(() => {
      uploadPage.visit();

      uploadPage.selectImage("restaurant.jpg");
      uploadPage.submitForm();
    });

    it("displays an error notification", () => {
      uploadPage.getNotification().should("be.visible");
    });
  });
});
