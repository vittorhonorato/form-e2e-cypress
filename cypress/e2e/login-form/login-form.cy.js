describe('Simulando login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:40301')
  })

  it('Deve logar com credenciais válidas', () => {

    cy.get('input[formControlName="email"]').should('be.visible').type('teste@email.com')
    cy.get('input[formControlName="password"]').should('be.visible').type('123456')

    cy.contains('button', 'Entrar').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Usuário logado!!')
    })
  })

  it('Deve falhar com credenciais inválidas', () => {

    cy.get('input[formControlName="email"]').should('be.visible').type('tesaste@email.com')
    cy.get('input[formControlName="password"]').should('be.visible').type('123456')

    cy.contains('button', 'Entrar').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Falha no login')
    })
  })

  })
