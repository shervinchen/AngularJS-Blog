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
			// 判断是否显示分页上一步按钮
			$scope.isShowPre = false;
			if ($stateParams.page > PAGE_FIRST) {
				$scope.isShowPre = true;
			} else {
				$scope.isShowPre = false;
			}
			// 判断是否显示分页下一步按钮
			$scope.isShowNext = true;
		},
		link: function($scope) {
			
		}
	};
}]);
