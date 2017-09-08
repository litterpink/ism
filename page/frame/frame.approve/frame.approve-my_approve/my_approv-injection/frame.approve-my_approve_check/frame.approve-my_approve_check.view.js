!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_approve_check', {
				title: 'approve-my_approve_check',
				url: '/approve-my_approve_check',
				templateUrl: 'page/frame/frame.approv/frame.approve-my_approve/my_approv-injection/frame.approve-my_approve_check/frame.approve-my_approve_check.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()