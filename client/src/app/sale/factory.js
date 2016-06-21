(function() {
    'use strict';

    function saleService($http,$log,API){

        var service = {};
        service.sale = [];
        
        service.getData = function() {

            return $http.get(API.URL+'sales')
            .success(function(data) {
                console.log(data);
                service.sale = data;
            })
            .error(function() {
                console.log('erreur');
            });
        };

        service.getOneData = function(ID) {
            return $http.get(API.URL+'sales/'+ID)
            .success(function(data) {
                console.log(data);
                service.sale = data;
            })
            .error(function() {
                console.log('erreur');
            }); 
        }
        return service;
    }

angular.module('app.services.sale', [])
    .factory('saleService', saleService);
})()

