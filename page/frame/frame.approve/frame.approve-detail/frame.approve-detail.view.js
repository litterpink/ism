!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-detail', {
				title: '新建申请',
				url: '/approve-detail',
				templateUrl: 'page/frame/frame.approve/frame.approve-detail/frame.approve-detail.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()