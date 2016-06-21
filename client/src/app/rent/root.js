(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.rent',{
            url: '/rent',
            views: {
                '@': {
                    template: '<rent-directive></rent-directive>',
                }
            }
        });
    }

    angular.module('app.routes.rent', ['app.directives.rent'])
    .config(config);
})();