!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.copy-form-list', {
				title: '复制列表',
				url: '/copy-form-list',
				templateUrl: 'page/frame/frame.copy/frame.copy-form-list/frame.copy-form-list.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()