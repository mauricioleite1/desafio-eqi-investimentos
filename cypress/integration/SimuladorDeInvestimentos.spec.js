/// <reference types="cypress" />

describe('Tela Inicial', () => {
  beforeEach(() => cy.visit('/'));

  describe('1 . Existem todos os elementos', () => {
    it('1.1 . Header com o título da Tela Inicial', () => {
      cy.get('[data-cy=content]').should('have.length', 1);
      cy.get('[data-cy=content]').contains('Simulador de Investimentos');
    });

    it('1.2 . Botões para escolher o tipo de rendimento para simulação', () => {
      cy.get('[data-cy=options-btn-rendimento]').should('have.length', 2);
      cy.get('[data-cy=options-btn-rendimento]')
        .first()
        .should('have.text', '✓Bruto');
      cy.get('[data-cy=options-btn-rendimento]')
        .last()
        .should('have.text', 'Líquido');
    });

    it('1.3 . Botões para escolher o tipo de indexação para simulação', () => {
      cy.get('[data-cy=options-btn-indexacao]');
      cy.get('[data-cy=options-btn-indexacao]').should('have.length', 3);

      cy.get('[data-cy=options-btn-indexacao]')
        .first()
        .should('have.text', 'PRÉ');
      cy.get('[data-cy=options-btn-indexacao]')
        .eq(1)
        .should('have.text', '✓PÓS');
      cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .should('have.text', 'FIXADO');
    });

    it('1.4 . Labels e os seus respectivos Inputs para simulação', () => {
      cy.get('[data-cy=label]').should('have.length', 6);

      cy.get('[data-cy=label]').first().should('have.text', 'Aporte Inicial');
      cy.get('[data-cy=label]').eq(1).should('have.text', 'Prazo (em meses)');
      cy.get('[data-cy=label]').eq(2).should('have.text', 'IPCA (ao ano)');
      cy.get('[data-cy=label]').eq(3).should('have.text', 'Aporte Mensal');
      cy.get('[data-cy=label]').eq(4).should('have.text', 'Rentabilidade');
      cy.get('[data-cy=label]').eq(5).should('have.text', 'CDI (ao ano)');

      cy.get('[data-cy=input]').should('have.length', 6);
    });

    it('1.5 . Botão para limpar os campos', () => {
      cy.get('[data-cy=clear-btn]').should('have.text', 'Limpar campos');
    });

    it('1.6 . Botão para simular o investimento', () => {
      cy.get('[data-cy=simular-btn]').should('have.text', 'Simular');
    });

    it('1.7 . O botão para simular deve estar inicialmente desligado (disabled)', () => {
      cy.get('[data-cy=simular-btn]').last().should('be.disabled');
    });
  });

  describe('2 . Interações', () => {
    it('2.1 . Deve ser possível escolher outra opção de tipo de rendimento', () => {
      cy.get('[data-cy=options-btn-rendimento]')
        .eq(1)
        .contains('Líquido')
        .should('have.text', 'Líquido');

      cy.get('[data-cy=options-btn-rendimento]').eq(1).click();

      cy.get('[data-cy=options-btn-rendimento]')
        .eq(1)
        .should('have.class', 'selected');

      cy.get('[data-cy=options-btn-rendimento]')
        .eq(1)
        .should('have.text', '✓Líquido');

      cy.get('[data-cy=options-btn-rendimento]')
        .first()
        .should('have.text', 'Bruto');
    });

    it('2.2 . Deve ser possível escolher outra opção de tipo de indexação', () => {
      cy.get('[data-cy=options-btn-indexacao]')
        .eq(1)
        .should('have.class', 'selected');

      cy.get('[data-cy=options-btn-indexacao]')
        .first()
        .contains('PRÉ')
        .should('have.text', 'PRÉ');

      cy.get('[data-cy=options-btn-indexacao]').first().click();

      cy.get('[data-cy=options-btn-indexacao]')
        .first()
        .should('have.text', '✓PRÉ');

      cy.get('[data-cy=options-btn-indexacao]')
        .eq(1)
        .should('have.text', 'PÓS');

      cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .contains('FIXADO')
        .should('have.text', 'FIXADO');

      cy.get('[data-cy=options-btn-indexacao]').last().click();

      cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .should('have.class', 'selected');

      cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .should('have.text', '✓FIXADO');
    });

    it('2.3 . Deve ser possível clicar no botão Simular após informar todos os requisitos nos inputs', () => {
      cy.get('[data-cy=simular-btn]').last().should('be.disabled');
      cy.get('[data-cy=input').first().type('100000');
      cy.get('[data-cy=input').eq(1).type('12');
      cy.get('[data-cy=input').eq(3).type('100000');
      cy.get('[data-cy=input').eq(4).type('100000');
      cy.get('[data-cy=simular-btn]').last().should('be.enabled');
    });

    it('2.4 . Deve ser possível limpar os campos ao clicar no botão específico', () => {
      cy.get('[data-cy=input').first().type('100000');
      cy.get('[data-cy=input').eq(1).type('12');
      cy.get('[data-cy=input').eq(3).type('100000');
      cy.get('[data-cy=input').eq(4).type('100000');

      cy.get('[data-cy=clear-btn]').click();
      cy.get('[data-cy=input').first().should('have.value', '');
      cy.get('[data-cy=input').eq(1).should('have.value', '');
      cy.get('[data-cy=input').eq(3).should('have.value', '');
      cy.get('[data-cy=input').eq(4).should('have.value', '');
    });

    it('2.5 . O resultado da simulação deve ser visível ao preencher inputs e clicar em Simular', () => {
      cy.get('[data-cy=input').first().type('100000');
      cy.get('[data-cy=input').eq(1).type('12');
      cy.get('[data-cy=input').eq(3).type('100000');
      cy.get('[data-cy=input').eq(4).type('100000');

      cy.get('[data-cy=simular-btn]').click();

      cy.get('[data-cy=resultado-simulacao]').should('be.visible');
      cy.get('[data-cy=graph]').should('be.visible');
    });

    it.only('2.6 - Devem existir 6 cards com informações da simulação', () => {
      cy.get('[data-cy=input').first().type('100000');
      cy.get('[data-cy=input').eq(1).type('12');
      cy.get('[data-cy=input').eq(3).type('100000');
      cy.get('[data-cy=input').eq(4).type('100000');

      cy.get('[data-cy=simular-btn]').click();

      cy.get('[data-cy="card"').should('have.length', 6);
    });
  });
});
