Feature: Login sistema

  Como um usuário do sistema
  Eu quero realizar o login
  Para que eu possa acessar as funcionalidades

  Scenario: Login com sucesso
    Given que estou na página de login
    When eu faço login com as credenciais válidas
    Then eu devo ser redirecionado para a página principal
