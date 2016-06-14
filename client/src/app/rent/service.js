(function() {
  'use strict';

  function rentService() {
    return {
      rent.data: function() {
        return 'cool';
        console.log('test');
      }
    };
  }

  angular.module('services.rent')
    .factory('rentService', rentService);
})();