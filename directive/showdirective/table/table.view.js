!(function(){'use strict';
	angular.module('frame') 
	.directive('showTable', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/table/table.template.html',
			scope: {
				tabledata : "="
			},
			controller:['$scope', function ($scope) {
				
				// type:'show-table',
				// rows:3,
				// cols:3	
				
				
				$scope.row = [];
				for (var i=0; i<$scope.tabledata.rows; i++){
					$scope.row.push(i);
				}
				
				$scope.roj = [];
				for (var i=0; i<$scope.tabledata.cols; i++){
					$scope.roj.push(i);
				}
				$scope.refresh = function(){
					$scope.row = [];
					for (var i=0; i<$scope.tabledata.rows; i++){
						$scope.row.push(i);
					}
					
					$scope.roj = [];
					for (var i=0; i<$scope.tabledata.cols; i++){
						$scope.roj.push(i);
					}
				}
			}]
		}
	});  
})()
