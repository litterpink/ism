!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.timing-task-list-detail', {
				title: '定时详情',
				url: '/timing-task-list-detail',
				templateUrl: 'page/frame/frame.timing/frame.timing-task-list/task-list-injection/frame.timing-task-detail.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()