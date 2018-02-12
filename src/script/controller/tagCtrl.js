/**
* Author: csdoker
* CreateTime: 2018/2/12
* Tips: 标签页控制器
*/
BlogApp.controller('tagCtrl', ['$stateParams', '$http', '$scope',
  function($stateParams, $http, $scope) {
  	$scope.tag = $stateParams.tag;

    $http({
        method: 'GET',
        url: 'http://localhost:3000/taglist?tag='+$stateParams.tag+'&page='+$stateParams.page
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
