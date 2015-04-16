(function(){
	"use strict";


var app = angular.module("PopUp");

app.factory('posts', [function($http){
		var o = {
			posts: [
		{title: "post 1", upvotes: 4},
		{title: "post 2", upvotes: 3},
		{title: "post 3", upvotes: 1},
		{title: "post 4", upvotes: 7},
		{title: "post 5", upvotes: 9},
		{title: "post 6", upvotes: 2}
		]
		};
		// return o;

		o.getAll = function(){
			return $http.get('/posts.json').success(function(data){
				angular.copy(data, o.posts);
			});
		}

		o.create = function(post){
			return $http.post('/posts.json', post).success(function(data){
				o.posts.push(data)
			});
		}
	
	}]);
}());