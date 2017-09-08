!(function(){'use strict';
	angular.module('frame') 
	.directive('timing', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/flow/timing/timing.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', function ($scope) {
				
			}]
		}
	});  
})()
