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
        .when('/details', {
            template: "<h1 class='form-control'>{{message}}<h1>",
            controller: 'detailsController'
        })            
        .when('/splash', {
            templateUrl: "splash.html"
        })
        .otherwise({redirectTo: '/'});
}]);

module.run(function($rootScope) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", 
            function(event, next, current) {
                console.log(event);
                console.log(next);
                console.log(current);
            });
 });
