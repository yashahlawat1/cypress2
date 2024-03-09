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

    cy.get('[class="sw--d2 sw--ai sw--bg sw--bq sw--br sw--bs sw--bt sw--im sw--ds sw--fr sw--fs sw--d5 sw--d6 sw--d7 sw--d8 sw--h7 sw--h8 sw--h9 sw--ha sw--b8 sw--c3 sw--c4 sw--c5 sw--c6 sw--a13 sw--a14 sw--f0 sw--ca sw--cb sw--a0r sw--cd sw--da sw--f1 sw--ez sw--ht sw--f3 sw--ly sw--f4 sw--f5 sw--f6 sw--f7 sw--a10 sw--a15 sw--a16 sw--bi sw--ir"]', { timeout: 120000 }).click({multiple:true});
    cy.get('[data-nav-id="allAssets"]',{timeout:120000}).click({multiple:true});
    cy.get('[alt="Screenshot 2024-01-17 at 11.22.12 AM"]',{timeout:12000}).click({multiple:true});
    cy.get('[data-errorid="tags"]',{timeout:120000}).click({multiple:true});

    const randomText = faker.internet.userName();

    cy.get('[role="combobox"]').click();
    cy.get('[data-errorid="tags"]').type(randomText, { force: true });

    cy.get('[data-baseweb="popover"] li').click({ multiple: true });

    cy.get('[aria-multiselectable="true"] span').should("contain", randomText);

    cy.get('[aria-multiselectable="true"]').type('{esc}');
    cy.get('[data-errorid="campaignIds"]').click();

  });
});

