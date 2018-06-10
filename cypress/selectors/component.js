export default (selector, subComponents = {}, context) => {
  let elements;

  return cy
    .get(selector)
    .within(() => {
      elements = Object.assign(
        {
          wrapper: () => cy.root()
        },
        subComponents
      );
    })
    .then(() => elements);
};
