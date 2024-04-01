import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('a customer', () => {
  // This step can be used for setup or left empty if there's nothing to define.
});

When('they visit the page', () => {
  cy.visit('https://example.com');
});

Then('the page will be displayed correctly', () => {
  cy.matchImageSnapshot();
});
