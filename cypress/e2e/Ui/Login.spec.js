/// <reference types="cypress" />

import CommonPage from '../../support/Common/CommonPage'
import LoginPage from '../../support/Login/LoginPage'

describe('TCD000 - Funcionalidade: Login', { tags: '@demo' }, () => {

    beforeEach(() => {
        cy.visit('login')
    });

    it('Deve Fazer Login com sucesso', () => {
        cy.login('douglas.newsletter@hotmail.com', 'qa828891')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Validar Erro no Login usuario senha inválidos', () => {
        cy.login('do.newsletter@hotmail.com', 'qa828891')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    });


});

/*
Funcionalidade: Login
Eu como usuário das Conexão QA
Quero fazer o login
Para editar meu perfil

Cenário: Login
Arrange - Dado - Pré-Requsito -> Dado que eu esteja na tela de login
Action - Quando - Ação do Usuário -> Quando eu inserir usuário e senha
Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard




*/