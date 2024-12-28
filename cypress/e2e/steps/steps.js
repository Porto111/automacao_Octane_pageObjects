import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../pageObjects/LoginPage';
import PastaPage from '../pageObjects/PastaPage';
import ConfiguracoesPage from '../pageObjects/ConfiguracoesPage';
import BoardPage from '../pageObjects/BoardPage';

const loginPage = new LoginPage();
const pastaPage = new PastaPage();
const configuracoesPage = new ConfiguracoesPage();
const boardPage = new BoardPage();

// Steps para Login
Given('que estou na página de login', () => {
  loginPage.visitar();
});

When('eu faço login com as credenciais validas', () => {
  loginPage.login('usuarioTeste', 'senhaTeste');
});

Then('eu devo ser redirecionado para a página principal', () => {
  cy.url().should('include', '/dashboard'); // exemplo de asserção
});

// Steps para Criar Pasta
Given('que estou na tela de criação de pasta', () => {
  pastaPage.criarPasta('Nome da Pasta', 'Descrição da Pasta', 'ID-Jira');
});

When('eu preencho os campos com um nome e descrição válidos', () => {
  pastaPage.criarPasta('Nova Pasta', 'Descrição válida', '12345');
});

Then('a pasta deve ser criada e aparecer na lista', () => {
  cy.contains('Nova Pasta').should('exist');
});

// Steps para Configurações
Given('que estou na página de configurações', () => {
  configuracoesPage.configurar();
});

When('eu configuro os campos obrigatórios', () => {
  configuracoesPage.configurar();
});

Then('as configurações devem ser salvas corretamente', () => {
  cy.contains('Configuração salva com sucesso').should('be.visible');
});

// Steps para Selecionar Board
Given('que estou na tela de seleção de boards', () => {
  boardPage.selecionarBoard();
});

When('eu seleciono um board específico', () => {
  boardPage.selecionarBoard();
});

Then('o board deve ser exibido corretamente', () => {
  cy.contains('Teste Porto').should('be.visible');
});
