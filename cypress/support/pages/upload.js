import header from "../components/header";
import navigation from "../components/navigation";
import notification from "../components/notification";
import uploadForm from "../components/upload-form";

const selectors = {
  title: '[data-id="page-title"]'
};

const visit = stubs => {
  if (stubs) {
    cy.visitStubbed("/upload", stubs);
  } else {
    cy.visit("/upload");
  }
};

const getTitle = () => cy.get(selectors.title);
const getHeader = header.getWrapper;
const getNavigation = navigation.getWrapper;
const getForm = uploadForm.getWrapper;
const getUploadedPhoto = uploadForm.getUploadedPhoto;
const getUploadedPhotoImage = uploadForm.getUploadedPhotoImage;
const getUploadedPhotoMeta = uploadForm.getUploadedPhotoMeta;
const getNotification = notification.getAlert;

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
  getUploadedPhoto,
  getUploadedPhotoImage,
  getUploadedPhotoMeta,
  getNotification,
  getForm,
  selectImage,
  submitForm
};
