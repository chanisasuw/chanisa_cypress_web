

describe('Chanisa Demo some features cypress', () => {

        it('User select radio button', () => {
          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
          cy.contains("Radio buttons")

          cy.get('[type="radio"]')
            .check('female').should('be.checked')
        })

        it('User select one checkbox button', () => {
          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
          cy.contains("Checkboxes")

          cy.get('[type="checkbox"]')
          .check('Bike').should('be.checked')

          cy.get('[type="checkbox"]')
          .uncheck('Bike').should('not.be.checked')

        })

        it('User select multiple checkbox button', () => {
          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
          cy.contains("Checkboxes")

          cy.get('[type="checkbox"]')
          .check(['Bike', 'Car']).should('be.checked')

          cy.get('[type="checkbox"]')
          .uncheck(['Bike', 'Car']).should('not.be.checked')
         })

        it('User select an option', () => {
          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
          cy.contains("Dropdown")

          cy.get('select')
            .should('have.value', 'volvo')

          cy.get('select').select('audi')
        })
})