describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Login exitoso con usuario válido', () => {
    cy.login();
  });

  it('Login fallido con usuario incorrecto', () => {
    cy.attemptLogin('invalid_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('Login fallido con contraseña incorrecta', () => {
    cy.attemptLogin('standard_user', 'wrong_password');
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
  });

  it('Login fallido con campos vacíos', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain', 'Username is required');
  });
});