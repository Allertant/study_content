angular.module('myApp',[])
    .controller('myController',['$scope',function($scope){
        // 定义剩余字数的方法
        $scope.message = ''
        $scope.getCount = function(){
            if($scope.message.length > 100){
                $scope.message = $scope.message.slice(0,100)
            }
            return 100 - $scope.message.length
        }

        $scope.save = function(){
            // 这里本地存储中，将数据转换为json格式的字符串，据说更安全一些
            localStorage.setItem('note_key',JSON.stringify($scope.message))
            $scope.message = ''
        }
        $scope.read = function(){
            // 这里需要处理当cookie字符串为空的情况，经过json解析后不可以取length属性，但是使用json数组就可以解决
            $scope.message = JSON.parse(localStorage.getItem('note_key') || '[]')
        }
        $scope.remove = function(){
            localStorage.removeItem('note_key')
            $scope.message = ''
        }
    }])