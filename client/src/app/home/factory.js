(function(){
    'use strict'

    function homeService($http,$log,API){
        var service = {};
        service.users = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getData = function () {
            alert('salut');
        };
        return service;
    }

angular.module('app.services.home', [])
    .factory('homeService', homeService);
})()