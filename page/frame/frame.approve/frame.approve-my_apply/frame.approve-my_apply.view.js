!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-my_apply', {
				title: '我的申请',
				url: '/approve-my_apply',
				templateUrl: 'page/frame/frame.approve/frame.approve-my_apply/frame.approve-my_apply.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()