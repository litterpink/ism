!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-officer_edit', {
				title: '部门编辑',
				url: '/frame.cset-officer_edit',
				templateUrl: 'page/frame/frame.cset/frame.cset-officer/officer-injection/frame.cset-officer_edit.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()