;(function() {

    angular
    .module('login')
    .config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {


		$stateProvider
		.state('login', {
			url: '/login',
			template: '<div>login</div>',
			controller: 'LoginController',
			controllerAs: 'login',
			isAuthentificaded: true
		});

	};
    
})();