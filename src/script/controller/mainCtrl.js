/**
 * Author: csdoker
 * CreateTime: 2017/12/25
 * Tips: 博客主页——文章列表页控制器
 */
BlogApp.controller('mainCtrl', ['$state', '$stateParams', '$http', '$scope',
  function($state, $stateParams, $http, $scope) {
    // console.log(tagDatas);
    var pageIndex = 0;
    if ($stateParams.page === undefined) {
      pageIndex = 1;
    } else {
      pageIndex = $stateParams.page;
    }
    $http({
      method: 'GET',
      url: 'http://localhost:3000/postlist?page=' + pageIndex
    }).then(function(response) {
      $scope.postlist = response.data.data;
      $scope.postcount = response.data.count;
      // 根据<!--more-->来截取文章列表显示的部分
      // angular.forEach($scope.postlist, function(item, key) {
      //     item.postContent = item.postContent.split('<!--more-->')[0];
      // });
    }, function(response) {
      // 请求失败执行代码
      if (response.status === 404) {
        $state.go('error');
      }
      console.log('request failed');
    });
    $http({
      method: 'GET',
      url: 'http://localhost:3000/posttag'
    }).then(function(response) {
      // $scope.posttag = response.data;
      $scope.posttag = 35;
    }, function(response) {
      // 请求失败执行代码
      console.log('request failed');
    });
  }
]);
