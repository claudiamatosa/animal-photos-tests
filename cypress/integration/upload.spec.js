import uploadPage from "../support/pages/upload";

describe("List page", () => {
  describe("elements are present", () => {
    beforeEach(() => {
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

  describe.only("successful upload", () => {
    beforeEach(() => {
      uploadPage.visit({
        addPhoto: "fixture:upload-success"
      });
    });

    it("displays the uploaded photo", () => {
      uploadPage.selectImage("cat.jpg");
      uploadPage.submitForm();
    });
  });

  describe("failed upload", () => {
    beforeEach(() => {
      uploadPage.visit({
        addPhoto: "fixture:upload-failure"
      });
    });
  });
});
