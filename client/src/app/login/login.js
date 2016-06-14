(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
   
  function config($stateProvider) {
    $stateProvider
      .state('root.loginCrtl', {
        url: '/login',
        views: {
          '@': {
            templateUrl: 'src/app/login/login.tpl.html',
            controller: 'loginCrtl as login',
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

  angular.module('login', [])
    .config(config)
    .controller('loginCrtl', loginCrtl);
})();