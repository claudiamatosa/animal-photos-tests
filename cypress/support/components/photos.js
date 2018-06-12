const selectors = {
  wrapper: '[data-id="photos"]',
  item: '[data-id="photo-card"]'
};

const getWrapper = () => cy.get(selectors.wrapper);
const getItems = () => cy.get(`${selectors.wrapper} ${selectors.item}`);

export default {
  getWrapper,
  getItems
};
