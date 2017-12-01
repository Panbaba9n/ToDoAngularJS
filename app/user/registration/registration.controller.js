;(function() {

    angular
    .module('registration')
    .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', 'DataInfotable'];


    function RegistrationController($scope, DataInfotable) {

        // 'controller as' syntax
        var vm = this;

        console.log( DataInfotable.variable() );

    };

})();