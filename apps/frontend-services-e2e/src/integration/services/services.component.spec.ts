describe('frontend-services', () => {
  beforeEach(() => cy.visit('/iframe.html?id=servicescomponent--primary'));
  it('should render the component', () => {
    cy.get('nitro-frontend-services').should('exist');
  });
});
