var module = angular.module('PGHCaresPhase1', ['ngRoute', 'jqwidgets']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "search.html",
            controller: 'searchController'
        })
        .when('/list?:params', {
            templateUrl: "list.html",
            controller: 'listController'
        })
        .when('/splash', {
            templateUrl: "splash.html"
        })
        .otherwise({redirectTo: '/'});
}]);
