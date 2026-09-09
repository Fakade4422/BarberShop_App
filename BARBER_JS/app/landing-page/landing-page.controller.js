(function () {
    'use strict';
    angular.module('barbershopApp.landing')
    .controller('LandingPageController', LandingPageController);

    function LandingPageController() {
        var vm = this;
        vm.title = 'CLIPPERS BARBERSHOP';
    }

})();