(function(){
    'use strict'

    function rentService($http,$log,API){
        var service = {};
        service.users = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getData = function () {
            alert('salut');
        };
        return service;
    }

angular.module('app.services.rent', [])
    .factory('rentService', rentService);
})()