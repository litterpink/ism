!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_approve', {
				title: '我的审批',
				url: '/approve-my_approve',
				templateUrl: 'page/frame/frame.approve/frame.approve-my_approve/frame.approve-my_approve.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()