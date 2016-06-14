(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.rent', {
        url: '/rent',
        views: {
          '@': {
            templateUrl: 'src/app/rent/rent.tpl.html',
            controller: 'RentCtrl as rent',
            resolve: {
              data: function(RentService) {
                return RentService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  RentCtrl
   * @description Controller
   */
  function RentCtrl(data) {
    var rent = this;
    rent.data = data.data;
  }

  angular.module('rent', ['services.rent'])
    .config(config)
    .controller('RentCtrl', RentCtrl);
})();
