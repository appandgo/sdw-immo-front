(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.detailsSale',{
            url: '/sale/:id',
            views: {
                '@': {
                    template: '<details-sale-directive></details-sale-directive>',
                }
            }
        });
    }

    angular.module('app.routes.sale-details', ['app.directives.sale-details'])
    .config(config);
})();