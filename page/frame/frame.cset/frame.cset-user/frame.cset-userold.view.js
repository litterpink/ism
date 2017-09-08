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
		// $scope.savedepart=function(){
		// 	SIGN.post('ism/savedepart', $scope.angularTreeList)
		// 	.then(function(json){
		// 		$scope.remindtext ='成功保存';
		// 	})
		// 	.catch(function(e){
		// 		$scope.remindtext ='保存失败';
		// 	});
		// 	$scope.remindtext ='保存失败';
		// 	$timeout($scope.remindClear,2000);
		// }
		$scope.remindClear=function(){
			$scope.remindtext="";
		}
		$scope.init=function(){  
			$scope.getTreeList();  
		}
  //       $scope.getTreeList=function(){
		// 	$scope.angularTreeList=[];  
		// 	//查询树  
		// 	$scope.orgTypeList=[];
		// 	//创建根节点  
		// 	var root={};  
		// 	root.name=ConfigData.userData.companyName ? ConfigData.userData.companyName : '公司名称'; 
		// 	root.children=$scope.orgTypeList;  
		// 	$scope.angularTreeList.push(root);  
		// 	//$scope.treeOptions.data=$scope.angularTreeList;  
		// }
		
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

		//新建节点  
		 $scope.newSubItem = function (item) {
		 	var name="新部门"
		 	var json={"name":name,"children":[]};
		 	if(item.children==null || item.children.length==0){
		 		item.children=[];
		 	}
		 	item.children.push(json);
                 // $scope.init();

             };

  //           //编辑节点  
  //           $scope.editItem=function(item){   
  //           	if(item.isEdit==undefined||item.isEdit==false){  
  //           		item.isEdit=true;          
  //           	}else if(item.isEdit==true){  
  //           		item.isEdit=false;      
  //           		var json={"name":item.name}  
  //                // $scope.init(); 
  //            }  
  //        }  

  //        //删除节点  
  //        $scope.removeItem=function(item){  
  //        	var json={};  
  //        	json.status=0;   
		// 	// $scope.init(); 
		// }  

       //  $scope.treeOptions = {  
       //      //拖拽操作 拖拽后会返回callback beforeDrop函数，我们可以重写这个函数，拖拽本质上是顺序的改变和层级的改变，所以是一个update操作  
       //      beforeDrop : function (e) {  
       //         var source = e.source.nodeScope.item;  
       //         var destRoot = e.dest.nodesScope.item ;  
       //         if(destRoot==undefined){  
       //             return $q.reject();  
       //         }  
       //         var destIndex=e.dest.index;  
       //         var dest=e.dest.nodesScope.item.children[destIndex];  
       //         if(dest==undefined){  
       //             return $q.reject();  
       //         }  
       //         if (source.parentTypeId!=dest.parentTypeId) {         
       //             return $q.reject();  
       //         }  
       //         var sourceSeq=source.sequence;  
       //         var destSeq=dest.sequence;  
       //         source.sequence=destSeq;  
       //         dest.sequence=sourceSeq;  
       //         OrganizationService.updateOrgType(source).then(function(result) {  

       //         });  
       //         OrganizationService.updateOrgType(dest).then(function(result) {  

       //         });  
       //         return;  
       //      }  
       // };  

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
		
		//公司组织架构信息
		// $scope.angularTreeList = [{
		// 	departmentId:1,
		// 	name:'技术部',
		// 	children:[{
		// 		departmentId:2,
		// 		name:'研发部',
		// 		children:[{
		// 			name:'程序组'
		// 		}]
		// 	}]
		// },{
		// 	departmentId:3,
		// 	name:'技术部',
		// 	children:[{
		// 		name:'研发部'
		// 	}]
		// },{
		// 	departmentId:4,
		// 	name:'技术部',
		// 	children:[{
		// 		name:'研发部'
		// 	}]
		// }]
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

		//添加部门
		/*$scope.addDepartment = function(event){
			var appendTo = angular.element( event.currentTarget).parent();
			$uibModal.open({
				backdrop: 'static',
				animation: true,
				appendTo: appendTo,
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
		}*/
		// 部门编辑
		/*$scope.editDepartment = function(index){
		var appendTo = angular.element( event.currentTarget).parent();
		$uibModal.open({
			backdrop: 'static',
			animation: true,
			appendTo: appendTo,
			component: 'addDepartment',
			resolve: {
				items: function () {
					return $scope.dataDepartment[index];
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
	}*/
	
	
	
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
				SIGN.post("ism/ism/removeFromIsm", {'officerId' : officerID})
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
	
	
	
	
	
	


		// 添加用户

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
			popup.officerList( $scope.officerData, appendTo)
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
		$scope.delsprbd=function(index){
			var length=$scope.listData[index].departmentHandleStr.handleStr.length;
			if(length>1){
				$scope.listData[index].departmentHandleStr.handleStr.pop($scope.listData[index].departmentHandleStr.handleStr)
				$scope.listData[index].handleStr=$scope.listData[index].handleStr.substr(0,$scope.listData[index].handleStr.lastIndexOf(','));
			}
			$scope.listData[index].handleStr=$scope.listData[index].handleStr.substr(0,$scope.listData[index].handleStr.lastIndexOf(','));
		}

		// 删除部门
		$scope.delDepartment=function(index){
			$scope.listData[index].department=$scope.listData[index].department.substr(0,$scope.listData[index].department.lastIndexOf(','));
		}



		// 添加用户
		$scope.officerData=[{
			departmentName:"研发部",
			officerList:[
				{
					officerId: 1,
					officerName:"研发部组长1"
				},
				{
					officerId: 1,
					officerName:"研发部组长2"
				},
				{
					officerId: 1,
					officerName:"研发部组长3"
				}
			]
		},{
			departmentName:"技术部",
			officerList:[
				{
					officerId: 1,
					officerName:"技术部组长1"
				},
				{
					officerId: 1,
					officerName:"技术部组长2"
				},
				{
					officerId: 1,
					officerName:"技术部组长3"
				}
			]
		},{
			departmentName:"人事部",
			officerList:[
				{
					officerId: 1,
					officerName:"人事部组长1"
				},
				{
					officerId: 1,
					officerName:"人事部组长2"
				}
			]
		}
		];
		$scope.shipData=[
			{
				shipId:1,
				shipName:"东方1"
			},{
				shipId:2,
				shipName:"东方2"
			},{
				shipId:3,
				shipName:"东方3"
			},{
				shipId:4,
				shipName:"东方4"
			}
		];
		$scope.addData={
			publicTitle: '新增员工',
			publicBtnl : '提交',
			publicBtnr : '取消',
			isAddShow  : true,	
			isShipList : false,
			officerData: $scope.officerData,
			shipData   : $scope.shipData
		};
		/*$scope.addUser=function(event){
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
					$scope.listData.push(value);
					console.log('提交的值:',value);
				},
				function(value){
					console.log('cancel:',value);
				}
				);
		}*/

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

		/*//所有信息
		$scope.allData = [
        {
			departmentId: 1,
			departmentName: '公司总部',
			parentId:0,
			children: [
				{
					departmentId: 1,
					name: '公司总部',
					children:[
						{
							departmentId: 2,
							name: '研发部',
							children: [{
								departmentId: 3,
								name: '技术部',
								children: [
									{
										departmentId: 4,
										name: '前端组',
										children: []
									}, {
										departmentId: 5,
										name: 'java组',
										children: []
									}
								]
							}]
						},
						{
							departmentId: 6,
							name: '行政部',
							children: [{
								departmentId: 7,
								name: '人事组',
								children: []
							}]
						}
					]
				}

			],
            departmentHeader: '老大',
            memberNum: '5',
            departmentDuty: '公司总部...',
            departmentUse: [
                {
                    id: 1,
                    userId: 1,
                    loginName: 'lg',
                    userName: '李果1',
                    password: '111',
                    shipName: '东方号1',
                    departmentHandleStr:
                        {
                            department: 'java组',
                            otherDepartment:['前端组'] ,
							handleStr: ['职务1','职务2'],
                            otherHandleStr: ['职务1','职务2']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                },{
					id: 1,
					userId: 2,
					loginName: 'lg',
					userName: '李果1',
					password: '111',
					shipName: '东方号1',
					departmentHandleStr:
					{
						department: '前端组',
						otherDepartment:['java组'] ,
						handleStr: ['职务1','职务2'],
						otherHandleStr: ['职务1','职务2']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}, {
                    id: 2,
                    userId: 3,
                    loginName: 'zs',
                    userName: '张三2',
                    password: '111',
                    shipName: '东方号2',
                    departmentHandleStr:
                        {
                            department: '前端组',
                            otherDepartment: ['java组'],
							handleStr: ['职务1'],
                            otherHandleStr: ['职务3', '职务4']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                },{
					id: 2,
					userId: 4,
					loginName: 'zs',
					userName: '张三2',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: 'java组',
						otherDepartment: ['前端组'],
						handleStr: ['职务1'],
						otherHandleStr: ['职务3', '职务4']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},  {
                    id: 3,
                    userId: 5,
                    loginName: 'lg',
                    userName: '李果3',
                    password: '111',
                    shipName: '东方号',
                    departmentHandleStr:
                        {
                            department: '技术部',
                            otherDepartment: [],
							handleStr: ['职务1', '职务2'],
                            otherHandleStr: []
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                }, {
                    id: 4,
                    userId: 6,
                    loginName: 'zs',
                    userName: '张三4',
                    password: '111',
                    shipName: '东方号2',
                    departmentHandleStr:
                        {
                            department: '人事组',
                            otherDepartment: ['技术部'],
							handleStr: ['职务1'],
                            otherHandleStr: ['职务2']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                }, {
                    id: 4,
                    userId: 7,
                    loginName: 'zs',
                    userName: '张三4',
                    password: '111',
                    shipName: '东方号2',
                    departmentHandleStr:
                        {
                            department: '技术部',
                            otherDepartment: ['人事组'],
							handleStr: ['职务2'],
                            otherHandleStr: ['职务1']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                }, {
                    id: 5,
                    userId: 8,
                    loginName: 'zs',
                    userName: '张三5',
                    password: '111',
                    shipName: '东方号2',
                    departmentHandleStr:
                        {
                            department: '行政部',
                            otherDepartment: ['技术部'],
							handleStr: ['职务1'],
                            otherHandleStr: ['职务2']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                }, {
                    id: 5,
                    userId: 9,
                    loginName: 'zs',
                    userName: '张三5',
                    password: '111',
                    shipName: '东方号2',
                    departmentHandleStr:
                        {
                            department: '技术部',
                            otherDepartment: ['行政部'],
							handleStr: ['职务2'],
                            otherHandleStr: ['职务1']
                        },
                    companyRole: '管理者',
                    sysRole: '体系用户'
                }
            ]
        },
			{
            departmentId: 2,
            departmentName: '研发部',
            lastDepartment: '公司总部',
            children: [{
                departmentId: 3,
                name: '技术部',
                children: [
                    {
                        departmentId: 4,
                        name: '前端组',
                        children: []
                    }, {
                        departmentId: 4,
                        name: 'java组',
                        children: []
                    }
                ]
            }],
            departmentHeader: '李果2',
            memberNum: '5',
            departmentDuty: '公司研发部...',
            departmentUse: [
				{
					id: 1,
					userId: 1,
					loginName: 'lg',
					userName: '李果1',
					password: '111',
					shipName: '东方号1',
					departmentHandleStr:
					{
						department: 'java组',
						otherDepartment:['前端组'] ,
						handleStr: ['职务1','职务2'],
						otherHandleStr: ['职务1','职务2']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},{
					id: 1,
					userId: 2,
					loginName: 'lg',
					userName: '李果1',
					password: '111',
					shipName: '东方号1',
					departmentHandleStr:
					{
						department: '前端组',
						otherDepartment:['java组'] ,
						handleStr: ['职务1','职务2'],
						otherHandleStr: ['职务1','职务2']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}, {
					id: 2,
					userId: 3,
					loginName: 'zs',
					userName: '张三2',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '前端组',
						otherDepartment: ['java组'],
						handleStr: ['职务1'],
						otherHandleStr: ['职务3', '职务4']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},{
					id: 2,
					userId: 4,
					loginName: 'zs',
					userName: '张三2',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: 'java组',
						otherDepartment: ['前端组'],
						handleStr: ['职务1'],
						otherHandleStr: ['职务3', '职务4']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},  {
					id: 3,
					userId: 5,
					loginName: 'lg',
					userName: '李果3',
					password: '111',
					shipName: '东方号',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: [],
						handleStr: ['职务1', '职务2'],
						otherHandleStr: []
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}, {
					id: 4,
					userId: 7,
					loginName: 'zs',
					userName: '张三4',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: ['人事组'],
						handleStr: ['职务2'],
						otherHandleStr: ['职务1']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},  {
					id: 5,
					userId: 9,
					loginName: 'zs',
					userName: '张三5',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: ['行政部'],
						handleStr: ['职务2'],
						otherHandleStr: ['职务1']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}
			]
        }, {
            departmentId: 3,
            departmentName: '技术部',
            lastDepartment: '研发部',
            children: [],
            departmentHeader: '李果3',
            memberNum: '5',
            departmentDuty: '公司前端的研发...',
            departmentUse: [
				{
					id: 1,
					userId: 1,
					loginName: 'lg',
					userName: '李果1',
					password: '111',
					shipName: '东方号1',
					departmentHandleStr:
					{
						department: 'java组',
						otherDepartment:['前端组'] ,
						handleStr: ['职务1','职务2'],
						otherHandleStr: ['职务1','职务2']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},{
					id: 1,
					userId: 2,
					loginName: 'lg',
					userName: '李果1',
					password: '111',
					shipName: '东方号1',
					departmentHandleStr:
					{
						department: '前端组',
						otherDepartment:['java组'] ,
						handleStr: ['职务1','职务2'],
						otherHandleStr: ['职务1','职务2']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}, {
					id: 2,
					userId: 3,
					loginName: 'zs',
					userName: '张三2',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '前端组',
						otherDepartment: ['java组'],
						handleStr: ['职务1'],
						otherHandleStr: ['职务3', '职务4']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},{
					id: 2,
					userId: 4,
					loginName: 'zs',
					userName: '张三2',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: 'java组',
						otherDepartment: ['前端组'],
						handleStr: ['职务1'],
						otherHandleStr: ['职务3', '职务4']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},  {
					id: 3,
					userId: 5,
					loginName: 'lg',
					userName: '李果3',
					password: '111',
					shipName: '东方号',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: [],
						handleStr: ['职务1', '职务2'],
						otherHandleStr: []
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}, {
					id: 4,
					userId: 7,
					loginName: 'zs',
					userName: '张三4',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: ['人事组'],
						handleStr: ['职务2'],
						otherHandleStr: ['职务1']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				},  {
					id: 5,
					userId: 9,
					loginName: 'zs',
					userName: '张三5',
					password: '111',
					shipName: '东方号2',
					departmentHandleStr:
					{
						department: '技术部',
						otherDepartment: ['行政部'],
						handleStr: ['职务2'],
						otherHandleStr: ['职务1']
					},
					companyRole: '管理者',
					sysRole: '体系用户'
				}
			]
        }, {
				departmentId: 4,
				departmentName: '前端组',
				lastDepartment: '技术部',
				children: [],
				departmentHeader: '李果',
				memberNum: '2',
				departmentDuty: '公司java的研发...',
				departmentUse: [
					{
						id: 1,
						userId: 2,
						loginName: 'lg',
						userName: '李果1',
						password: '111',
						shipName: '东方号1',
						departmentHandleStr:
						{
							department: '前端组',
							otherDepartment:['java组'] ,
							handleStr: ['职务1','职务2'],
							otherHandleStr: ['职务1','职务2']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					}, {
						id: 2,
						userId: 3,
						loginName: 'zs',
						userName: '张三2',
						password: '111',
						shipName: '东方号2',
						departmentHandleStr:
						{
							department: '前端组',
							otherDepartment: ['java组'],
							handleStr: ['职务1'],
							otherHandleStr: ['职务3', '职务4']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					}
				]
			},{
				departmentId: 5,
				departmentName: 'java组',
				lastDepartment: '技术部',
				children: [],
				departmentHeader: '李果',
				memberNum: '2',
				departmentDuty: '公司java的研发...',
				departmentUse: [
					{
						id: 1,
						userId: 1,
						loginName: 'lg',
						userName: '李果1',
						password: '111',
						shipName: '东方号1',
						departmentHandleStr:
						{
							department: 'java组',
							otherDepartment:['前端组'] ,
							handleStr: ['职务1','职务2'],
							otherHandleStr: ['职务1','职务2']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					},{
						id: 2,
						userId: 4,
						loginName: 'zs',
						userName: '张三2',
						password: '111',
						shipName: '东方号2',
						departmentHandleStr:
						{
							department: 'java组',
							otherDepartment: ['前端组'],
							handleStr: ['职务1'],
							otherHandleStr: ['职务3', '职务4']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					}
				]
			},{
				departmentId: 6,
				departmentName: '行政部',
				lastDepartment: '公司总部',
				children: [],
				departmentHeader: '李果',
				memberNum: '2',
				departmentDuty: '公司java的研发...',
				departmentUse: [
					 {
						id: 4,
						userId: 6,
						loginName: 'zs',
						userName: '张三4',
						password: '111',
						shipName: '东方号2',
						departmentHandleStr:
						{
							department: '人事组',
							otherDepartment: ['技术部'],
							handleStr: ['职务1'],
							otherHandleStr: ['职务2']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					},{
						id: 5,
						userId: 8,
						loginName: 'zs',
						userName: '张三5',
						password: '111',
						shipName: '东方号2',
						departmentHandleStr:
						{
							department: '行政部',
							otherDepartment: ['技术部'],
							handleStr: ['职务1'],
							otherHandleStr: ['职务2']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					}
				]
			},{
				departmentId: 7,
				departmentName: '人事组',
				lastDepartment: '行政部',
				children: [],
				departmentHeader: '李果',
				memberNum: '1',
				departmentDuty: '公司java的研发...',
				departmentUse: [
					{
						id: 4,
						userId: 6,
						loginName: 'zs',
						userName: '张三4',
						password: '111',
						shipName: '东方号2',
						departmentHandleStr:
						{
							department: '人事组',
							otherDepartment: ['技术部'],
							handleStr: ['职务1'],
							otherHandleStr: ['职务2']
						},
						companyRole: '管理者',
						sysRole: '体系用户'
					}
				]
			}
    ]*/
		//部门信息
		$scope.dataDepartment=[
			{
				departmentId: 1,
				name:"部门1",
				lastDepartment:"",
				departmentHeader: '老大',
				departmentDuty: '公司总部...',
				memberNum: '5',
				user:[],
				offer:[],
				children:[
					{
						lastDepartment:"部门1",
						departmentHeader: '老二',
						departmentDuty: '公司分部',
						memberNum: '5',
						departmentId: 2,
						name:"部门2",
						user:[],
						offer:[],
						children:[]
					}
				]
			}
		];
		$scope.offerData=[
			{
				departmentName:"部门1",
				offerName:["职务1","职务2"]
			}
		];
		$scope.userlist=[
			{
				id: 1,
				userId: 1,
				loginName: 'zs',
				userName: '张三',
				password: '111',
				shipName: '东方号1',
				companyRole: '管理者',
				sysRole: '体系用户',
				departmentName:["部门1"],
				offerName:["职务1"]
			},{
				id: 2,
				userId: 2,
				loginName: 'ls',
				userName: '李四',
				password: '111',
				shipName: '东方号2',
				companyRole: '管理者',
				sysRole: '体系用户',
				departmentName:["部门2"],
				offerName:["职务3","职务2"]
			}
		];

		$scope.init= function () {
		 //部门介绍信息
			$scope.dataDepartment.user=$scope.userlist
			$scope.dataDepartment.offer=$scope.offerData;
		 	$scope.listData = $scope.dataDepartment.user;
			$scope.dataDepart = $scope.dataDepartment[0];
		 //用户信息
		 	$scope.dataOffer = $scope.dataDepartment.offer;
		 //公司组织架构信息
		 	$scope.angularTreeList=$scope.dataDepartment;
		 };
		$scope.init();
		$scope.showContent= function (item) {
			$scope.item=item;
			$scope.dataDepartment=item;
			$scope.dataDepart=$scope.dataDepartment;
			$scope.dataDepartment.user=[];
			var user=$scope.userlist;
			for(var i in user){
				var departmentName=user[i].departmentName
				for (var j in departmentName){
					if(departmentName[j]===item.name){
						$scope.dataDepartment.user.push(user[i]);
					}
				}
			};
			$scope.listData = $scope.dataDepartment.user;
		}
		/*$scope.init= function () {
			//部门介绍信息
			$scope.dataDepartment = $scope.allData[0];
			//用户信息
			$scope.listData=$scope.allData[0].departmentUse;
			//公司组织架构信息
			$scope.angularTreeList=$scope.allData[0].children;

		}
		$scope.init();*/
		/*$scope.showContent= function (dataDepartmentID) {
			$scope.length=$scope.allData.length;
			for(var i=0;i<=$scope.length;i++){
				if(dataDepartmentID===$scope.allData[i].departmentId){
					$scope.dataDepartment = $scope.allData[i];
					//用户信息
					$scope.listData=$scope.allData[i].departmentUse;
					return;
				}
			}
		}*/
		//新建部门
		$scope.changDep= function (angularTreeList) {
			$scope.Department=[];

		}
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
					console.log(item);
					console.log('提前的值:',value);
					item.children.push(value);
					console.log('提后的值:',item);
				},
				function(value){
					console.log('cancel:',value);
				}
			);
		}
		//添加员工
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
					item.user.push(value);
					console.log('提后的值:',item);
				},
				function(value){
					console.log('cancel:',value);
				}
			);
		}
		//搜素
		$scope.search= function () {
			var arr=$scope.allData[0].departmentUse;
			$scope.listData=$filter("filter")(arr,$scope.searchContext);
			if(!$scope.searchContext){
				$scope.listData=$scope.allData[0].departmentUse;
			}
		}



	}
})()


