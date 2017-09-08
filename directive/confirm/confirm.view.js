!(function(){'use strict';
	angular.module('frame') 
	.directive('confirm', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/confirm/confirm.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', function ($scope) {
				$scope.data={
					textdata : "是否确认",
					title:"确认"
				};
				if ($scope.resolve.items){
					$scope.data = $scope.resolve.items;
				} 
				
				$scope.ok = function () {
					$scope.close({$value: 'sure'});
				};
				$scope.cancel = function () {
					$scope.dismiss({$value: 'cancel'});
				};
			}]
		}
	});  
})()
