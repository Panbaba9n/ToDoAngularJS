;(function() {

    angular
    .module('login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'DataInfotable'];


    function LoginController($scope, DataInfotable) {

        // 'controller as' syntax
        var vm = this;

        console.log( DataInfotable.variable() );

    };

})();