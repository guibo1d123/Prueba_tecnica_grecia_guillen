describe('Carrito - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.login(); // comando personalizado de login
  });

  it('Agrega todos los productos al carrito y navega al carrito', () => {
    cy.addAllProductsToCart();
    cy.goToCart();

    // Validación opcional: asegurarse de que se agregaron todos
    cy.get('.cart_item').should('have.length', 6); // ajustá el número si cambia el inventario
  });
});
