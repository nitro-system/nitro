describe('frontend-home', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=homecomponent--primary&args=welcomeMessage;')
  );
  it('should render the component', () => {
    cy.get('nitro-frontend-home').should('exist');
  });
});
