!(function(){'use strict';
	angular.module('frame') 
	.directive('addLable', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/addlable/addLable.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope','$uibModal', function ($scope,$uibModal) {
				$scope.items=[];
				$scope.optionArr=[{name:'是',vlue:'1'},{name:'否',vlue:'0'}];
				if ($scope.resolve.items){
					$scope.data = $scope.resolve.items;
				} else {	
					$scope.data = {officer : '', isLand : '1', officerMemo : ''};
				}
				$scope.save = function () {
					if ($scope.myForm.$valid){
						// 保存职务
						
						$scope.close({$value: $scope.data});
					}
				};
				$scope.cancel = function () {
					$scope.dismiss({$value: 'cancel'});
				};
				//添加部门
				$scope.addDepartment = function(event){
					var appendTo = angular.element( event.currentTarget).parent();
					$uibModal.open({
						backdrop: 'static',
						animation: true,
						//appendTo: appendTo,
						component: 'addDepartment',
						resolve: {
							items: function () {
							}
						}
					})
					.result.then(
						function(value){
							var dataSuccess={
								title : '添加结果',
								textdata : '添加成功'
							};
							var dataFail={
								title : '添加结果',
								textdata : '添加失败'
							};
							SIGN.post("/ism/saveBaseOfficer",{ officer : value.officer, isLand : value.isLand, officerMemo : value.officerMemo})
							.then(function(json){
								popup.SelfAlert(dataSuccess, appendTo);
								getDataFunction();
							})
							.catch(function(e){
								popup.SelfAlert(dataFail, appendTo);
							});
						},
						function(value){
							console.log('cancel:',value);
						}
						);
				}
			}]
		}
	});
	
	
	
	
	
})()
