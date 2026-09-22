(function () {
    'use strict'; //strict mode catches typos-that-create-globals, allows us to fail fast and obviously, instead of quietly corrupting shared state

    angular
        .module('barbershopApp')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {  //-- Route configuration code here --//

        $urlRouterProvider.otherwise('/');              //-- Default route if no match is found --//

        $stateProvider.state('landing', 
            {
                url: '/',
                templateUrl: 'landing-page/landing-page.html',
                controller: 'LandingPageController',
                controllerAs: 'vm'
            }
        );
    }

})();