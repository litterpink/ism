!(function(){'use strict';
	angular.module('frame') 
	.directive('showInput', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/input/input.template.html',
			scope: {
				inpoutdata : "="
			},
			controller:['$scope', function ($scope) {	
				// type:'show-input',
				// text:'单行文本',
				// required:'',
				// minLength:'',
				// maxLength:'',
				// placeHolder:'提示文字',
				// errorText:'错误提示文字'			
				$scope.type = $scope.inpoutdata;
			}]
		}
	});  
})()
