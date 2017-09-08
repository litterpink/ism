!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_work_add', {
				title: '流程添加',
				url: '/approve-set_work_add',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_work/set_work-injection/frame.approve-set_work_add/frame.approve-set_work_add.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()