const faker = require('faker-br');

describe('cadastroAutomatico', function() {
        const user = {}

Cypress.Commands.add('homePage', function() {
    cy.visit('/')
    })

Cypress.Commands.add('CadastrandoInvestidorComSucesso', function() {
    cy.get('#nome').type('João da Silva')
    cy.get('#cpf').type('123.456.789-00')
    cy.get('#idade').type('30')
    cy.get('input[type="radio"][value="masculino"]').check().should('have.value', 'masculino')
    cy.get('#endereco').type('Alameda Vicente Pinzon, 54')
    cy.get('#bairro').type('Vila Olímpia')
    cy.get('#cidade').type('São Paulo')
    cy.get('#valor').type('5000')
    cy.get('#juros').type('2')
    cy.get('#meses').type('12')
    cy.screenshot()
    cy.get('button').click()
    cy.screenshot()
    })

Cypress.Commands.add('CadastrandoInvestidorComCamposObrigatorios', function() {
    cy.get('#nome').type(faker.name.findName())
    cy.get('#valor').type(faker.random.number())
    cy.get('#juros').type('0.1')
    cy.get('#meses').type('10')
    cy.screenshot()
    cy.get('button').click()
    cy.screenshot()
    })

Cypress.Commands.add('CadastrandoInvestidorComCPFInvalido', function() {
    cy.get('#nome').type(faker.name.findName())
    cy.get('#cpf').type('000.000.000-0@')
    cy.get('#idade').type(faker.random.number())
    cy.get('input[type="radio"][value="feminino"]').check().should('have.value', 'feminino')
    cy.get('#endereco').type(faker.address.streetAddress())
    cy.get('#bairro').type(faker.address.county())
    cy.get('#cidade').type(faker.random.number())
    cy.get('#valor').type(faker.random.number())
    cy.get('#juros').type('0.9')
    cy.get('#meses').type('10')
    cy.screenshot()
    cy.get('button').click()
    cy.screenshot()
    })

Cypress.Commands.add('CadastrandoInvestidorComCPFInvalido', function() {
    cy.get('#nome').type(faker.name.findName()).should('be.visible')
    cy.get('#cpf').type('000.000.000-0@').should('be.visible')
    cy.get('#idade').type(faker.random.number()).should('be.visible')
    cy.get('input[type="radio"][value="masculino"]').check().should('have.value', 'masculino').should('be.visible')
    cy.get('#endereco').type(faker.address.streetAddress()).should('be.visible')
    cy.get('#bairro').type(faker.address.county()).should('be.visible')
    cy.get('#cidade').type(faker.random.number()).should('be.visible')
    cy.get('#valor').type(faker.random.number()).should('be.visible')
    cy.get('#juros').type('99').should('be.visible')
    cy.get('#meses').type('99').should('be.visible')
    cy.screenshot()
    cy.get('button').click().should('be.visible')
    cy.screenshot()
    })

Cypress.Commands.add('CadastrandoInvestidorComTodosOsCamposVazios', function() {
    cy.get('#nome').should('have.be', '').should('be.visible')
    cy.get('#cpf').should('have.be', '').should('be.visible')
    cy.get('#idade').should('have.be', '').should('be.visible')
    cy.get('input[type="radio"]').should('be.visible')
    cy.get('#endereco').should('have.be', '').should('be.visible')
    cy.get('#bairro').should('have.be', '').should('be.visible')
    cy.get('#cidade').should('have.be', '').should('be.visible')
    cy.get('#valor').should('have.be', '').should('be.visible')
    cy.get('#juros').should('have.be', '').should('be.visible')
    cy.get('#meses').should('have.be', '').should('be.visible')
    cy.screenshot()
    cy.get('button').should('have.be', '').should('be.visible')
    cy.screenshot()
    })

Cypress.Commands.add('CadastrandoInvestidorComValorNegativo', function() {
    cy.get('#nome').type(faker.name.findName()).should('be.visible')
    cy.get('#cpf').type(faker.br.cpf()).should('be.visible')
    cy.get('#idade').type(faker.random.number()).should('be.visible')
    cy.get('input[type="radio"][value="masculino"]').check().should('have.value', 'masculino').should('be.visible')
    cy.get('#endereco').type(faker.address.streetAddress()).should('be.visible')
    cy.get('#bairro').type(faker.address.county()).should('be.visible')
    cy.get('#cidade').type(faker.random.number()).should('be.visible')
    cy.get('#valor').type('-1000').should('be.visible')
    cy.get('#juros').type('0.9').should('be.visible')
    cy.get('#meses').type('10').should('be.visible')
    cy.screenshot()
    cy.get('button').click().should('be.visible')
    cy.screenshot()
    })

    Cypress.Commands.add('CadastrandoInvestidorComJurosNegativo', function() {
    cy.get('#nome').type(faker.name.findName()).should('be.visible')
    cy.get('#cpf').type(faker.br.cpf()).should('be.visible')
    cy.get('#idade').type(faker.random.number()).should('be.visible')
    cy.get('input[type="radio"][value="masculino"]').check().should('have.value', 'masculino').should('be.visible')
    cy.get('#endereco').type(faker.address.streetAddress()).should('be.visible')
    cy.get('#bairro').type(faker.address.county()).should('be.visible')
    cy.get('#cidade').type(faker.random.number()).should('be.visible')
    cy.get('#valor').type('1000').should('be.visible')
    cy.get('#juros').type('-0.9').should('be.visible')
    cy.get('#meses').type('10').should('be.visible')
    cy.screenshot()
    cy.get('button').click().should('be.visible')
    cy.screenshot()
    })
})