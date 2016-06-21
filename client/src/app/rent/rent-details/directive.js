(function() {
    'use strict';

    function detailsRentDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/rent/rent-details/rent-details.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, rentService, data) {
              rentService.getData();
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.rent-details', ['app.services.rent'])
    .directive('detailsRentDirective', detailsRentDirective); 

})();