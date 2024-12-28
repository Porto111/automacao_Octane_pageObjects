import {LoginPage } from '../pages/LoginPage';
const loginPage = new LoginPage();

Given(/^que estou na página de login$/, () => {
    LoginPage.visitar()
    
	
});

When(/^eu faço login com as credenciais válidas$/, () => {
    LoginPage.login()
	
});

Then(/^eu devo ser redirecionado para a página principal$/, () => {
	
});

