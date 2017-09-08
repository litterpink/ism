!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.copy-form-list-detail', {
				title: '复制详情',
				url: '/frame.copy-form-list-detail',
				templateUrl: 'page/frame/frame.copy/frame.copy-form-list/form-list-injection/frame.copy-form-detail.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()