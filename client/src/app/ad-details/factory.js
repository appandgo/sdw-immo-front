(function(){
    'use strict'

    function DetailsService($http,$log,API){
        var service = {};
        service.details = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getDetails = function () {
            $log.info('Get all the details');
            return $http.get(API.URL+'details',{
                params:{
                    //api_key: key
                },
            })
            .success(function(data) {
                $log.info('Get all the details', data);
                service.details = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })

        };
        return service;
    }

angular.module('app.services.details', [])
    .factory('DetailsService', DetailsService);
})()