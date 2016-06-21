(function() {
    'use strict';

    function loginDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/login/login.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            
            controller: function($log, loginService) {
    
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.login', ['app.services.login'])
    .directive('loginDirective', loginDirective); 

})();