// login.cy.js created with Cypress

describe('Realiza login na página inicial', function() {

    beforeEach(function() {
        cy.homePage()
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Teste')
    })

    it('Realiza o cadastro do investidor com todos os campos preenchidos com sucesso', function() {
        cy.CadastrandoInvestidorComSucesso()
    })

    it('Realiza o cadastro do investidor com todos os campos obrigatórios preenchidos com sucesso', function() {
        cy.CadastrandoInvestidorComCamposObrigatorios()
    })

    it('Realiza o cadastro do investidor com CPF inválido', function() {
        cy.CadastrandoInvestidorComCPFInvalido()
    })

    it('Realiza o cadastro do investidor com todos os campos vazios', function() {
        cy.CadastrandoInvestidorComTodosOsCamposVazios()
    })

    it('Realiza o cadastro do investidor com valor negativo', function() {
        cy.CadastrandoInvestidorComValorNegativo()
    })

    it('Realiza o cadastro do investidor com juros negativo', function() {
        cy.CadastrandoInvestidorComJurosNegativo()
    })
})