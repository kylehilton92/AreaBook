'use strict';

angular.module('areaBook.totals',[])
	.controller('totalsController', ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {

		$http.post('/numbers', {leadership : $rootScope.leadership}).then(function (resp) {
			$scope.data = resp.data;
		});

	}]);