!(function(){'use strict';
	angular.module('frame') 
	.directive('showCheck', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/check/check.template.html',
			scope: {
				nodeonedatas : "="
			},
			controller:['$scope', function ($scope) {
				if ($scope.checkdatas.optionarr != []){
					$scope.checklist = $scope.checkdatas;
				} else {
					//在这里利用端口获取数据
				}
				$scope.type = {errtext : '错误提示语'};
				$scope.checkstate=false;
				$scope.checkdata = ""; 
				// $scope.checklist = ['选项1','选项2','选项3','选项4'];
				$scope.check=function(item){
					$scope.checkdata = item; 
					// if ( $scope.checkdata == ''){$scope.checkstate = true;} else {$scope.checkstate=true;}
					// $scope.type = {errtext : '错误提示语'};
				}
			}]
		}
	});  
})()
