;(function() {

    angular
    .module('todo')
    .run(run);

	run.$inject = ['$rootScope', '$state'];

	function run($rootScope, $state) {

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			if (toState.isAuthentificaded) {
				/*nothing to do*/
			} else /*if (toState.name !== 'home' && !AuthTest.isAuthentificaded())*/ {
				event.preventDefault();
				$state.go('home');
			}
		});

	};
    
})();