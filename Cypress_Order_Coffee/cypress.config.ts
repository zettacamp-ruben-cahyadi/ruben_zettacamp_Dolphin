import { defineConfig } from 'cypress'

export default {
  e2e: {
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

 