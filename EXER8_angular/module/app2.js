angular.module('myApp',[])
    .controller('myController',['$scope',function($scope){
        // 存储的数据
        $scope.todos = [
            {name:'吃饭',isChecked:false},
            {name:'睡觉',isChecked:false},
            {name:'打豆豆',isChecked:false},
        ];

        // 功能定义
        $scope.add = function(){
            if($scope.content === undefined) return 
            var obj = {
                name: $scope.content,
                isChecked:false
            }
            // 从开头进行添加
            $scope.todos.unshift(obj)
        }

        // 删除功能
        $scope.remove = function(){

            // 方法1
            //  $scope.todos.forEach(function(item,index){
                // 被选中的删除
                // if(item.isChecked){ // 递归结束条件
                //     $scope.todos.splice(index,1)
                //     // 进行递归调用，在新的索引结构下进行删除操作——效果不太好
                //     $scope.remove()
                // }
            //  })

            // 方法2
            var oldTodos = $scope.todos;
            $scope.todos = []
            oldTodos.forEach(function(item,index){
                if(!item.isChecked){
                    $scope.todos.push(item)
                }
            })
        }
    }])