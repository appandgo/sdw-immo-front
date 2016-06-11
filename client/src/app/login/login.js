(function() {
  'use strict';

  function loginCrtl(data) {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: './src/app/login/login.tpl.html',
        scope: {},
        controllerAs: 'vm',
        bindToController: true,
        controller: function($log, $timeout)  {
          console.log('It works !');
          var vm = this;
            $timeout(function() {
                $('.modal-trigger').leanModal();
            }, 1000);
        },
        link: function(scope, elm, attrs) {
        }
    };
  }

  angular.module('loginCrtlDirective', ['services.login'])
      .directive('loginCrtlDirective', loginCrtl);
})();
