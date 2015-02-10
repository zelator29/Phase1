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
    $rootScope.showSpinner = false;
    $rootScope.history = [];

    
    $scope.$on('$routeChangeSuccess', function(event, next, current) { 
        $rootScope.currentController = next.$$route.controller;
        if ($rootScope.currentController === 'searchController') {
            $rootScope.showButton = false;
        }
        else if ($rootScope.currentController === 'listController') {
            $rootScope.showButton = true;
        }
        else if ($rootScope.currentController === 'detailsController') {
            $rootScope.showButton = true;
        }
    });
    
    $rootScope.onBack = function() {
        var path = $location.path();
        console.log('path:' + path);
        if (startsWith(path, '/detail')) {
            // Go back to the search page
            // $location.path('/list');
            // $location.replace();

        var prevUrl = $rootScope.history.length > 0 ? $rootScope.history.splice(-2)[0] : "/";
        $location.path(prevUrl);
        }

        else {
            // Go back to the search page
            $location.path('/search');
            $location.replace();
        }

   };
});