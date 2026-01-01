import LoginPage from '../pages/LoginPage'

describe('OrangeHRM Login Tests', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
  cy.openOrangeHRM();
});

  it('TC01 - Valid login with correct credentials', () => {
    loginPage.login('Admin', 'admin123')
    cy.url().should('include', '/dashboard')
  })

  it('TC02 - Login fails with invalid password', () => {
    loginPage.login('Admin', 'wrongPassword')
    loginPage.elements.errorMessage()
      .should('contain', 'Invalid credentials')
  })

  it('TC03 - Login fails with invalid username', () => {
  loginPage.login('InvalidUser', 'admin123')
  loginPage.elements.errorMessage()
  .should('contain', 'Invalid credentials')
})
})
