(function() {
    'use strict';

    function detailsSaleDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/sale/sale-details/sale-details.html',
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

angular.module('app.directives.sale-details', ['app.services.sale'])
    .directive('detailsSaleDirective', detailsSaleDirective); 

})();