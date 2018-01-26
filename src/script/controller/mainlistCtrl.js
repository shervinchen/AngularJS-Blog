/**
* Author: csdoker
* CreateTime: 2018/1/24
* Tips: 博客列表页控制器
*/
BlogApp.controller('mainlistCtrl', ['$stateParams', '$http', '$scope',
  function($stateParams, $http, $scope) {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/postlist?page='+$stateParams.page
    }).then(function(response) {
        $scope.postlist = response.data;
        // 根据<!--more-->来截取文章列表显示的部分
        // angular.forEach($scope.postlist, function(item, key) {
        //     item.postContent = item.postContent.split('<!--more-->')[0];
        // });
    }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
    });
  }
]);
