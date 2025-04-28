const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://golden-movie-studio.vercel.app/',
    //baseUrl: 'http://192.168.0.10:8080',
    video:true
  },
});
