(function() {
  'use strict';

  function rentService() {
    return {
      getRent: function() {
        alert('coucou');
      }
    };
  }

  angular.module('services.rent', [])
    .factory('rentService', rentService);
})();