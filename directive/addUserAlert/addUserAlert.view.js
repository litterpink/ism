!(function(){'use strict';
	angular.module('frame') 
	.directive('addUserAlert', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/addUserAlert/addUserAlert.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', 'popup', function ($scope, popup) {
				 // var $ctrl = this;
				var upadta= {
					loginName: '',
					userName: '',
					password: '',
					shipName: '',
					companyRole: '',
					sysRole: '',
					departmentName:[],
					offerName:[]
				};
				if ($scope.resolve.items){
					$scope.data = $scope.resolve.items;
				} else {	
					$scope.data = {
						publicTitle: '新增员工',
						publicBtnl : '提交',
						publicBtnr : '取消',
						isAddShow  : true,	
						isShipList : false,
						officerData: [],
						shipData   : []
					};
				}
				$scope.userName = '';
				$scope.loginName = '';
				$scope.password = '';
				$scope.selectShip = '';
				$scope.selectDepartment='';
				$scope.selectOfficer='';
				$scope.departmentName=[];
				$scope.offerName=[];
				$scope.companyRole= '';
				$scope.sysRole= '';
				$scope.addOfficers = '';
				 //船舶选择
				$scope.shiplist=false;
				//员工信息
				//
				/*$scope.getShipList=function(){
					$scope.shiplist = !$scope.shiplist;
				}*/
				$scope.addListShipt=function(index){
					$scope.shipNames = $scope.data.shipData[index].shipName;
					upadta.shipData = $scope.data.shipData[index];
					$scope.shiplist=false;
				}
				$scope.addOfficer=function(event){
					// $scope.animationsEnabled=false; 
					var appendTo = angular.element( event.currentTarget).parent().parent();
					popup.officerList( $scope.data.officerData, appendTo)
					.result.then(
						function(value){
							
							// $scope.animationsEnabled=true; 
							if ($scope.addOfficers.indexOf(value.officer) == -1){
								if ($scope.addOfficers == "" ){
									$scope.addOfficers = value.officer;
								} else {
									$scope.addOfficers = $scope.addOfficers + ',' + value.officer; 
								}
								upadta.addOfficers.push(value);
							}	
						},
						function(value){
							// $scope.animationsEnabled=true; 
						}
					);
				}
				$scope.delsprbd=function(){
					$scope.addOfficers =$scope.addOfficers .substr(0,$scope.addOfficers.lastIndexOf(','));
					upadta.addOfficers.splice(-1,1);
				}
				$scope.changeDepartment = function (selected1) {
					$scope.officerData = selected1.offerName;
				};
				$scope.save = function () {
					if ($scope.myForm.$valid){
						// 保存用户
						upadta.loginName = $scope.loginName;
						upadta.userName = $scope.userName;
						upadta.password = $scope.password;
						upadta.departmentName.push($scope.selectDepartment.departmentName);
						upadta.offerName.push($scope.selectOfficer);
						upadta.companyRole = $scope.companyRole;
						upadta.sysRole = $scope.sysRole;
						upadta.shipName=$scope.selectShip.shipName;
						// upadta.addOfficers = $scope.addOfficers;

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
