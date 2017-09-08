!(function(){'use strict';
	angular.module('frame') 
	.directive('approve', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/flow/approve/approve.template.html',
			scope: {
				resolve: '<',
				close: "&",
				dismiss: "&"
			},
			controller:['$scope', function ($scope)
			{
				$scope.tbShow = true;
				$scope.tabShow = function(str){
					$scope.tbShow = str;
				}
				$scope.current = {};//当前操作的动态控件
				$scope.formControls = [];//存储表单动态添加的控件

				//添加控件
				$scope.addControl = function(type){
					var control ;
					switch(type){
						case 1://添加单行文本
							control = {
								type:'show-input',
								text:'单行文本',
								required:'',
								minLength:'',
								maxLength:'',
								placeHolder:'提示文字',
								errorText:'错误提示文字'
							};
							break;
						case 2://添加多行文本
							control = {
								type:'show-text',
								text:'多行文本',
								required:'',
								minLength:'',
								maxLength:'',
								placeHolder:'提示文字',
								errorText:'错误提示文字'
							};
							break;
						case 3://添加单选框
							control = {
								type:'show-check',
								text:'单选',
								required:'',
								optionobj:{},
								optionarr: ['选项一','选项二','选项三'],
								option: '选项一,选项二,选项三'
							};
							break;
						case 4://添加多选框
							control = {
								type:'show-checks',
								text:'多选',
								required:'',
								optionobj:{},
								optionarr:['选项一','选项二','选项三'],
								option: '选项一,选项二,选项三'
							};
							break;
						case 5://添加下拉菜单
							control = {
								type:'show-select',
								text:'下拉菜单',
								required:'',
								optionobj:{},
								optionarr:['选项一','选项二','选项三'],
								option: '选项一,选项二,选项三'
							};
							break;
						case 6://添加日期框
							control = {
								type:'date-picker',
								text:'日期',
								required:'',
								format:''
							};
							break;
						case 7://添加数字框
							control = {
								type:'show-number',
								text:'数字',
								placeHolder:'提示文字',
								maxlength : 18,
								minlength : 0,
								required:''
							};
							break;
						case 8://添加表格
							control = {
								type:'show-table',
								index:0,
								rows:3,
								cols:4
							};
							break;
					}
					var arr = document.getElementsByClassName('overlight');
					for(var i=0; i<arr.length; i++){
						arr[i].classList.remove('overlight');
					}
					$scope.formControls.push(control);
					$scope.current = control;
					//切换到控件编辑
					$scope.tbShow = false;
				}

				//移除当前控件
				$scope.remove = function(index,event){
					$scope.formControls.splice(index,1);
					$scope.current =  null;
				}


				//点击选中某个控件项
				$scope.click = function(index,event){
					//移除其他项高亮
					var arr = document.getElementsByClassName('overlight');
					for(var i=0; i<arr.length; i++){
						arr[i].classList.remove('overlight');
					}
					//当前点击项高亮
					('overlight');
					$scope.current = $scope.formControls[index];
					//切换到控件编辑
					$scope.tbShow = false;
				}

				//监听选项改变事件
				$scope.changeOption = function(){
					//将字符串转换数组保存
					var option = $scope.current.option;
					if(option[0]=='%'){
						var arr =  option.split('%'); //%port%data%   port端口 data数据
						$scope.current.optionobj = {port:arr[1],data:arr[2]};//数据来源于url请求
					}else{
						$scope.current.optionarr = option.split(',');//数据来源固定值
					}
				}
				//保存动态表单
				$scope.save = function(){
					$scope.userData[2].data = $scope.formControls;
					console.log('提交数据：',$scope.userData);
				}
			}
			]
		}
	});  
})()
