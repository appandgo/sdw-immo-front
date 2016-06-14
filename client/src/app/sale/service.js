(function() {
  'use strict';

  function saleService() {
    return {
      getSale: function() {
        alert('coucou');
      }
    };
  }

  angular.module('services.sale', [])
    .factory('saleService', saleService);
})();