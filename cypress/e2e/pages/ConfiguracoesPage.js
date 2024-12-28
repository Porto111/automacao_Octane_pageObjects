class ConfiguracoesPage {
    configurar() {
      cy.wait(15000);
      cy.get('span.dynatree-active span').click();
      cy.wait(10000);
      cy.contains('US0012- Certificado digital- Redirecionamento do botão "Ativar nova chave"').click();
      cy.contains('span', 'Gherkin Test').click();
      cy.get('input[data-aid="alm-string-field-editor-input-box"]').type('CTM - 00');
      cy.get('.alm-field-component > field-editor-preeditor > .field-editor-preeditor-field > .validity-indicator > .validity-include > .multi-value-container').click();
      cy.get('.field-editor-search-results-list > .field-editor-search-results-groups:nth-child(3)').click();
      cy.get('div > .field-editor-selector-and-buttons-container > .minor > .button--primary').click();
      cy.get('.alm-row-container:nth-child(4) > .alm-presenter-component > .alm-field-type-LookupList').click();
      cy.get('.selector-search-box > .field-editor-search-box').type('Solutis');
      cy.get('.search-results--match-part').contains('Solutis').click();
      cy.get('.alm-field-type-FlatReference').click();
      cy.get('.field-editor-search-field').type('123456');
      cy.get('.search-results--match-part').contains('123456').click();
      cy.get('.minor > .button--primary').click();
    }
  }
  
  export default ConfiguracoesPage;
  