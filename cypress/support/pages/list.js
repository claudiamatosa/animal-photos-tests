import header from "../components/header";
import navigation from "../components/navigation";
import photos from "../components/photos";

const visit = (stubs = {}) => {
  cy.visitStubbed("/", stubs);
};

const getHeader = header.getWrapper;
const getNavigation = navigation.getWrapper;
const getNavigationLinks = navigation.getItems;
const getPhotos = photos.getItems;

export default {
  visit,
  getHeader,
  getNavigation,
  getNavigationLinks,
  getPhotos
};
