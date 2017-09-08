!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-relation_form', {
				title: '表单关联',
				url: '/approve-relation_form',
				templateUrl: 'page/frame/frame.set_work/frame.approve-relation_form/frame.approve-relation_form.template.html',
				controller: ['$scope', management ]
			});
	}]);
  
  
	function management($scope){
		
		
	}
	
})()