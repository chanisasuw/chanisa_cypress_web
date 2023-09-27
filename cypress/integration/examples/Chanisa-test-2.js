

describe('Chanisa Demo some features cypress', () => {

    it('User select radio button', () => {
          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
          cy.contains("Radio buttons")

          cy.get('[type="radio"]')
            .check('female').should('be.checked')
        })
})