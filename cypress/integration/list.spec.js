import ListPage from "../selectors/pages/list";

describe.only("List page", () => {
  beforeEach(() => {
    ListPage({
      visit: true,
      stubs: {
        photos: "fixture:photos"
      }
    });
  });

  it("works", () => {
    ListPage()
      .wrapper()
      .should("be.visible");
  });
});
