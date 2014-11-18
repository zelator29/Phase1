var module = angular.module('PGHCaresPhase1', ['ngRoute', 'jqwidgets']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "search.html",
            controller: 'searchController'
        })
        .when('/list', {
            template: "<h1 class='form-control'>{{message}}<h1>",
            controller: 'listController'
        })
        .when('/details', {
            template: "<h1 class='form-control'>{{message}}<h1>",
            controller: 'detailsController'
        })            
        .when('/splash', {
            templateUrl: "splash.html"
        })
        .otherwise({redirectTo: '/'});
}]);

