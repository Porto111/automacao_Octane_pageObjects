/// <references types="Cypress/>"

import CriarPastaElements from "../elements/criarPasta";
const CriarPastaElements = new CriarPastaElements;

class PastaPage {
    criarPasta(nome, descricao, idJira) {
      
        cy.wait(15000);
        cy.get('li:nth-child(2) > ul > li > .dynatree-expanded > .dynatree-title').click();
        cy.get('[data-aid="tree-toolbar-add toolbar-button"]').click();
        cy.get(CriarPastaElements.nomeDaPasta()).type(nome);
        cy.get(CriarPastaElements.descricaoDaAtividade()).type(descricao);
        cy.get('.alm-field-component > alm-string-field-editor > .validity-indicator > .validity-include > .ng-dirty').click();
        cy.get(CriarPastaElements.idJira()).type(idJira);
        
        
        cy.get('[ng-if="!shouldShowSaveAndClose"] > .button--default > translate').click();
    }

    clickAddPasta(){
      cy.get(CriarPastaElements.btnAddPasta()).click();
    }
  }
  
  export default PastaPage;
  