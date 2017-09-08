!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_work_edit', {
				title: '流程编辑',
				url: '/approve-set_work_edit',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_work/set_work-injection/frame.approve-set_work_edit/frame.approve-set_work_edit.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()