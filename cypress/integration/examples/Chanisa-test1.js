

describe('Chanisa Demo Login Page', () => {

let data; //closure variable

    before(() => {
    cy.fixture('example').then((fData) => {
       data = fData;
    })
  })

  it('User create a new user successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('[id="loginPanel"]').should('be.visible')

    cy.contains('Register').click()
    cy.url().should('include', '/parabank/register.htm')
    cy.get('.title').contains("Signing up is easy!")

    cy.get('[id="customer.firstName"]').type(data.name)
    cy.get('[id="customer.lastName"]').type(data.surname)
    cy.get('[id="customer.address.street"]').type(data.address)
    cy.get('[id="customer.address.city"]').type(data.city)
    cy.get('[id="customer.address.state"]').type(data.state)
    cy.get('[id="customer.address.zipCode"]').type(data.postCode)
    cy.get('[id="customer.phoneNumber"]').type(data.phone)
    cy.get('[id="customer.ssn"]').type(data.ssn)
    cy.get('[id="customer.username"]').type(data.name)
    cy.get('[id="customer.password"]').type(data.password)
    cy.get('[id="repeatedPassword"]').type(data.password)

    cy.contains('.button', 'Register').click()

    cy.contains('Your account was created successfully. You are now logged in.')
  })

  it('User login successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('[id="loginPanel"]').should('be.visible')

    cy.get('[name="username"]').type(data.name)
    cy.get('[name="password"]').type(data.password)
    cy.contains('.button', 'Log In').click()

    cy.url().should('include', 'parabank/overview.htm')
    cy.contains('Accounts Overview')
  })

  it('User login fail if field are empty', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('[id="loginPanel"]').should('be.visible')

    cy.contains('.button', 'Log In').click()
    cy.url().should('include', 'parabank/login.htm')

    cy.contains('Please enter a username and password.')
  })

   it('User login fail with invalid credentials', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('[id="loginPanel"]').should('be.visible')

      cy.get('[name="username"]').type(data.firstName)
      cy.get('[name="password"]').type(data.password)
      cy.contains('.button', 'Log In').click()
      cy.url().should('include', 'parabank/login.htm')

      cy.contains('The username and password could not be verified.')
    })
})