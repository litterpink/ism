!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_column', {
				title: 'set_column',
				url: '/approve-set_column',
				templateUrl: 'page/frame/frame.approve/frame.approve-set_column/frame.approve-set_column.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()