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
  }
]);
