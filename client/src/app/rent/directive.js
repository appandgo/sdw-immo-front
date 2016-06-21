(function() {
    'use strict';

    function rentDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/rent/rent.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, rentService) {
                rentService.getData();
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.rent', ['app.services.rent'])
    .directive('rentDirective', rentDirective); 

})();