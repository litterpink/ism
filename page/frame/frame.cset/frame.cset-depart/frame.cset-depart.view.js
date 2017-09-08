!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-depart', {
				title: '部门管理',
				url: '/cset-depart',
				templateUrl: 'page/frame/frame.cset/frame.cset-depart/frame.cset-depart.template.html',
				controller: ['$scope', 'SIGN', '$q', 'ConfigData', '$timeout', controller ]
			});
	}]);
  
  
	function controller($scope, SIGN, $q, ConfigData, $timeout){
		$scope.getData=true;
		$scope.remindtext="";
		$scope.savedepart=function(){
			SIGN.post('ism/savedepart', $scope.angularTreeList)
			.then(function(json){
				$scope.remindtext ='成功保存';
			})
			.catch(function(e){
				$scope.remindtext ='保存失败';
			});
			$scope.remindtext ='保存失败';
			$timeout($scope.remindClear,2000);
		}
		$scope.remindClear=function(){
			$scope.remindtext="";
		}
		$scope.init=function(){  
            $scope.getTreeList();  
        } 		
      
        $scope.getTreeList=function(){
			$scope.angularTreeList=[];  
			//查询树  
			$scope.orgTypeList=[];
			//创建根节点  
			var root={};  
			root.name=ConfigData.userData.companyName ? ConfigData.userData.companyName : '公司名称'; 
			root.children=$scope.orgTypeList;  
			$scope.angularTreeList.push(root);  
			$scope.treeOptions.data=$scope.angularTreeList;  
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
          
        //编辑节点  
        $scope.editItem=function(item){   
            if(item.isEdit==undefined||item.isEdit==false){  
                item.isEdit=true;          
            }else if(item.isEdit==true){  
                item.isEdit=false;      
                var json={"name":item.name}  
                 // $scope.init(); 
            }  
        }  
          
        //删除节点  
        $scope.removeItem=function(item){  
			var json={};  
			json.status=0;   
			// $scope.init(); 
        }  
          
        $scope.treeOptions = {  
            //拖拽操作 拖拽后会返回callback beforeDrop函数，我们可以重写这个函数，拖拽本质上是顺序的改变和层级的改变，所以是一个update操作  
            beforeDrop : function (e) {  
               var source = e.source.nodeScope.item;  
               var destRoot = e.dest.nodesScope.item ;  
               if(destRoot==undefined){  
                   return $q.reject();  
               }  
               var destIndex=e.dest.index;  
               var dest=e.dest.nodesScope.item.children[destIndex];  
               if(dest==undefined){  
                   return $q.reject();  
               }  
               if (source.parentTypeId!=dest.parentTypeId) {         
                   return $q.reject();  
               }  
               var sourceSeq=source.sequence;  
               var destSeq=dest.sequence;  
               source.sequence=destSeq;  
               dest.sequence=sourceSeq;  
               OrganizationService.updateOrgType(source).then(function(result) {  
  
               });  
               OrganizationService.updateOrgType(dest).then(function(result) {  
          
               });  
               return;  
            }  
       };  
		
		$scope.init(); 
	}
	
})()