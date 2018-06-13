import { startsWith, toPairs } from "ramda";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const fixturePrefix = "fixture:";
const graphQLPath = "http://localhost:4000/graphql";

// Allows stubbing GraphQL responses by operation name.
Cypress.Commands.add("visitStubbed", (url, operations = {}) => {
  const operationData = {};

  toPairs(operations).forEach(([operation, stub]) => {
    if (startsWith(fixturePrefix, stub)) {
      // The stub starts with 'fixture' - load it from the fixtures folder.
      cy.fixture(stub.replace(fixturePrefix, "")).then(data => {
        operationData[operation] = data;
      });
    } else {
      // The stub is free-form, return whatever's passed in
      operationData[operation] = stub;
    }
  });

  cy.visit(url, {
    onBeforeLoad: win => {
      cy.stub(win, "fetch")
        .withArgs(graphQLPath)
        .callsFake(serverStub(operationData));

      win.fetch.callThrough();
    }
  });
});

const serverStub = operations => (_, req) => {
  const { operationName } = JSON.parse(req.body);
  const resultStub = operations[operationName];
  return resultStub ? Promise.resolve(responseStub(resultStub)) : {};
};

const responseStub = result => ({
  json: () => Promise.resolve(result),
  text: () => Promise.resolve(JSON.stringify(result)),
  ok: true
});
