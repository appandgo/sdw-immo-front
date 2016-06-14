(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.sale',{
            url: '/sale',
            views: {
                '@': {
                    template: '<sale-directive></home-directive>',
                }
            }
        });
    }

    angular.module('app.routes.sale', ['app.directives.sale'])
    .config(config);
})();