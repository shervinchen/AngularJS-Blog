/**
* Author: csdoker
* CreateTime: 2017/12/23
* Tips: 本文件定义项目的主模块-BlogApp
*/
'use strict';

var BlogApp = angular.module("BlogApp", ['ui.router', 'ngCookies', 'hc.marked'])

.config(['markedProvider', function (markedProvider) {
	markedProvider.setOptions({
		gfm: true,
		tables: true,
		highlight: function (code, lang) {
			if (lang) {
				return hljs.highlight(lang, code, true).value;
			} else {
				return hljs.highlightAuto(code).value;
			}
		}
	});
	markedProvider.setRenderer({
		link: function(href, title, text) {
			return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
		}
	});
}]);