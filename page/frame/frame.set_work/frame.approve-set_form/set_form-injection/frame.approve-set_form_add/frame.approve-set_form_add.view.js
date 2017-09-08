!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_form_add', {
				title: '表单添加',
				url: '/approve-set_form_add',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_form/set_form-injection/frame.approve-set_form_add/frame.approve-set_form_add.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()