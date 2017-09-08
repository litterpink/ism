!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-edit_temp', {
				title: '申请编辑',
				url: '/approve-edit_temp',
				templateUrl: 'page/frame/frame.approve/frame.approve-edit_temp/frame.approve-edit_temp.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()