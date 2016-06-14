(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sale', {
        url: '/sale',
        views: {
          '@': {
            templateUrl: 'src/app/sale/sale.tpl.html',
            controller: 'SaleCtrl as sale',
            resolve: {
              data: function(saleService) {
                return saleService.getSale();
              }
            }
          }
        }
      });
  }

  /**
   * @name  SaleCtrl
   * @description Controller
   */
  function SaleCtrl(data) {
    var sale = this;
    sale.data = data.data;
  }

  angular.module('sale', ['services.sale'])
    .config(config)
    .controller('SaleCtrl', SaleCtrl);
})();
