(function() {
  'use strict';

  function loginSerivce() {
      console.log('test');
  }
  
  angular.module('services.login', [])
    .factory('loginService', loginService);
})();
