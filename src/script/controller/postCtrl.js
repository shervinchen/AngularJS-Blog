/**
* Author: csdoker
* CreateTime: 2018/1/24
* Tips: 博客文章页控制器
*/
BlogApp.controller('postCtrl', ['$stateParams', '$http', '$scope',
  function($stateParams, $http, $scope) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/post?postId='+$stateParams.postid
    }).then(function(response) {
        $scope.post = response.data;
        console.log($scope.post);
    }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
    });
  }
]);
