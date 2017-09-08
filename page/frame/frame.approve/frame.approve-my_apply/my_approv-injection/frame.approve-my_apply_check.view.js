!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_apply_check', {
				title: 'my_apply_check',
				url: '/approve-my_apply_check',
				templateUrl: 'page/frame/frame.approve/frame.approve-my_apply_check/my_approv-injection/frame.approve-my_apply_check.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()