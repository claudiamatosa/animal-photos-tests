const selectors = {
  wrapper: '[data-id="header"]'
};

const getWrapper = () => cy.get(selectors.wrapper);

export default {
  getWrapper
};
