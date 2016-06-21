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

            controller: function($log, rentService, $stateParams) {
              var vm = this;
              vm.rent={};
                rentService.getOneData($stateParams.id)
                .then(function(data) {
                    console.log(data);
                    vm.rent = data.data;
                });
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.rent-details', ['app.services.rent'])
    .directive('detailsRentDirective', detailsRentDirective); 

})();