describe("Login feature", () => {
  before(() => {
    cy.exec("npm run dev");
  });
  after(() => {
    cy.exec("npm run build");
  });
  beforeEach(() => {
    cy.server();
    cy.visit("/link2/", {
      onBeforeLoad(window) {
        window.fetch = null;
      }
    });
  });
  it("As a user I can see an error with a wrong username or password", () => {
    cy.route({
      method: "POST",
      url: "**/api/user/token/",
      status: 401,
      response: {
        access: undefined,
        refresh: undefined
      }
    });
    const emailInput = 'input[name="username"]';
    const passwordInput = 'input[name="password"]';
    cy.get(emailInput).type("xsasasa");
    cy.get(passwordInput).type("changeme");
    cy.get("[data-testid=submit]").click();
    cy.get("[data-testid=error-message]").contains("Unauthorized");
  });
  it("As a user I can login and see a list of links", () => {
    cy.route({
      method: "POST",
      url: "**/api/user/token/",
      response: {
        access:
          "fake.token.J0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cC",
        refresh:
          "fake.token.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwi"
      }
    });
    cy.route({
      method: "GET",
      url: "**/api/link2/",
      response: [
        {
          title: "Getting started with Django REST",
          url: "http://someurl.example",
          id: 1
        },
        {
          title: "Getting started with Django testing",
          url: "http://someurl.example",
          id: 2
        }
      ]
    });
    const emailInput = 'input[name="username"]';
    const passwordInput = 'input[name="password"]';
    cy.get(emailInput).type("valentino");
    cy.get(passwordInput).type("changeme77");
    cy.get("[data-testid=submit]").click();
    cy.get("[data-testid=welcome]")
      .last()
      .contains("Welcome back valentino!");
    cy.get("[data-testid=links-list]").contains(
      /Getting started with Django REST|Getting started with Django testing/
    );
  });
});
