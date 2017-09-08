!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.timing-task-list', {
				title: '定时列表',
				url: '/timing-task-list',
				templateUrl: 'page/frame/frame.timing/frame.timing-task-list/frame.timing-task-list.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()