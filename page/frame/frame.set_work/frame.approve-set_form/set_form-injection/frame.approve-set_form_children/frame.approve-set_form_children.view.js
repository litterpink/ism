!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_form_children', {
				title: '子表单',
				url: '/approve-set_form_children',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_form/set_form-injection/frame.approve-set_form_children/frame.approve-set_form_children.template.html',
				controller: ['$scope', 'SIGN', controller ]
			});
	}]);
  
  
	function controller($scope,SIGN){
		
		
	}
	
})()