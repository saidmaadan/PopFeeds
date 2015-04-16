(function(){
	"use strict";

	var app = angular.module("PopUp");
	app.controller('PostController', PostController);

		function PostController($scope, $stateParams, posts){
	    $scope.post = posts.posts[$stateParams.id];

	    $scope.addComment = function(){
			  if($scope.body === '') { return; }
			  $scope.post.comments.push({
			    body: $scope.body,
			    author: 'user',
			    upvotes: 0
			    
			  });
			  $scope.body = '';
			};
		}
	}());