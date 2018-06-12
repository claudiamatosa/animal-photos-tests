const selectors = {
  wrapper: '[data-id="navigation"]',
  item: "li a"
};

const getWrapper = () => cy.get(selectors.wrapper);
const getItems = () => cy.get(`${selectors.wrapper} ${selectors.item}`);

export default {
  getWrapper,
  getItems
};
