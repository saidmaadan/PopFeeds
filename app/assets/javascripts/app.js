// (function(){
// 	"use strict";

	var app = angular.module("PopUp",['ui.router', 'templates']);

	app.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('home');
			
			$stateProvider
				.state('home',{
					url: '/home',
					templateUrl: 'home/_home.html',
					controller: 'MainController',
					resolve: {
					  postPromise: ['posts', function(posts){
					    return posts.getAll();
					  	}]
					  }
				})

				.state('posts',{
					url: '/posts/{id}',
					templateUrl: 'posts/_posts.html',
					controller: "PostController",
					resolve: {
					  post: ['$stateParams', 'posts', function($stateParams, posts) {
					    return posts.get($stateParams.id);
					  }]
					}
										
				});

		}]);
	
// }());