import header from "../components/header";
import navigation from "../components/navigation";
import uploadForm from "../components/upload-form";

const selectors = {
  title: '[data-id="page-title"]'
};

const visit = (stubs = {}) => {
  cy.visitStubbed("/upload", stubs);
};

const getTitle = () => cy.get(selectors.title);
const getHeader = header.getWrapper;
const getNavigation = navigation.getWrapper;
const getForm = uploadForm.getWrapper;

const selectImage = fixtureName => {
  const type = "image/jpeg";

  // Yes, this is dodgy with all the nested promises,
  // but currently the only way to upload an image to
  // a file upload input.
  //
  // See https://github.com/cypress-io/cypress/issues/170
  cy.fixture(fixtureName).then(imageContents => {
    uploadForm.getFileUpload().then($input => {
      return Cypress.Blob.base64StringToBlob(imageContents, type).then(blob => {
        const file = new File([blob], fixtureName, { type });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        $input[0].files = dataTransfer.files;
      });
    });
  });
};

const submitForm = () => {
  uploadForm.getSubmitButton().click();
};

export default {
  visit,
  getTitle,
  getHeader,
  getNavigation,
  getForm,
  selectImage,
  submitForm
};
