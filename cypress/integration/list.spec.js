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
});
