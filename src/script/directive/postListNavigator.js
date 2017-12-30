/**
* Author: csdoker
* CreateTime: 2017/12/30
* Tips: main-列表分页指令模块
*/
BlogApp.directive('appPostListNavigator', [function() {
  return {
    templateUrl: 'view/template/postListNavigator.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
