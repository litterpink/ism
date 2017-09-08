!(function(){'use strict';
	angular.module('frame') 
	.directive('last', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/flow/last/last.template.html',
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
