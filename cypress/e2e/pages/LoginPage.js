class LoginPage {
    visitar() {
      cy.visit('/');
    }
  
    preencherCredenciais(userName, password) {
      cy.get('#inputUsername').clear().type(userName);
      cy.get('#inputPassword').type(password, { log: false });
    }
  
    clicarLogin() {
      cy.contains('button', 'Login').click();
    }
  
    login(userName = Cypress.env('CHAVE_M'), password = Cypress.env('PASSWORD')) {
      this.visitar();
      this.preencherCredenciais(userName, password);
      this.clicarLogin();
    }
  }
  
  export default LoginPage;
  