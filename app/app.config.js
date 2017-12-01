;(function() {

    angular
    .module('todo')
    .config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			template: '<h2>You are at home</h2>',
			controller: 'TodoController',
			controllerAs: 'home',
			isAuthentificaded: true
		})
		.state('public', {
			url: '/public',
			templateUrl: 'app/pages/public.page.html',
			controller: 'TodoController',
			controllerAs: 'home',
			isAuthentificaded: true
		});

	};
    
})();