const { faker } = require("@faker-js/faker");

describe('Template Spec', async () => {
  it('Verifies if properties containing tags are updated', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    cy.visit('https://lite-qa6.sprinklr.com/outbound/stream/published');

    cy.get('[id="email"]').type("ishan.bais+qa6socialadmin@sprinklr.com");
    cy.get('[data-testid="email-submit"]').click();
    cy.get('[id="password"]').type('ECsh9shv$2XG7cnG');
    cy.get('[data-testid="login"]').click();

    cy.get('[data-spaceweb="stack"] [data-nav-id="draftPosts"]', { timeout: 120000 }).click();

    cy.get('[data-nav-id="draftPosts"]', { timeout: 120000 }).click({ multiple: true });
    cy.get('[data-testid="post-card-MESSAGE_17613149"]', { timeout: 120000 }).click({ multiple: true });

    const randomText = faker.internet.userName();

    cy.get('[data-testid="tags-value-box"]').click();
    cy.get('[data-errorid="tags"]').type(randomText, { force: true });

    cy.get('[data-baseweb="popover"] li').click({ multiple: true });

    cy.get('[data-testid="tags-value-box"] span').should("contain", randomText);

    cy.get('[data-testid="tags-value-box"]').type('{esc}');
  });
});

