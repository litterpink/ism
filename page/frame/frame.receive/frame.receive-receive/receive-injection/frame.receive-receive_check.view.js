!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.receive-receive_check', {
				title: '台账',
				url: '/receive-receive_check',
				templateUrl: 'page/frame/frame.receive/frame.receive-receive/receive-injection/frame.receive-receive_check.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()