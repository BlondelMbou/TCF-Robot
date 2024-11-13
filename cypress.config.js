const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xs6fhc',
  // Assurez-vous d'utiliser "mochawesome" et non "mocha-awesome"
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',      // Directory for saving reports
      overwrite: false,                  // Set to false if you want multiple reports
      html: false,                       // Set to false to disable HTML reports
      json: true    ,     

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://127.0.0.1:5500/index%20copy.html',
  env: {
    browser: ['chrome', 'edge', 'electron'],  
  },
  video: true,
  retries: 2,
  },
}});

