!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-add', {
				title: '新建申请',
				url: '/approve-add',
				templateUrl: 'page/frame/frame.approve/frame.approve-add/frame.approve-add.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()