// ***

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.log("I run before every test in every spec file");
  cy.visit("/index.html"); // Stelle sicher, dass deine
});