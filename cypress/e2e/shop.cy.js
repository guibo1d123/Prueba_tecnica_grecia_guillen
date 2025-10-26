describe('Compra completa - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.login(); // helper ya existente
  });

  it('Realiza una compra exitosa de todos los productos', () => {
    cy.addAllProductsToCart();
    cy.goToCart();
    cy.startCheckout();
    cy.fillCheckoutForm('grecia', 'guillen', 'C1426');
    cy.finishCheckout();

    // Validación final opcional
    cy.url().should('include', '/checkout-complete');
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
