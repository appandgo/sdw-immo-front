(function(){
    'use strict';

    function saleService($http,$log,API){
        var service = {};
        service.sales = [];
            
        getData = function () {
            services = $http.get(API+'/sales', config).then(successCallback, errorCallback);
            console.log(services);
        };
        return services;
    }

angular.module('app.services.sale', [])
    .factory('saleService', saleService);
})()