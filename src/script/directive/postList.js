/**
* Author: csdoker
* CreateTime: 2017/12/25
* Tips: main-文章列表指令模块
*/
BlogApp.directive('appPostList', [function() {
  return {
    templateUrl: 'view/template/postList.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      postListDatas: '='
    },
    link: function ($scope) {

    }
  };
}]);
