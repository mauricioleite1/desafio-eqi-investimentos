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

    it('1.5 . Botões para simular o investimento', () => {
      cy.get('[data-cy=simular-btn]').should('have.length', 2);

      cy.get('[data-cy=simular-btn]')
        .first()
        .should('have.text', 'Limpar campos');
      cy.get('[data-cy=simular-btn]').last().should('have.text', 'Simular');
    });

    it('1.6 . O botão para simular deve estar inicialmente desligado (disabled)', () => {
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

        cy.get('[data-cy=options-btn-indexacao]')
        .first()
        .click();

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

        cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .click();

        cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .should('have.class', 'selected');

        cy.get('[data-cy=options-btn-indexacao]')
        .last()
        .should('have.text', '✓FIXADO');
    });

    it('2.3 . Deve ser possível clicar no botão Simular após informar todos os requisitos nos inputs', () => {
      cy.get('[data-cy=input').first().type('100000');
      cy.get('[data-cy=input').eq(1).type('12');

    });
  });
});

//   it('can add new todo items', () => {
//     // We'll store our item text in a variable so we can reuse it
//     const newItem = 'Feed the cat'

//     // Let's get the input element and use the `type` command to
//     // input our new list item. After typing the content of our item,
//     // we need to type the enter key as well in order to submit the input.
//     // This input has a data-test attribute so we'll use that to select the
//     // element in accordance with best practices:
//     // https://on.cypress.io/selecting-elements
//     cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

//     // Now that we've typed our new item, let's check that it actually was added to the list.
//     // Since it's the newest item, it should exist as the last element in the list.
//     // In addition, with the two default items, we should have a total of 3 elements in the list.
//     // Since assertions yield the element that was asserted on,
//     // we can chain both of these assertions together into a single statement.
//     cy.get('.todo-list li')
//       .should('have.length', 3)
//       .last()
//       .should('have.text', newItem)
//   })

//   it('can check off an item as completed', () => {
//     // In addition to using the `get` command to get an element by selector,
//     // we can also use the `contains` command to get an element by its contents.
//     // However, this will yield the <label>, which is lowest-level element that contains the text.
//     // In order to check the item, we'll find the <input> element for this <label>
//     // by traversing up the dom to the parent element. From there, we can `find`
//     // the child checkbox <input> element and use the `check` command to check it.
//     cy.contains('Pay electric bill')
//       .parent()
//       .find('input[type=checkbox]')
//       .check()

//     // Now that we've checked the button, we can go ahead and make sure
//     // that the list element is now marked as completed.
//     // Again we'll use `contains` to find the <label> element and then use the `parents` command
//     // to traverse multiple levels up the dom until we find the corresponding <li> element.
//     // Once we get that element, we can assert that it has the completed class.
//     cy.contains('Pay electric bill')
//       .parents('li')
//       .should('have.class', 'completed')
//   })

//   context('with a checked task', () => {
//     beforeEach(() => {
//       // We'll take the command we used above to check off an element
//       // Since we want to perform multiple tests that start with checking
//       // one element, we put it in the beforeEach hook
//       // so that it runs at the start of every test.
//       cy.contains('Pay electric bill')
//         .parent()
//         .find('input[type=checkbox]')
//         .check()
//     })

//     it('can filter for uncompleted tasks', () => {
//       // We'll click on the "active" button in order to
//       // display only incomplete items
//       cy.contains('Active').click()

//       // After filtering, we can assert that there is only the one
//       // incomplete item in the list.
//       cy.get('.todo-list li')
//         .should('have.length', 1)
//         .first()
//         .should('have.text', 'Walk the dog')

//       // For good measure, let's also assert that the task we checked off
//       // does not exist on the page.
//       cy.contains('Pay electric bill').should('not.exist')
//     })

//     it('can filter for completed tasks', () => {
//       // We can perform similar steps as the test above to ensure
//       // that only completed tasks are shown
//       cy.contains('Completed').click()

//       cy.get('.todo-list li')
//         .should('have.length', 1)
//         .first()
//         .should('have.text', 'Pay electric bill')

//       cy.contains('Walk the dog').should('not.exist')
//     })

//     it('can delete all completed tasks', () => {
//       // First, let's click the "Clear completed" button
//       // `contains` is actually serving two purposes here.
//       // First, it's ensuring that the button exists within the dom.
//       // This button only appears when at least one task is checked
//       // so this command is implicitly verifying that it does exist.
//       // Second, it selects the button so we can click it.
//       cy.contains('Clear completed').click()

//       // Then we can make sure that there is only one element
//       // in the list and our element does not exist
//       cy.get('.todo-list li')
//         .should('have.length', 1)
//         .should('not.have.text', 'Pay electric bill')

//       // Finally, make sure that the clear button no longer exists.
//       cy.contains('Clear completed').should('not.exist')
//     })
//   })
// })
