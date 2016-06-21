(function(){
    'use strict'

    function rentService($http,$log,API){
        var service = {};
        service.rents = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        getData = function () {
            services = $http.get(API+'/rents', config).then(successCallback, errorCallback);
            console.log(services);
        };
        return services;
    }

angular.module('app.services.rent', [])
    .factory('rentService', rentService);
})()