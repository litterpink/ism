!(function(){'use strict';
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-officer', {
				title: '职务管理',
				url: '/cset-officer',
				templateUrl: 'page/frame/frame.cset/frame.cset-officer/frame.cset-officer.template.html',
				controller: ['$scope', 'SIGN', '$uibModal', 'popup', controller ]
			});
	}]);
  
  
	function controller($scope, SIGN ,$uibModal,popup){
		$scope.getData =false;
		$scope.listDataUse=[];
		
		 $scope.confirmdata={
			 title : '删除结果',
			 textdata : '删除成功'
		 };
				
		$scope.listDataUse=[
			{
			seq:1,
			officer:"总经理",
			department : '总经办',
			companyRole : '普通职员',
			isLand:"否",
			officerId:11
		},{
			seq:2,
			officer:"总经理",
			department : '总经办',
			companyRole : '普通职员',
			isLand:"否",
			officerId:12
		},{
			seq:3,
			officer:"总经理",
			department : '总经办',
			companyRole : '普通职员',
			isLand:"否",
			officerId:13
		},{
			seq:4,
			officer:"总经理",
			department : '总经办',
			companyRole : '普通职员',
			isLand:"否",
			officerId:14
		}];
		$scope.getData =true;

		/*var getDataFunction=function(){
			$scope.getData =false;
			SIGN.post('ism/ckBaseOfficer.json', {})
			.then(function(json){
				$scope.listData=json.data;
				 $scope.bigTotalItems=$scope.listData.length;
				 for (var i=0; i<10; i++){
					 $scope.listDataUse.push( $scope.listData[i] );
				 }
				$scope.getData =true;
			})
			.catch(function(e){
				console.log("get companyData err", e);
			});
		};
		getDataFunction();*/
		
		$scope.addManagement = function(event){
			var appendTo = angular.element( event.currentTarget).parent();
			$uibModal.open({
				backdrop: 'static',
				animation: true,
				appendTo: appendTo,
				component: 'addLable',
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
		// 删除职务
		$scope.del=function(officerId,event){
			var data={
				title : '确认删除',
				textdata : '确认删除删除此职务?'
			};
			var dataSuccess={
				title : '删除结果',
				textdata : '删除成功'
			};
			var dataFail={
				title : '删除结果',
				textdata : '删除失败'
			};
			var appendTo = angular.element( event.currentTarget).parent();
			popup.SelfConfirm(data, appendTo)
			.result.then(
				function(value){
					SIGN.post("/ism/delBaseOfficer",{officerId:officerId})
					.then(function(json){
						popup.SelfAlert(dataSuccess, appendTo);
						getDataFunction();
					})
					.catch(function(e){
						popup.SelfAlert(dataFail, appendTo);
					});
				},
				function(value){
				}
			);
		}
		// 职务编辑
		$scope.eidtManagement = function(index){
			var appendTo = angular.element( event.currentTarget).parent();
			$uibModal.open({
				backdrop: 'static',
				animation: true,
				appendTo: appendTo,
				component: 'addLable',
				resolve: {
					items: function () {
						return $scope.listDataUse[index];
					}
				}
			})
			.result.then(
				function(value){
					var dataSuccess={
						title : '修改结果',
						textdata : '修改成功'
					};
					var dataFail={
						title : '修改结果',
						textdata : '修改失败'
					};
					SIGN.post("/ism/saveBaseOfficer",{ officerId : $scope.listDataUse[index].officerId,  officer : $scope.listDataUse[index].officer, isLand : $scope.listDataUse[index].isLand, officerMemo : $scope.listDataUse[index].officerMemo} )
					.then(function(json){
						popup.SelfAlert(dataSuccess, appendTo);
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
		

		  $scope.pageChanged = function() {
			$scope.listDataUse=[];
			var n=($scope.bigCurrentPage-1)*10;
			for (var i=0; i<10; i++){
				if (n+i == $scope.listData.length) {break;}
				 $scope.listDataUse.push( $scope.listData[n+i] );
			 }
		  };

		  $scope.maxSize = 5;
		  $scope.bigTotalItems = 100;
		  $scope.bigCurrentPage = 1;
				
	}

	
	
})()