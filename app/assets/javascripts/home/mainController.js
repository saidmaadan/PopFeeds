// (function(){
// 	"use strict";

	var app = angular.module("PopUp");

	app.controller("MainController", MainController);

		function MainController($scope, $stateParams, posts){
			$scope.posts = posts.posts;

			$scope.addPost =function(){
				if(!$scope.title || $scope.title === ''){
					return; }
					posts.create({
						title: $scope.title, 
						link: $scope.link,
					});
				$scope.title = "";
				$scope.link = "";
			};

			$scope.incrementUpvotes = function(post){
				posts.upvote(post);
			};
		}
	// }());