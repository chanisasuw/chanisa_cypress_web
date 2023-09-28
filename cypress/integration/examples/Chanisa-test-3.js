

describe('Chanisa setup hook tests', () => {

    before(() => {
     // setup something before this test suite start
    })

    after(() => {
    // do something after all of this suite done
    })


    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    afterEach(() => {
       // example logout
     })


       it('User verify java alert pop-up', () => {
          cy.contains('[id="alertbtn"]', 'Alert').click()

          //window:alert
          cy.on('window:alert',(str)=>
             {
             expect(str).to.equal('Hello , share this practice page and share your knowledge')
             })
        })

        it('User verify confirm java alert pop-up', () => {
          cy.contains('[value="Confirm"]', 'Confirm').click()

          //window:alert
          cy.on('window:confirm',(str)=>
              {
              expect(str).to.equal('Hello , Are you sure you want to confirm?')
              })
        })


        it('User select iframe embedded', () => {
          cy.scrollTo(0,1500)
          cy.wait(500)
          cy.get('iframe')
          cy.frameLoaded('[id="courses-iframe"]')
          cy.iframe().find("a[href*='mentorship']").eq(0).click()

          cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

          })

          })