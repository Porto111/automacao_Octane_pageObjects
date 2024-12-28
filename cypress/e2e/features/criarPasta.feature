Feature: Criar pasta

  Como um usuário autenticado
  Eu quero criar uma nova pasta
  Para que eu possa organizar as minhas tarefas

  Scenario: Criar uma pasta com sucesso
    Given que estou na tela de criação de pasta
    When eu preencho os campos com um nome e descrição validos
    And eu clico no botão para adicionar a pasta
    Then a pasta deve ser criada e aparecer na lista
