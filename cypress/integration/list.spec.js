import ListPage from "../selectors/pages/list";

describe.only("List page", () => {
  let listPage;

  beforeEach(() => {
    listPage = ListPage({
      visit: true,
      stubs: {
        photos: "fixture:photos"
      }
    });
  });

  it("displays a header with emojis", () => {
    const header = listPage.component("header").wrapper();

    header.should("be.visible");
    header.should("have.text", "🐭🐶🐱🐌🙊🐣");
  });

  it("displays a navigation bar with two links", () => {
    const navigation = listPage.component("navigation");
    navigation.wrapper().should("be.visible");

    navigation
      .component("items")
      .wrapper()
      .as("links");

    cy.get("@links").should("have.length", 2);

    cy.get("@links")
      .eq(0)
      .should("have.text", "List");

    cy.get("@links")
      .eq(1)
      .should("have.text", "Upload");
  });
});
