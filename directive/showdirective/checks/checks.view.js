!(function(){'use strict';
	angular.module('frame') 
	.directive('showChecks', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/checks/checks.template.html',
			scope: {
				checksdata : "="
			},
			controller:['$scope', function ($scope) {
				$scope.type = {errtext : '错误提示语'};
				$scope.checkstate=false;
				$scope.checkdata = ""; 
				
				// type:'show-checks',
				// text:'多选',
				// required:'', 
				// optionobj:{},
				// optionarr:['选项一','选项二','选项三'],
				// option: '选项一,选项二,选项三'
				
				if ($scope.checksdata.optionarr != []){
					$scope.checklist = $scope.checksdata;
				} else {
					//在这里利用端口获取数据
				}
				$scope.checkDataList = [];
				for (var i=0; i<$scope.checklist.optionarr.length; i++)
				{
					$scope.checkDataList.push(0);
				}
				$scope.check=function(index){
					if ( $scope.checkDataList[index] == 0){
						$scope.checkDataList[index] = 1;
					} else {
						$scope.checkDataList[index] = 0;
					}
					// console.log('checklist',$scope.checkDataList);
				}
			}]
		}
	});  
})()
