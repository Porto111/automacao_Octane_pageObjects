Feature: Selecionar um board de teste

  Como um usuário do sistema
  Eu quero selecionar um board para testes
  Para realizar a gestão de minhas tarefas

  Scenario: Selecionar um board de teste
    Given que estou na tela de seleção de boards
    When eu seleciono um board específico
    Then o board deve ser exibido corretamente
