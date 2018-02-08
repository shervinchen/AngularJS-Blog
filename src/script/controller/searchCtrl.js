/**
* Author: csdoker
* CreateTime: 2017/1/12
* Tips: 搜索结果页控制器
*/
BlogApp.controller('searchCtrl', ['$stateParams', '$http', '$scope',
  function($stateParams, $http, $scope) {
  	$scope.keyword = $stateParams.keyword;
    // $http.get('/data/positionList.json').then(function(response) {
    //   $scope.list = response.data;
    // }).catch(function(response) {});

    // 测试数据
    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/postlist?page=1'
    // }).then(function(response) {
    //     $scope.postlist = response.data;
    //     // 根据<!--more-->来截取文章列表显示的部分
    //     // angular.forEach($scope.postlist, function(item, key) {
    //     //     item.postContent = item.postContent.split('<!--more-->')[0];
    //     // });
    // }, function(response) {
    //     // 请求失败执行代码
    //     console.log('request failed');
    // });
  }
]);
