(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.users',{
            url: '/details-annonce',
            views: {
                '@': {
                    template: '<list-users></list-users>',
                }
            }
        });
    }

    angular.module('app.routes.users', ['app.directives.users'])
    .config(config);
})();