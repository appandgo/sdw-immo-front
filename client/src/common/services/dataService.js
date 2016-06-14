(function() {
  'use strict';

  function dataService() {
    return {
      get: function() {
        return ['some', 'data'];
        console.log('cool');
      }
    };
  }

  angular.module('common.services.data', [])
    .factory('DataService', dataService);
})();
