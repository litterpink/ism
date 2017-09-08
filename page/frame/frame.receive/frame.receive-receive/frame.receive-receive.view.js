!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.receive-receive', {
				title: '我的接受',
				url: '/receive-receive',
				templateUrl: 'page/frame/frame.receive/frame.receive-receive/frame.receive-receive.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()