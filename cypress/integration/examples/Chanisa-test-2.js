

describe('Chanisa Demo some features cypress', () => {

//        it('User select radio button', () => {
//          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
//          cy.contains("Radio buttons")
//
//          cy.get('[type="radio"]')
//            .check('female').should('be.checked')
//        })
//
//        it('User select one checkbox button', () => {
//          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
//          cy.contains("Checkboxes")
//
//          cy.get('[type="checkbox"]')
//          .check('Bike').should('be.checked')
//
//          cy.get('[type="checkbox"]')
//          .uncheck('Bike').should('not.be.checked')
//
//        })
//
//        it('User select multiple checkbox button', () => {
//          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
//          cy.contains("Checkboxes")
//
//          cy.get('[type="checkbox"]')
//          .check(['Bike', 'Car']).should('be.checked')
//
//          cy.get('[type="checkbox"]')
//          .uncheck(['Bike', 'Car']).should('not.be.checked')
//         })
//
//        it('User select an option', () => {
//          cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
//          cy.contains("Dropdown")
//
//          cy.get('select')
//            .should('have.value', 'volvo')
//
//          cy.get('select').select('audi')
//        })

        it('User verify java alert pop-up', () => {
          cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
          cy.contains('[id="alertbtn"]', 'Alert').click()

          //window:alert
          cy.on('window:alert',(str)=>
             {
             expect(str).to.equal('Hello , share this practice page and share your knowledge')
             })
        })

        it('User verify confirm java alert pop-up', () => {
          cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
          cy.contains('[value="Confirm"]', 'Confirm').click()

          //window:alert
          cy.on('window:confirm',(str)=>
              {
              expect(str).to.equal('Hello , Are you sure you want to confirm?')
              })
        })
})