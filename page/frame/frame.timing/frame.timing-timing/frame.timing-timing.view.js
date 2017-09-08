!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.timing-timing', {
				title: '定时设置',
				url: '/timing-timing',
				templateUrl: 'page/frame/frame.timing/frame.timing-timing/frame.timing-timing.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()