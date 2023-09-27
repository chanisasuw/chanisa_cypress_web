//cypress - Spec File

describe('Automate the test scenario for Banking project', () => {

let data; //closure variable

    before(() => {
    cy.fixture('example').then((fData) => {
       data = fData;
    })
  })

  it('As a banking manager I would like to create a new customer', () => {

    // 1. Open link https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

    // 2. Click on Bank manager Login button & Validate the link url
    cy.get('[ng-click="customer()"]').should('be.visible')
    cy.get('[ng-click="manager()"]').should('be.visible')
    cy.get('[ng-click="manager()"]').contains('Bank Manager Login').click()

    cy.url().should('include', '/BankingProject/#/manager')

   // 3. Click on Add customer
    cy.contains('Add Customer').should('be.visible')
    cy.get('[ng-click="addCust()"]').contains('Add Customer').click()

    // 4. Fill the information & add the new customer
    cy.contains('First Name :')
    cy.contains('Last Name :')
    cy.contains('Post Code :')

    cy.get('[ng-model="fName"]').type(data.firstName)
    cy.get('[ng-model="lName"]').type(data.lastName)
    cy.get('[ng-model="postCd"]').type(data.postCode)

    cy.get('form').submit()

   // 5. Now Go to customer table & validate the new customer available in the customers list
    cy.contains('Customers').should('be.visible')
    cy.get('[ng-click="showCust()"]').click()
    cy.url().should('include', '/BankingProject/#/manager/list')

    cy.get('[ng-model="searchCustomer"]').type('Froya')
    cy.contains('Froya').should('be.visible')
    cy.contains('Rinde').should('be.visible')
    cy.contains('6885').should('be.visible')

   // 6. Go to Open Accounts section >> Select newly added customer from the dropdown & select Pound currency from the dropdown & click on Process
    cy.get('[ng-click="openAccount()"]').click()
    cy.url().should('include', '/BankingProject/#/manager/openAccount')

    cy.get('#userSelect').select("Froya Rinde")
    cy.get('#currency').select("Pound")
    cy.get('form').submit()
})
})