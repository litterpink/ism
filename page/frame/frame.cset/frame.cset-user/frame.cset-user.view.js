!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-user', {
				title: '员工管理',
				url: '/cset-user',
				templateUrl: 'page/frame/frame.cset/frame.cset-user/frame.cset-user.template.html',
				controller: ['$scope', 'SIGN','$q', 'ConfigData', '$uibModal', 'popup', '$timeout','$filter', controller ]
			});
		}]);

	function controller($scope, SIGN, $q, ConfigData, $uibModal, popup, $timeout,$filter){
		//树形结构
		$scope.getData=true;
		$scope.remindtext="";
		$scope.remindClear=function(){
			$scope.remindtext="";
		}
		$scope.init=function(){  
			$scope.getTreeList();  
		};
		$scope.getTreeList=function(){
			$scope.angularTreeList=[];  
			//查询树  
			$scope.orgTypeList=[];
			//创建根节点  
			var root={};  
			root.name=ConfigData.userData.companyName ? ConfigData.userData.companyName : '公司名称'; 
			//$scope.getTreeList();
			//root.children=$scope.angularTreeData;
			root.children=$scope.orgTypeList;
			$scope.angularTreeList.push(root);
			//$scope.treeOptions.data=$scope.angularTreeList;
		}
  		$scope.init();
		//
		// $scope.getTreeList=function () {
		// 	SIGN.post("ism/TreeList", {})
		// 	.then(function(json){
		// 		$scope.dataList=json.data;
		// 		$scope.angularTreeData = $scope.dataList.angularTreeList;
		// 		$scope.dataDepartment = $scope.dataList.department;
		// 		$scope.listData = $scope.dataList.listData;
		// 	})
		// 	.catch(function(e){
		// 		console.log("get TreeList err",e);
		// 	});
		// }

		//获取部门员工信息
		// $scope.showContent=function (index) {
		// 	SIGN.post("ism/deparmentList", {departmentId:index,})
		// 	.then(function(json){
		// 		$scope.dataList=json.data;
		// 		$scope.dataDepartment = $scope.dataList.department;
		// 		$scope.listData = $scope.dataList.listData;
		// 	})
		// 	.catch(function(e){
		// 		console.log("get deparmentList err",e);
		// 	});
		// }
		
		// $scope.showContent=function (departmentID) {
		// 	SIGN.post("ism/deparmentList", {departmentId:departmentID})
		// 	.then(function(json){
		// 		$scope.dataList=json.data;
		// 		$scope.dataDepartment = $scope.dataList.department;
		// 		$scope.listData = $scope.dataList.listData;
		// 	})
		// 	.catch(function(e){
		// 		console.log("get deparmentList err",e);
		// 	});
		// }

		// 部门编辑
		$scope.editDepartment = function(index){
		var appendTo = angular.element( event.currentTarget).parent();
		$uibModal.open({
			backdrop: 'static',
			animation: true,
			appendTo: appendTo,
			component: 'addDepartment',
			resolve: {
				items: function () {
					return index;
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
				// SIGN.post("/ism/saveBaseOfficer",{ officerId : $scope.listDataUse[index].officerId,  officer : $scope.listDataUse[index].officer, isLand : $scope.listDataUse[index].isLand, officerMemo : $scope.listDataUse[index].officerMemo} )
				// .then(function(json){
				// 	popup.SelfAlert(dataSuccess, appendTo);
				// })
				// .catch(function(e){
				// 	popup.SelfAlert(dataFail, appendTo);
				// });
				
			},
			function(value){
				console.log('cancel:',value);
			}
			);
	}
		// 删除部门
		$scope.del=function(officerId, event){
			var data={
				title : '确认删除',
				textdata : '确认删除此部门?'
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
					console.log(value);
					/*SIGN.post("ism/ism/removeFromIsm", {'officerId' : officerID})
					.then(function(json){
						if (json.code == '0'){
							popup.SelfAlert(dataSuccess, appendTo);
						} else {
							popup.SelfAlert(dataFail, appendTo);
						}
					})
					.catch(function(e){
						popup.SelfAlert(dataFail, appendTo);
					});*/
				},
				function(value){

				}
				);
		}

		$scope.save=function(){
			$scope.remindtext = '保存失败';
			$timeout($scope.cancelBtnIformation,1000);
		}
		$scope.cancelBtnIformation=function(){
			$scope.remindtext = '';
		}
		// 重置密码
		$scope.resetPwd=function(userID, event){
			var data={
				title : '确认操作',
				textdata : '确认重置此用户密码'
			};
			var dataSuccess={
				title : '修改结果',
				textdata : '修改成功'
			};
			var dataFail={
				title : '修改结果',
				textdata : '修改失败'
			};
			var appendTo = angular.element( event.currentTarget).parent();
			popup.SelfConfirm(data, appendTo)
			.result.then(
				function(value){
					SIGN.post("ism/ism/resetPwd", {"userID" : userID})
					.then(function(json){
						if (json.code == '0' ){
							popup.SelfAlert(dataSuccess, appendTo);
						} else {
							popup.SelfAlert(dataFail, appendTo);
						}
					})
					.catch(function(e){
						popup.SelfAlert(dataFail, appendTo);
					});
				},
				function(value){

				}
				);
		}
		
		// 删除用户
		$scope.remove=function(userID, event){
			var data={
				title : '确认删除',
				textdata : '确认删除此用户?'
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
					SIGN.post("ism/ism/removeFromIsm", {'userId' : userID})
					.then(function(json){
						if (json.code == '0'){
							popup.SelfAlert(dataSuccess, appendTo);
						} else {
							popup.SelfAlert(dataFail, appendTo);
						}
					})
					.catch(function(e){
						popup.SelfAlert(dataFail, appendTo);
					});
				},
				function(value){

				}
				);
		}
		
		$scope.save=function(){
			$scope.remindtext = '保存失败';
			$timeout($scope.cancelBtnIformation,1000);
		}
		$scope.cancelBtnIformation=function(){
			$scope.remindtext = '';
		}
		// 数据初始化
		$scope.remindtext = '';
		var data = {
			curPage:1,
			pageSize:10
		}
		
		$scope.maxSize = 5;
		$scope.bigTotalItems = 100;
		$scope.bigCurrentPage = 1;
		
		
		/*SIGN.post("/ism/listBaseStaff", {curPage:1, pageSize:10})
		.then(function(json){
			$scope.listData=json.data.list;
			
			$scope.bigTotalItems = json.data.pageUtil.pageCount*10;
			
		})
		.catch(function(e){
			console.log("get listBaseStaff err",e);
		});
		
		$scope.pageChanged = function() {
			// $scope.listData=[];
			SIGN.post("/ism/listBaseStaff", {curPage:$scope.bigCurrentPage, pageSize:10})
			.then(function(json){
				$scope.listData=json.data.list;
			})
		};
		
		
		SIGN.post("ism/ckBaseOfficer", {})
		.then(function(json){
			$scope.officerData=json.data;
			$scope.addData.officerData = json.data;
		})
		.catch(function(e){
			console.log("get officerData err",e);
		});
		
		SIGN.post("ism/listShip", {})
		.then(function(json){
			$scope.shipData = json.data;
			$scope.addData.shipData = json.data;
		})
		.catch(function(e){
			console.log("get shipData err",e);
		});
		*/
		
		
		// 添加职位
		$scope.checkspr=function(index, event){
			var appendTo = angular.element( event.currentTarget).parent();
			popup.officerList( $scope.dataOffer[index], appendTo)
			.result.then(
				function(value){
				//不保存
				if ($scope.listData[index].handleStr.indexOf(value.officer) == -1){
					if ($scope.listData[index].handleStr == "" ){
						$scope.listData[index].handleStr = value.officer;
					} else {
						$scope.listData[index].handleStr = $scope.listData[index].handleStr + ',' + value.officer; 
					}
				}
				console.log("get office", value);	
			},
			function(value){

			}
			);
		}
		// 删除职位
		/*$scope.delsprbd=function(index){
			$scope.listData[index].handleStr=$scope.listData[index].handleStr.substr(0,$scope.listData[index].handleStr.lastIndexOf(','));
		}*/
		// 删除职位2
		$scope.delsprbd=function(item,i){
			var index = $scope.listData.indexOf(item);
			var index2 = $scope.listData[index].handleStr.indexOf(i);
			if (index2 > -1) {
				$scope.listData[index].handleStr.splice(index2, 1);
			}
			if(!$scope.listData[index].handleStr.length){
				$scope.listData.splice(index,1)
			}
			//console.log($scope.listData[index].handleStr)
			//$scope.listData[index].handleStr=$scope.listData[index].handleStr.substr(0,$scope.listData[index].handleStr.lastIndexOf(','));
		}

		// 删除部门
		/*$scope.delDepartment=function(index){
			$scope.listData[index].department=$scope.listData[index].department.substr(0,$scope.listData[index].department.lastIndexOf(','));
		}*/
		//船信息
		$scope.shipData=[
			{
				shipId:1,
				shipName:"东方1"
			},{
				shipId:2,
				shipName:"东方2"
			}
		];
		//部门信息
		$scope.dataDepartment=[
			{
				departmentId: 1,
				name:"公司",
				lastDepartment:"",
				departmentHeader: '老大',
				departmentDuty: '公司总部...',
				memberNum: '5',
				user:[],
				offer:[],
				shipData:[],
				children:[
					{
						lastDepartment:"公司",
						departmentHeader: '老二',
						departmentDuty: '公司分部',
						memberNum: '5',
						departmentId: 2,
						name:"部门1",
						user:[],
						offer:[],
						children:[],
						shipData:[]
					}
				]
			}
		];
		$scope.dataOffer=[
			{
				departmentName:"公司",
				handleStr:["职务1","职务2"]
			},
			{
				departmentName:"部门1",
				handleStr:["职务3","职务4"]
			}
		];
		$scope.dataUser=[
			{
				id: 1,
				userId: 1,
				loginName: 'zs',
				userName: '张三',
				password: '111',
				shipName: '东方号1',
				companyRole: '管理者',
				sysRole: '体系用户',
				departmentName:["公司"],
				handleStr:["职务1"]
			},{
				id: 2,
				userId: 2,
				loginName: 'ls',
				userName: '李四',
				password: '111',
				shipName: '东方号2',
				companyRole: '管理者',
				sysRole: '体系用户',
				departmentName:["部门1"],
				handleStr:["职务3","职务4"]
			}
		];
		$scope.init= function () {
			//用户信息
			$scope.listData=[];
			$scope.bigTotalItems=$scope.dataUser.length;
			var bigTotalItems=$scope.bigTotalItems;
			if(bigTotalItems>10){
				for (var i=0; i<10; i++){
					$scope.listData.push( $scope.dataUser[i] );
				}
			}else{
				for (var i=0; i<$scope.bigTotalItems; i++){
					$scope.listData.push( $scope.dataUser[i] );
				}
			}
		 	//$scope.listData = $scope.dataUser;
			//部门详细信息
			$scope.dataDepart = $scope.dataDepartment[0];
		 	//公司组织架构信息
		 	$scope.angularTreeList=$scope.dataDepartment;
		 };
		$scope.init();
		//展示每个部门情况
		$scope.showContent= function (item) {
			$scope.item=item;
			$scope.dataDepart=item;
			$scope.dataDepartment.user=[];
			var user=$scope.dataUser;
			for(var i in user){
				var departmentName=user[i].departmentName
				for (var j in departmentName){
					if(departmentName[j]===item.name){
						$scope.dataDepartment.user.push(user[i]);
					}
				}
			}
			$scope.listData = $scope.dataDepartment.user;
		};
		//添加部门
		$scope.addDepartment = function(item,event){
				console.log(item);
				var appendTo = angular.element( event.currentTarget).parent();
				$uibModal.open({
					backdrop: 'static',
					animation: true,
					//appendTo: appendTo,
					component: 'addDepartment',
					resolve: {
						items: function () {
							return $scope.dataDepart;
						}
					}
				})
					.result.then(
					function(value){
						if(item===undefined){
							item=$scope.dataDepartment[0];
							item.children.push(value);
						}else{
							item.children.push(value);
						}
						console.log(value);
						var officeJson={};
						officeJson.departmentName=value.name;
						officeJson.handleStr=[];
						$scope.dataOffer.push(officeJson);
						console.log("插入后的dataOffer值",$scope.dataOffer);
					},
					function(value){
						console.log('cancel:',value);
					}
				);


		}
		//添加员工
		$scope.addData={
			publicTitle: '新增员工',
			publicBtnl : '提交',
			publicBtnr : '取消',
			isAddShow  : true,
			isShipList : false,
			officerData: $scope.dataOffer,
			shipData   : $scope.shipData
		};
		$scope.addUser=function(item,event){
			var appendTo = angular.element( event.currentTarget).parent();
			$uibModal.open({
				backdrop: 'static',
				animation: true,
				// appendTo: appendTo,
				component: 'addUserAlert',
				resolve: {
					items: function () {
						return $scope.addData;
					}
				}
			})
				.result.then(
				function(value){
					console.log(item);
					console.log('提前的值:',value);
					$scope.dataUser.push(value);
					$scope.showContent(item);
					console.log('提后的值:',item);
				},
				function(value){
					console.log('cancel:',value);
				}
			);
		}

		//搜素
		$scope.search= function () {
			var arr=$scope.dataUser;
			$scope.listData=$filter("filter")(arr,$scope.searchContext);
			if(!$scope.searchContext){
				$scope.listData=$scope.allData[0].departmentUse;
			}
		}
		//分页
		$scope.pageChanged = function() {
			$scope.listDataUse=[];
			var n=($scope.bigCurrentPage-1)*10;
			for (var i=0; i<10; i++){
				if (n+i == $scope.listData.length) {break;}
				$scope.listDataUse.push( $scope.listData[n+i] );
			}
		};
		$scope.maxSize = 5;
		$scope.bigCurrentPage = 1;
	}
})()


