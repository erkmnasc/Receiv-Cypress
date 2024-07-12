const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1024,
  viewportWidth: 1280,
  e2e: {
    baseUrl: 'https://qa-01.receiv.it/testeqa.php',
    setupNodeEvents(on, config) {     
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
      screenshotOnRunSuccess: true,
  },
})
