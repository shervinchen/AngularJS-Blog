/**
* Author: csdoker
* CreateTime: 2017/12/26
* Tips: 页面公用——页脚指令模块
*/
BlogApp.directive('appFooter', [function() {
  return {
    templateUrl: 'view/template/footer.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
