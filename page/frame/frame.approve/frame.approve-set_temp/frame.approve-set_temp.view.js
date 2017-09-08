!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_temp', {
				title: 'set_temp',
				url: '/approve-set_temp',
				templateUrl: 'page/frame/frame.approve/frame.approve-set_temp/frame.approve-set_temp.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()