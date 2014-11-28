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

module.controller('mainController', function($scope, $rootScope, $location){
    $rootScope.showButton = false;
    $rootScope.currentController = '';
    
    $scope.$on('$routeChangeSuccess', function(event, next, current) { 
        $rootScope.currentController = next.$$route.controller;
        if ($rootScope.currentController === 'searchController') {
            $rootScope.showButton = false;
        }
        if ($rootScope.currentController === 'listController') {
            $rootScope.showButton = true;
        }
        console.log();
    });
    
    $rootScope.onBack = function() {
        $location.path('/');
        $location.replace();
   };
});