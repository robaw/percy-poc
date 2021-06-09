/// <reference types="cypress" />

describe('Home page', function () {
  it('loads properly', function () {
    cy.visit('http://localhost:3000/');
    cy.percySnapshot('Homepage test', { widths: [768, 992, 1200]} );
  });
});
