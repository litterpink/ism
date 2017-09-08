!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-depart_jq', {
				title: '员工管理',
				url: '/cset-depart_jq',
				templateUrl: 'page/frame/frame.cset/frame.cset-depart/depart-injection/frame.cset-depart_jq.view.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()