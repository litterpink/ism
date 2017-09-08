!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_approve_history_check', {
				title: 'my_approve_history_check',
				url: '/approve-my_approve_history_check',
				templateUrl: 'page/frame/frame.approve/frame.approve-my_approve/my_approv-injection/frame.approve-my_approve_history/my_apply_history-injection/frame.approve-my_apply_history_cheeck.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()