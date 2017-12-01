;(function() {

    angular
    .module('infotable')
    .controller('InfotableController', infotableController);

    infotableController.$inject = ['$scope', 'DataInfotable'];


    function infotableController($scope, DataInfotable) {

        // 'controller as' syntax
        var vm = this;

        console.log( DataInfotable.variable() );

    };

})();