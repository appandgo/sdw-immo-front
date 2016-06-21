(function() {
    'use strict';

    function saleDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/sale/sale.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,

            controller: function($log, saleService) {
              saleService().getData();  
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.sale', ['app.services.sale'])
    .directive('saleDirective', saleDirective); 

})();