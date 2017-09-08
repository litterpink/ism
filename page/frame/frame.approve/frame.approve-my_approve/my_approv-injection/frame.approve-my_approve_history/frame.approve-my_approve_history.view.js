!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_approve_history', {
				title: 'my_approve_history',
				url: '/approve-my_approve_history',
				templateUrl: 'page/frame/frame.approve/frame.approve-my_approve/my_approv-injection/frame.approve-my_approve_history/frame.approve-my_approve_history.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()