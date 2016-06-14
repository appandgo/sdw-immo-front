(function() {
  'use strict';

  function saleService() {
    return {
      sale.data: function() {
        return 'cool';
        console.log('test');
      }
    };
  }

  angular.module('services.sale')
    .factory('saleService', saleService);
})();