(function() {
    'use strict';
 
    function rentService($http,$log,API){

        var service = {};
        service.rent = [];
        
        service.getData = function() {

            return $http.get(API.URL+'rents')
            .success(function(data) {
                console.log(data);
                service.rent = data;
            })
            .error(function() {
                console.log('erreur');
            });
        };

        service.getOneData = function(ID) {
            return $http.get(API.URL+'rents/'+ID)
            .success(function(data) {
                //console.log(data);
                service.rent = data;
            })
            .error(function() {
                console.log('erreur');
            }); 
        }
        return service;
    }

angular.module('app.services.rent', [])
    .factory('rentService', rentService);
})()

