(function() {
    'use strict';

    function homeDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/home/home.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, UsersService) {
              
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.home', ['app.services.home'])
    .directive('homeDirective', homeDirective); 

})();