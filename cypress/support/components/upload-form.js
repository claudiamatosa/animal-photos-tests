import photoCard from "./photo-card";

const selectors = {
  wrapper: '[data-id="upload-form"]',
  fileUpload: '[data-id="file-upload"]',
  submit: '[data-id="submit"]',
  uploadedPhoto: photoCard
};

const getWrapper = () => cy.get(selectors.wrapper);
const getFileUpload = () =>
  cy.get(`${selectors.wrapper} ${selectors.fileUpload}`);
const getSubmitButton = () =>
  cy.get(`${selectors.wrapper} ${selectors.submit}`);
const getUploadedPhoto = photoCard.getWrapper;
const getUploadedPhotoImage = photoCard.getImage;
const getUploadedPhotoMeta = photoCard.getMeta;

export default {
  getWrapper,
  getFileUpload,
  getSubmitButton,
  getUploadedPhoto,
  getUploadedPhotoImage,
  getUploadedPhotoMeta
};
