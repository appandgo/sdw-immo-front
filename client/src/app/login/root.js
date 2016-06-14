(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.login',{
            url: '/login',
            views: {
                '@': {
                    template: '<login-directive></login-directive>',
                }
            }
        });
    }

    angular.module('app.routes.login', ['app.directives.login'])
    .config(config);
})();