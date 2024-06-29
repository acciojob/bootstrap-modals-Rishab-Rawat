//your code here
describe('Modal Test', () => {
  it('Opens and closes the Bootstrap modal', () => {
    cy.visit('http://localhost:3000/main.html');

    // Click the button to open the modal
    cy.get('#open-modal').click();

    // Assert that the modal is visible
    cy.get('#newton-modal').should('have.class', 'show');

    // Click the close button in the modal footer
    cy.get('.modal-footer button').click();

    // Assert that the modal is closed
    cy.get('#newton-modal').should('not.have.class', 'show');
  });
});