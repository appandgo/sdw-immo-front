(function() {
    'use strict';

    function detailsDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/ad-details/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, DetailsService) {
                var vm=this;
                DetailsService.getDetails()
                    .then(function(details) {
                        console.log('details in directives :',details.data);
                        vm.details = details.data;

                    }, function(error){
                        $log.error('Error details', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.details', ['app.services.details'])
    .directive('details', detailsDirective); 

})();