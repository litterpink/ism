!(function(){'use strict';
	angular.module('frame') 
	.directive('addDepartment', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/addDepartment/addDepartment.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', function ($scope) {
				$scope.items=[];
				$scope.Department=[];
				var upadta= {
					departmentId: "",
					name:"",
					lastDepartment:"",
					departmentHeader: '',
					departmentDuty: '',
					memberNum: '',
					user:[],
					offer:[],
					children:[]
				};
				$scope.Department.push($scope.resolve.items);
				console.log($scope.Department)
				/*$scope.optionArr=[{name:'是',vlue:'1'},{name:'否',vlue:'0'}];
				if ($scope.resolve.items){
					$scope.data = $scope.resolve.items;
				} else {	
					$scope.data = {officer : '', isLand : '1', officerMemo : ''};
				}*/
				$scope.save = function () {
					if ($scope.myForm.$valid){
						// 保存部门
						upadta.departmentId = 3;
						upadta.name = $scope.name;
						upadta.lastDepartment = $scope.lastDepartment.name;
						upadta.departmentDuty=$scope.departmentDuty;
						upadta.memberNum=$scope.memberNum;
						upadta.departmentHeader = $scope.departmentHeader;
						upadta.user=[];
						upadta.offer=[];
						upadta.children=[];
						$scope.close({$value: upadta});
					}
				};
				$scope.cancel = function () {
					$scope.dismiss({$value: 'cancel'});
				};
			}]
		}
	});  
})()
