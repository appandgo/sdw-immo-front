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
                var vm = this;
                saleService.getData().then(function(data) {
                    console.log(data.data);
                    vm.sales = data.data;
                });  
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.sale', ['app.services.sale'])
    .directive('saleDirective', saleDirective); 

})();