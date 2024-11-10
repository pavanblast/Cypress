describe('search facebook in google', () => {
  it('I launched google and searched facebook.', () => {
    cy.visit('https://www.google.co.in')
    cy.xpath('//*[@id="APjFqb"]').type("Facebook{enter}")
  })
})