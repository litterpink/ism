!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-user', {
				title: '员工管理',
				url: '/cset-user',
				templateUrl: 'page/frame/frame.cset-user/frame.cset-user.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()