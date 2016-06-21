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
                saleService().getData();  
                rentService().getData();  
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('app.directives.home', ['app.services.home', 'app.services.rent', 'app.services.sale'])
    .directive('homeDirective', homeDirective); 

angular.module('selectFilters', ['filters']);
angular.module('filters', [])
    .filter('selectFromSelected', function () {
        return function (incItems, value) {
            var out = [{}];
            
            if(value){
                for(x=0; x<incItems.length; x++){
                    if(incItems[x].Value == value)
                        out.push(incItems[x]);
                }
                return out;
            }
            else if(!value){
                return incItems
            }
        };
    });

    function ItemCtrl($scope, $filter){
        $scope.Items = [
            {Name: 'rents', Value: 1,},
            {Name: 'sales', Value: 1},
        ];  
    }
})();