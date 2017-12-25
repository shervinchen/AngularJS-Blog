/**
* Author: csdoker
* CreateTime: 2017/12/25
* Tips: 页面公用——头部指令模块
*/
BlogApp.directive('appHeader', [function() {
  return {
    templateUrl: 'view/template/header.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
