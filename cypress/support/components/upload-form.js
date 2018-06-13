const selectors = {
  wrapper: '[data-id="upload-form"]',
  fileUpload: '[data-id="file-upload"]',
  submit: '[data-id="submit"]',
  uploadedPhoto: '[data-id="uploaded-photo"]'
};

const getWrapper = () => cy.get(selectors.wrapper);
const getFileUpload = () =>
  cy.get(`${selectors.wrapper} ${selectors.fileUpload}`);
const getSubmitButton = () =>
  cy.get(`${selectors.wrapper} ${selectors.submit}`);
const getUploadedPhoto = () =>
  cy.get(`${selectors.wrapper} ${selectors.uploadedPhoto}`);

export default {
  getWrapper,
  getFileUpload,
  getSubmitButton,
  getUploadedPhoto
};
