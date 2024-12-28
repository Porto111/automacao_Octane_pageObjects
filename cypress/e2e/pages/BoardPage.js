class BoardPage {
    selecionarBoard() {
      cy.wait(15000);
      cy.get('span.dynatree-active span').click();
      cy.wait(10000);
      cy.contains('US0012- Certificado digital- Redirecionamento do botão "Ativar nova chave"').click();
      cy.contains('span', 'Gherkin Test').click();
      cy.get('.alm-field-component:nth-child(1)').click();
      cy.get('.selector-search-box > .field-editor-search-box').type('Teste Porto');
      cy.get('.width--100 > .relative > .parent-ellipsis').click();
      cy.get('[ng-if="!shouldShowSaveAndClose"] > .button--default > translate').click();
    }
  }
  
  export default BoardPage;
  