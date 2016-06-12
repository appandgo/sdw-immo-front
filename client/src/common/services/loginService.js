(function() {
  'use strict';

  function loginService() {
    return {
      authentification: function() {
        console.log('test');
      }
    };
  }

  angular.module('services.login', [])
    .factory('DataService', dataService);
})();
