Feature: Configurar testes

  Como um administrador do sistema
  Eu quero configurar os parâmetros de teste
  Para garantir que o sistema funcione conforme o esperado

  Scenario: Configuração de teste realizada com sucesso
    Given que estou na página de configurações
    When eu configuro os campos obrigatórios
    Then as configurações devem ser salvas corretamente
