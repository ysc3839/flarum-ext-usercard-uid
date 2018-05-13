var flarum = require('flarum-gulp');

flarum({
  modules: {
    'ysc3839/flarum-ext-usercard-uid': [
      'src/**/*.js'
    ]
  }
});
