/**
* Author: csdoker
* CreateTime: 2017/12/31
* Tips: 文章分类指令模块
*/
BlogApp.directive('appPostCategory', [function() {
  return {
    templateUrl: 'view/template/postCategory.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
