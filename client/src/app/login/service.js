(function() {
  'use strict';

  function loginService() {
    return {
      authentification: function() {
        return 'cool';
        console.log('test');
      }
    };
  }

  angular.module('services.login')
    .factory('loginService', loginService);
})();
