(function (){
    'use strict'; //strict mode catches typos-that-create-globals, allows us to fail fast and obviously, instead of quietly corrupting shared state

    angular.module('barbershopApp', [
        'ui.router',
        'barbershopApp.landing',
        'barbershopApp.shared',
]);
})();