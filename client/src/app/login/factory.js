(function(){
    'use strict'

    function loginService($http,$log,API){
        var service = {};
        service.users = [];
        //var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.authentification = function () {
            alert('page login (a dev)');
        };
        return service;
    }

angular.module('app.services.login', [])
    .factory('loginService', loginService);
})()