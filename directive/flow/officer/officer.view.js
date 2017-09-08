!(function(){'use strict';
	angular.module('frame') 
	.directive('officer', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/flow/officer/officer.template.html',
			scope: {
				datas: "=",
				userData: '='
			},
			controller:['$scope', function ($scope) {
				$scope.title = $scope.userData[0].data[0].name;
				$scope.list = $scope.userData[0].data[0].list;
				$scope.startdate = $scope.userData[0].data[0].startdate;
				$scope.changeshow=function(n){
					$scope.list[n] = !$scope.list[n];
				}

			}]
		}
	});
})()
