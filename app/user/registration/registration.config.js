;(function() {

    angular
    .module('registration')
    .config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {


		$stateProvider
		.state('registration', {
			url: '/registration',
			template: '<div>registration</div>',
			controller: 'RegistrationController',
			controllerAs: 'registration',
			isAuthentificaded: true
		});

	};
    
})();