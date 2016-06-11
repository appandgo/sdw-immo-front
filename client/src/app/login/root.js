(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.loginCrtl', {
        url: '/login',
        views: {
          '@': {
            template: '<login-crtl-directive></login-crtl-directive>',            
            }
          }
        });
    }
    angular.module('login', ['loginCrtlDirective'])
      .config(config);

})();