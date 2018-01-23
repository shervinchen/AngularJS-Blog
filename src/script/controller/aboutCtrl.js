/**
* Author: csdoker
* CreateTime: 2017/1/6
* Tips: 博客关于页控制器
*/
BlogApp.controller('aboutCtrl', ['$http', '$scope',
  function($http, $scope) {
    // $http({
    //     method: 'GET',
    //     url: '../data/post1.json'
    // }).then(function(response) {
    //     $scope.post = response.data;
    //   	console.log($scope.post);
    // }, function(response) {
    //     // 请求失败执行代码
    //     console.log('request failed');
    // });

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/name'
    }).then(function(response) {
        $scope.post = response.data;
        console.log($scope.post);
    }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
    });
  }
]);
