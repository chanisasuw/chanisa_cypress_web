describe('Chanisa custom commands', () => {

let data; //closure variable

    before(() => {
        cy.fixture('example').then((fData) => {
               data = fData;
            })
    })


    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    })

    it('User select product name from array in json file', () => {
        cy.contains('.nav-link','Checkout ( 0 )')
        data.productName.forEach(function(element) {
            cy.selectProduct(element);
        })
        cy.contains('.nav-link','Checkout ( 2 )')
    })
    })