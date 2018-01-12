/**
 * Author: csdoker
 * CreateTime: 2017/12/30
 * Tips: main-列表分页指令模块
 */
BlogApp.directive('appPostListNavigator', ['PAGE_FIRST', '$stateParams', function(PAGE_FIRST, $stateParams) {
  return {
    templateUrl: 'view/template/postListNavigator.html',
    restrict: 'ECAM',
    replace: true,
    controller: function($scope) {
      $scope.isShowPre = false;
      if ($stateParams.page > PAGE_FIRST) {
        $scope.isShowPre = true;
      }
      $scope.isShowNext = true;
		},
    link: function($scope) {

    }
  };
}]);
