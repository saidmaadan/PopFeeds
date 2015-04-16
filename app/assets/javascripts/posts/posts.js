(function(){
	"use strict";


var app = angular.module("PopUp");

app.factory('posts', ['$http',function($http){
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
		return o;

		o.getAll = function(){
			return $http.get('/posts.json').success(function(data){
				angular.copy(data, o.posts);
			});
		};

		o.create = function(post){
			return $http.post('/posts.json', post).success(function(data){
				o.posts.push(data)
			});
		};

		o.upvote = function(post) {
		  return $http.put('/posts/' + post.id + '/upvote.json')
		    .success(function(data){
		      post.upvotes += 1;
		    });
		};

		o.get = function(id) {
		  return $http.get('/posts/' + id + '.json').then(function(res){
		    return res.data;
		  });
		};

		o.addComment = function(id, comment) {
		  return $http.post('/posts/' + id + '/comments.json', comment);
		};

		o.upvoteComment = function(post, comment) {
		  return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
		    .success(function(data){
		      comment.upvotes += 1;
		    });
		};
	
	}]);
}());