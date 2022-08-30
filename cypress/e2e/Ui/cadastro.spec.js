/// <reference types="cypress" />
const faker = require('faker-br') 

describe('TCD000 - Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    })

    it('Deve faer cadastro com sucesso', () => {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type('Douglas Wolff')
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(faker.internet.email())
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('teste123')

        cy.get('[data-test="register-submit"]').click()

        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        

    })

    it('Deve faer cadastro com erro', () => {

    })

})