!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.receive-history', {
				title: '我的接收历史',
				url: '/receive-history',
				templateUrl: 'page/frame/frame.receive/frame.receive-history/frame.receive-history.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()