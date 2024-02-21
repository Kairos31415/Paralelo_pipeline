/// <reference types="cypress" />

describe ('Primer Test con Cypress', () =>{
    it("Esto es un Hola mundo", () =>{
        let t = 1000;
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq',"DEMOQA")
        
        cy.get('#userName').should("be.visible").type("Jairo")
        cy.wait(t)
        cy.get('#userEmail').should("be.visible").type("jairo@email.com")
        cy.wait(t)
        cy.get('#currentAddress').should("be.visible").type("Direccion 1")
        cy.wait(t)
        cy.get('#permanentAddress').should("be.visible").type("Direccion 2")
        cy.wait(t)
        cy.get('#submit').should('be.visible').click({force:true})
    })
})