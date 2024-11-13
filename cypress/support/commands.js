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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// /// <reference types="cypress" />
// import SwagLabsLoginPage from "../pages/SwagLabsLoginPage";


// Cypress.Commands.add('doLogin', (username, password) => {
//     const swagLabsLoginPage = new SwagLabsLoginPage();

//     cy.visit('https://www.saucedemo.com/');
//     swagLabsLoginPage.enterUsername("standard_user");
//     swagLabsLoginPage.enterPassword("secret_sauce");
//     swagLabsLoginPage.clickLogin();
//     cy.url().should('include', '/inventory.html');

//   });