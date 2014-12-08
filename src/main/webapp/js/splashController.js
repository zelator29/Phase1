module.controller('splashController', function($scope, $location) {
    $scope.login = function() {
        $location.path('/search');
        $location.replace(); 
    };
});

