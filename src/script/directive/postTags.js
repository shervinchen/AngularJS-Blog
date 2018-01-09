/**
* Author: csdoker
* CreateTime: 2018/1/9
* Tips: 文章tags模块指令
*/
BlogApp.directive('appPostTags', [function() {
  return {
    templateUrl: 'view/template/postTags.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
