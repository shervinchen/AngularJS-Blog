/**
* Author: csdoker
* CreateTime: 2018/1/24
* Tips: 博客文章页控制器
*/
BlogApp.controller('postCtrl', ['$state', '$stateParams', '$http', '$scope',
  function($state, $stateParams, $http, $scope) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/post?postId='+$stateParams.postid
    }).then(function(response) {
        $scope.post = response.data;
        console.log($scope.post);
    }, function(response) {
        // 请求失败执行代码
        if (response.status === 404) {
            $state.go('error');
        }
        console.log('request failed');
    });
  }
]);
