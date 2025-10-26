Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
  cy.get('#inventory_container').should('be.visible');
});

Cypress.Commands.add('attemptLogin', (username, password) => {
  cy.visit('https://www.saucedemo.com/v1/index.html');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});

Cypress.Commands.add('addProductByIndex', (index) => {
  cy.get(`#inventory_container div:nth-child(${index}) .btn_primary`).click();
});

Cypress.Commands.add('addAllProductsToCart', () => {
  cy.get('.btn_primary', { timeout: 10000 })
    .should('be.visible')
    .each(($btn) => {
      cy.wrap($btn).click({ force: true });
    });
});

Cypress.Commands.add('goToCart', () => {
  cy.get('#shopping_cart_container').click();
});

Cypress.Commands.add('startCheckout', () => {
  cy.get('#cart_contents_container a.btn_action').click();
});

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, postalCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('#checkout_info_container input.cart_button').click();
});

Cypress.Commands.add('finishCheckout', () => {
  cy.get('#checkout_summary_container a.btn_action').click();
});