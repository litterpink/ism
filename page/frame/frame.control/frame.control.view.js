!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.control-', {
				title: '工作台',
				url: '/control',
				templateUrl: 'page/frame/frame.control/frame.control.template.html',
				controller: ['$scope', 'SIGN', management ]
			});
	}]);
  
  
	function management($scope, SIGN){
		$scope.getData =false;
		SIGN.post('ism/getControl', {})
		.then(function(json){
			$scope.myApplysResult0=json.data.myApplysResult0;
			$scope.myApplysResult1=json.data.myApplysResult1;
			$scope.myApplysResult2=json.data.myApplysResult2;
			$scope.myUnReadMessageResult=json.data.myUnReadMessageResult;
			$scope.myApproves0=json.data.myApproves0;
			$scope.myApproves1=json.data.myApproves1;
			$scope.myRecived = json.data.myRecived;
			$scope.getData =true;
		})
		.catch(function(e){
			console.log("get getControl err", e);
		});
		
		
	}
	
})()