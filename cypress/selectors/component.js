const component = (selector, subComponents = {}) => {
  return {
    selector,
    subComponents,
    wrapper: () => cy.get(selector),
    component: name => {
      const subComponent = subComponents[name]();

      if (!subComponent)
        throw new Error(`there is no component named ${name} in this page`);

      return component(
        `${selector} ${subComponent.selector}`,
        subComponent.subComponents
      );
    }
  };
};

export default component;
