var module = angular.module('PGHCaresPhase1', ['ngRoute','ui.bootstrap']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: "search.html",
            controller: 'searchController'
        })
        .when('/list?:params', {
            templateUrl: "list.html",
            controller: 'listController'
        })
        .when('/detail', {
            templateUrl: "detail.html",
            controller: 'detailController'
        })
        .when('/', {
            templateUrl: "splash.html",
            controller: 'splashController'
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
        else if ($rootScope.currentController === 'listController') {
            $rootScope.showButton = true;
        }
        else {
            console.log('Route change: ');
            console.log(next);
        }
    });
    
    $rootScope.onBack = function() {
        var path = $location.path();
        if (startsWith(path, '')) {}
        console.log('Path: ' + path);

        // If detail is showing, hide it
        if ($rootScope.detailActive) {
            $rootScope.detailActive = false;
            return;
        }
        
        // Go back to the search page
        $location.path('/search');
        $location.replace();
   };
});