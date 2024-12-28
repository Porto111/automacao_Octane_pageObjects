
const { defineConfig } = require('cypress');
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default; 
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
 
module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/features/*.feature', // Inclui subpastas
    baseUrl: 'https://octane.bradesco.com.br:8443/',
    setupNodeEvents(on, config) {
      // Configuração do Cucumber
      addCucumberPreprocessorPlugin(on, config);
 
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
 
      // Configuração do Mochawesome Reporter
      require('cypress-mochawesome-reporter/plugin')(on);
 
      return config;
    },
    
    //supportFile: 'cypress/e2e/support/commands.js',
    reporter: 'cypress-mochawesome-reporter', // Define o reporter
    reporterOptions: {
      reportDir: 'cypress/reports', // Diretório para salvar relatórios
      overwrite: false,
      html: false,
      json: true,
    },
  },
});