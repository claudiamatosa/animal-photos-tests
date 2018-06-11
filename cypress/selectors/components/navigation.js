import component from "../component";

export default () =>
  component('[data-id="navigation"]', {
    items: () => component("li a")
  });
