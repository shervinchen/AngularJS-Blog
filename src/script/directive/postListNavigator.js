/**
 * Author: csdoker
 * CreateTime: 2017/12/30
 * Tips: main-列表分页指令模块
 */
BlogApp.directive('appPostListNavigator', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {
  return {
    templateUrl: '/view/template/postListNavigator.html',
    restrict: 'ECAM',
    replace: true,
    controller: ['$scope', function($scope) {
      $scope.isMainRoute = false;
      $scope.isSearchRoute = false;
      $scope.isTagRoute = false;
      $scope.isCategoryRoute = false;
      // 判断跳转的路由
      if ($state.$current.name === 'main' || $state.$current.name === '/') {
        $scope.isMainRoute = true;
      } else if ($state.$current.name === 'search') {
        $scope.isSearchRoute = true;
      } else if ($state.$current.name === 'tag') {
        $scope.isTagRoute = true;
      } else {
        $scope.isCategoryRoute = true;
      }
      $http({
        method: 'GET',
        url: 'http://localhost:3000/postcount'
      }).then(function(response) {
        // 最多可选分页按钮 其余按钮被省略
        var maxPageLink = 5;
        // 每页显示文章数
        var perPageCount = 5;
        // 获取文章总数
        var totalPost = response.data.postcount;
        // 获取当前页数
        if ($stateParams.page === undefined) {
          $scope.currentPage = 1;
        } else {
          $scope.currentPage = parseInt($stateParams.page);
        }
        // 获取上一页
        $scope.prePage = $scope.currentPage - 1;
        // 获取下一页
        $scope.nextPage = $scope.currentPage + 1;
        // 求出总页数
        var totalPage;
        if (totalPost % perPageCount === 0) {
          totalPage = totalPost / perPageCount;
        } else {
          totalPage = (totalPost - totalPost % perPageCount) / perPageCount + 1;
        }
        // 判断是否显示分页上一步按钮
        $scope.isShowPre = false;
        if ($scope.currentPage > 1 && totalPage > maxPageLink) {
          $scope.isShowPre = true;
        } else {
          $scope.isShowPre = false;
        }
        // 判断是否显示分页下一步按钮
        $scope.isShowNext = false;
        if ($scope.currentPage !== totalPage && totalPage > 1) {
          $scope.isShowNext = true;
        } else {
          $scope.isShowNext = false;
        }
        // 求出所有页码
        $scope.pageIndexs = [];
        for (var i = 1; i < totalPage + 1; i++) {
          $scope.pageIndexs.push(i);
        }
        if ($scope.currentPage < (maxPageLink + 1) / 2) {
          $scope.pageIndexs = $scope.pageIndexs.slice(0, maxPageLink);
        } else if (totalPage - $scope.currentPage < (maxPageLink - 1) / 2) {
          $scope.pageIndexs = $scope.pageIndexs.slice(totalPage - maxPageLink, totalPage);
        } else {
          $scope.pageIndexs = $scope.pageIndexs.slice($scope.currentPage - (maxPageLink + 1) / 2, 
            $scope.currentPage + (maxPageLink - 1) / 2);
        }
      }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
      });
    }],
    link: function($scope) {

    }
  };
}]);
