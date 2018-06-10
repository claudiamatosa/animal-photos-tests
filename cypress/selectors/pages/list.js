import component from "../component";
import header from "../components/header";
import navigation from "../components/navigation";
import photos from "../components/photos";

export default ({ visit = false, stubs = {} } = {}) => {
  if (visit) {
    cy.visitStubbed("/", stubs);
  }

  return component('[data-id="page-list"]', { header, navigation, photos });
};
