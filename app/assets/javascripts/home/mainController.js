(function(){
	"use strict";

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
				// $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 3,
				// comments: [
			 //    {author: 'Joe', body: 'Cool post!', upvotes: 0},
			 //    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
	  	// 	]});
				$scope.title = "";
				$scope.link = "";
			};

			$scope.incrementUpvotes = function(post){
				post.upvotes += 1;
			};
		}
	}());