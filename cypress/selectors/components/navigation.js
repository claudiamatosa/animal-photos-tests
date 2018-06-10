import component from "../component";

export default () =>
  component('[data-id="navigation"]', {
    item: () => cy.component("li a")
  });
