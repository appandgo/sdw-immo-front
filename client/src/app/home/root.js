(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.home',{
            url: '/',
            views: {
                '@': {
                    template: '<home-directive></home-directive>',
                }
            }
        });
    }

    angular.module('app.routes.home', ['app.directives.home'])
    .config(config);
})();