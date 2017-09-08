!(function(){'use strict';
	angular.module('frame') 
	.directive('officerList', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/officerList/officerList.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', function ($scope) {
				if ($scope.resolve.items){
					$scope.data = $scope.resolve.items;
				} else {	
					$scope.data = [];
				}
				$scope.checkOfficer = function (index) {
					$scope.close({$value: $scope.data[index]});
				};
				$scope.cancel = function () {
					$scope.dismiss({$value: 'cancel'});
				};
			}]
		}
	});  
})()
