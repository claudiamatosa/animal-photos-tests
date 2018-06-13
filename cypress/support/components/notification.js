const selectors = {
  wrapper: '[data-id="notification"]',
  alert: '[role="alert"]'
};

const getWrapper = () => cy.get(selectors.wrapper);
const getAlert = () => cy.get(`${selectors.wrapper} ${selectors.alert}`);

export default {
  getWrapper,
  getAlert
};
