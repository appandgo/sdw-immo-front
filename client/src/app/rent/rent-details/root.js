(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.detailsRent',{
            url: '/rent/:id',
            views: {
                '@': {
                    template: '<details-rent-directive></details-rent-directive>',
                }
            }
        });
    }

    angular.module('app.routes.rent-details', ['app.directives.rent-details'])
    .config(config);
})();