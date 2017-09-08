!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.copy-copy', {
				title: '复制设置',
				url: '/copy-copy',
				templateUrl: 'page/frame/frame.copy/frame.copy-copy/frame.copy-copy.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()