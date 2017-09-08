!(function(){'use strict';
	angular.module('frame') 
	.directive('showSelect', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/select/select.template.html',
			scope: {
				selectdatas : "="
			},
			controller:['$scope', function ($scope) {
				
				if ($scope.selectdatas.optionarr != []){
					$scope.optionlist = $scope.selectdatas;
				} else {
					//在这里利用端口获取数据
				}
				
				
				// $scope.optionlist=[
					// {id : 0, text : '选项1'},
					// {id : 1, text : '选项2'},
					// {id : 2, text : '选项3'}
				// ];
				$scope.optionstate=false;
				$scope.optionshow=function(){
					$scope.optionstate = !$scope.optionstate;
				}
				$scope.addoption=function(index){
					$scope.selecttext = $scope.optionlist.optionarr[index];
					$scope.select = $scope.optionlist.optionarr[index];
					$scope.optionstate=false;
				}
			}]
		}
	});  
})()
