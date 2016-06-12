(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.loginCrtl', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/login/login.tpl.html',
            controller: 'HomeCtrl as home',
            resolve: {
              data: function(DataService) {
                return DataService.get();
              }
            }
          }
        }
      });
  }

  /**
   * @name  loginCrtl
   * @description Controller
   */
  function loginCrtl(data) {
    var home = this;
    home.data = data.data;
  }

  angular.module('login', ['common.services.login'])
    .config(config)
    .controller('loginCrtl', loginCrtl);
})();