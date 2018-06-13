const selectors = {
  wrapper: '[data-id="photo-card"]',
  image: "img",
  meta: '[data-id="image-meta"]'
};

const getWrapper = () => cy.get(selectors.wrapper);
const getImage = () => cy.get(`${selectors.wrapper} ${selectors.image}`);
const getMeta = () => cy.get(`${selectors.wrapper} ${selectors.meta}`);

export default {
  getWrapper,
  getImage,
  getMeta
};
