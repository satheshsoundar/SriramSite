/*(function(angular) {
  angular.module("myApp.controllers", []);
  angular.module("myApp.services", []);
  angular.module("myApp", ["ngResource", "myApp.controllers", "myApp.services"]);
}(angular));*/

// create the module and name it sriramApp
	var sriramApp = angular.module('sriramApp', ['ngRoute']);

	// configure our routes
	sriramApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})
			// route for the service page
			.when('/services', {
				templateUrl : 'pages/services.html',
				controller  : 'servicesController'
			})
			// route for the service page
			.when('/pricing', {
				templateUrl : 'pages/pricing.html',
				controller  : 'pricingController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	sriramApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	sriramApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	sriramApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	sriramApp.controller('pricingController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
	
	sriramApp.controller('servicesController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});