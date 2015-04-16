// (function(){
// 	"use strict";

	var app = angular.module("PopUp",['ui.router', 'templates', 'Devise']);

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
										
				})

				.state('login', {
		      url: '/login',
		      templateUrl: 'auth/_login.html',
		      controller: 'AuthController',
		      onEnter: ['$state', 'Auth', function($state, Auth) {
		        Auth.currentUser().then(function (){
		          $state.go('home');
		        })
		      }]
		    })

		    .state('register', {
		      url: '/register',
		      templateUrl: 'auth/_register.html',
		      controller: 'AuthController',
		      onEnter: ['$state', 'Auth', function($state, Auth) {
		        Auth.currentUser().then(function (){
		          $state.go('home');
		        })
		      }]
		    });

				}]);
	
// }());