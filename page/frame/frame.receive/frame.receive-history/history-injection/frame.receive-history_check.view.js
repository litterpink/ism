!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.receive-history_check', {
				title: '我的接收历史check',
				url: '/receive-history_check',
				templateUrl: 'page/frame/frame.receive/frame.receive-history/history-injection/frame.receive-history_check.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()