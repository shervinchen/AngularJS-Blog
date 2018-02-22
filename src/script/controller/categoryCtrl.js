/**
* Author: csdoker
* CreateTime: 2018/2/22
* Tips: 分类页控制器
*/
BlogApp.controller('categoryCtrl', ['$state', '$stateParams', '$http', '$scope',
  function($state, $stateParams, $http, $scope) {
  	$scope.category = $stateParams.category;

    $http({
        method: 'GET',
        url: 'http://localhost:3000/categorylist?category='+$stateParams.category+'&page='+$stateParams.page
    }).then(function(response) {
        $scope.postlist = response.data.data;
        $scope.postcount = response.data.count;
    }, function(response) {
        // 请求失败执行代码
        if (response.status === 404) {
            $state.go('error');
        }
        console.log('request failed');
    });
  }
]);
