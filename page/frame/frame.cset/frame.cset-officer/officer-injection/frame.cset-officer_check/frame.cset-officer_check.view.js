!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-officer_check', {
				title: '部门选择',
				url: '/frame.cset-officer_check',
				templateUrl: 'page/frame/frame.cset/frame.cset-officer/officer-injection/frame.cset-officer_check.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()